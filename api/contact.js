/* global process */

const RESEND_API_URL = "https://api.resend.com/emails";
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_MS = 4000;
const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1000;
const HUMAN_CHALLENGE_ANSWER = "7";

const rateLimiter = globalThis.__contactRateLimiter || new Map();
globalThis.__contactRateLimiter = rateLimiter;

function json(res, status, body) {
  res.status(status).json(body);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = req.headers["x-real-ip"];
  if (typeof realIp === "string" && realIp.length > 0) {
    return realIp.trim();
  }

  return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(key) {
  const now = Date.now();
  const existing = rateLimiter.get(key);

  if (!existing || now - existing.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimiter.set(key, { count: 1, windowStart: now });
    return { blocked: false, retryAfterSeconds: 0 };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterMs = RATE_LIMIT_WINDOW_MS - (now - existing.windowStart);
    return {
      blocked: true,
      retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000))
    };
  }

  existing.count += 1;
  rateLimiter.set(key, existing);
  return { blocked: false, retryAfterSeconds: 0 };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { success: false, message: "Method not allowed" });
  }

  const ip = getClientIp(req);
  const limiter = isRateLimited(ip);
  if (limiter.blocked) {
    res.setHeader("Retry-After", String(limiter.retryAfterSeconds));
    return json(res, 429, {
      success: false,
      message: "Too many requests. Please wait before trying again."
    });
  }

  const { name, email, message, website, humanCheck, formStartedAt } = req.body || {};

  const trimmedName = typeof name === "string" ? name.trim() : "";
  const trimmedEmail = typeof email === "string" ? email.trim() : "";
  const trimmedMessage = typeof message === "string" ? message.trim() : "";
  const trimmedWebsite = typeof website === "string" ? website.trim() : "";
  const trimmedHumanCheck = typeof humanCheck === "string" ? humanCheck.trim() : "";
  const startedAt = Number(formStartedAt);
  const now = Date.now();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return json(res, 400, { success: false, message: "Missing required fields." });
  }

  if (trimmedWebsite.length > 0) {
    return json(res, 400, { success: false, message: "Spam check failed." });
  }

  if (trimmedHumanCheck !== HUMAN_CHALLENGE_ANSWER) {
    return json(res, 400, { success: false, message: "Human challenge failed." });
  }

  if (!Number.isFinite(startedAt) || now - startedAt < MIN_FORM_FILL_MS || now - startedAt > MAX_FORM_AGE_MS) {
    return json(res, 400, { success: false, message: "Form validation failed. Please try again." });
  }

  if (!isEmail(trimmedEmail)) {
    return json(res, 400, { success: false, message: "Invalid email address." });
  }

  if (trimmedMessage.length < 10) {
    return json(res, 400, { success: false, message: "Message must be at least 10 characters." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return json(res, 500, {
      success: false,
      message: "Server email environment is not configured."
    });
  }

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: trimmedEmail,
        subject: `Portfolio Contact: ${trimmedName}`,
        text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`
      })
    });

    const resendBody = await resendResponse.json();

    if (!resendResponse.ok) {
      return json(res, 502, {
        success: false,
        message: resendBody?.message || "Failed to deliver email."
      });
    }

    return json(res, 200, { success: true, id: resendBody?.id || null });
  } catch {
    return json(res, 500, { success: false, message: "Unable to process contact request." });
  }
}
