import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenText,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MoonStar,
  NotebookPen,
  Rocket,
  Send,
  Shield,
  Sparkles,
  SunMedium,
  Workflow,
  XCircle
} from "lucide-react";
import headshot from "./assets/project1.png.jpg";

const heroMessages = [
  "scalable cloud + AI-powered web apps.",
  "realtime product experiences with energy.",
  "secure systems that still feel human.",
  "interactive builds that recruiters remember."
];

const availabilityTags = [
  "Open to internships and junior roles",
  "Frontend + backend + cloud mindset",
  "Currently sharpening AI and security depth"
];

const impactStats = [
  {
    value: "7",
    label: "Case studies",
    detail: "Product, security, cloud, club, API, plugin, and concept work"
  },
  {
    value: "20+",
    label: "Feature systems",
    detail: "Realtime feeds, auth, DMs, notifications, triage, deployment, and more"
  },
  {
    value: "4",
    label: "Build lanes",
    detail: "Frontend, backend, cloud, and AI/security growth"
  },
  {
    value: "Open",
    label: "Hiring status",
    detail: "Available for internships, junior product engineering, and collaborations"
  }
];

const impactHighlights = [
  "I ship features people can feel, not just APIs that exist.",
  "I think in systems: UX, backend, delivery, and next-step monetization or growth.",
  "I can move across product engineering, security investigations, and cloud-oriented execution."
];

const featuredProjects = [
  {
    title: "Put Me On",
    eyebrow: "Flagship Build",
    category: "Realtime Product",
    summary:
      "A social music platform with posts, collaborative playlists, direct messaging, notifications, analytics, and creator-friendly interactions.",
    metric: "Feed + messaging + collaboration in one product surface",
    stack: ["React", "TypeScript", "Convex", "Clerk", "Push Notifications"],
    bullets: [
      "Built song, playlist, and thought posts with likes, reposts, comments, and sharing.",
      "Added direct messaging, unread counters, profile discovery, and notification flows.",
      "Implemented collaborative playlist permissions and creator analytics dashboards."
    ],
    actions: [
      { label: "Talk About This Build", href: "#contact" },
      {
        label: "GitHub Profile",
        href: "https://github.com/profitboysub0-max/",
        external: true
      }
    ],
    accent: "77 228 255",
    featured: true
  },
  {
    title: "Honey Badger Incident Response",
    eyebrow: "Security Case",
    category: "Threat Triage",
    summary:
      "A hands-on Windows incident response workflow focused on hostile remote access, process investigation, outbound traffic analysis, and remediation.",
    metric: "Detection to documentation with native tooling and analyst thinking",
    stack: ["PowerShell", "Windows", "Host Triage", "Incident Response"],
    bullets: [
      "Investigated suspicious remote-control behavior on a live Windows host.",
      "Correlated processes and network activity to isolate the malicious executable.",
      "Worked through containment, eradication, recovery, and reporting."
    ],
    actions: [
      { label: "See My Journey", href: "#story" },
      { label: "Start a Conversation", href: "#contact" }
    ],
    accent: "110 231 183",
    image: "/honey-badger-2026.jpg",
    imageAlt: "Honey Badger cyber incident response illustration",
    imageWidth: 800,
    imageHeight: 1200,
    imagePriority: true
  },
  {
    title: "NVC Wildcats AI & Cloud Club",
    eyebrow: "Live Delivery",
    category: "Community Platform",
    summary:
      "A multi-page club site with reusable navigation, responsive layouts, neon branding, and a polished student-community experience.",
    metric: "A deployed website that feels cohesive across pages and devices",
    stack: ["HTML", "CSS", "JavaScript", "GitHub", "Vercel"],
    bullets: [
      "Created a shared scaffold across About, Experience, Announcements, Livestream, Members, and more.",
      "Built a consistent visual system with responsive cards, forms, and layout patterns.",
      "Published the finished work and validated the routes in a real deployment flow."
    ],
    actions: [
      {
        label: "View Live Site",
        href: "https://randall-portfolio-tau.vercel.app/",
        external: true
      },
      {
        label: "Open Repository",
        href: "https://github.com/profitboysub0-max/cloud-computing-club-website",
        external: true
      }
    ],
    accent: "255 179 71"
  },
  {
    title: "Realtime Plugin Work",
    eyebrow: "Experimental Systems",
    category: "Unreal + WebSocket",
    summary:
      "A standout direction for engine-connected tooling and plugins that bridge realtime events, gameplay thinking, and networked interaction.",
    metric: "The kind of cross-discipline work that makes a junior portfolio memorable",
    stack: ["WebSockets", "Realtime Events", "Tooling", "Unreal Workflows"],
    bullets: [
      "Exploring event-driven patterns that can power connected gameplay or editor tooling.",
      "Positioning plugin work as proof of systems thinking beyond standard CRUD apps.",
      "Using this lane to highlight interest in immersive, interactive product surfaces."
    ],
    actions: [
      { label: "Why This Matters", href: "#signature" },
      { label: "Let’s Build Something", href: "#contact" }
    ],
    accent: "255 122 89"
  },
  {
    title: "SkyBreak Aura Clash",
    eyebrow: "Signature Concept",
    category: "Game Systems",
    summary:
      "A combat-forward concept space that shows worldbuilding, systems design, visual identity, and the kind of ambition that separates a portfolio from a resume.",
    metric: "Concept work used strategically to signal taste, range, and product imagination",
    stack: ["Combat Loops", "UX Concepts", "Progression", "Game Feel"],
    bullets: [
      "Framed as a concept lane rather than pretending it is already a shipped game.",
      "Useful for showing how you think about pacing, feedback, and memorable interaction.",
      "Pairs naturally with plugin, cloud, and realtime experiments to create a unique narrative."
    ],
    actions: [
      { label: "See the Signature Lane", href: "#signature" },
      { label: "View Stack", href: "#stack" }
    ],
    accent: "199 146 255"
  }
];

const stackGroups = [
  {
    title: "Frontend",
    icon: Cpu,
    focus: 92,
    description: "Interfaces built to feel polished, responsive, and recruiter-friendly.",
    tools: ["React", "JavaScript", "TypeScript", "Framer Motion", "Responsive UI"],
    growth: "Sharpening premium visual storytelling and motion-heavy product surfaces."
  },
  {
    title: "Backend",
    icon: Database,
    focus: 88,
    description: "APIs, auth, data relationships, and the workflows behind the user-facing experience.",
    tools: ["Node.js", "Express", "Sequelize", "REST APIs", "JWT"],
    growth: "Continuing to deepen architecture decisions and reliability patterns."
  },
  {
    title: "Cloud",
    icon: Cloud,
    focus: 76,
    description: "Deployment-ready thinking with a growing cloud engineering lane.",
    tools: ["Convex", "Vercel", "GitHub", "Realtime Sync", "Deployment Pipelines"],
    growth: "Currently leaning harder into AWS and cloud system design."
  },
  {
    title: "AI + Security",
    icon: BrainCircuit,
    focus: 74,
    description: "Security investigations today, AI-powered product features tomorrow, and a path that connects both.",
    tools: ["Incident Response", "Windows Triage", "PowerShell", "Prompt Thinking", "AI Roadmap"],
    growth: "Actively growing cloud + AI depth while keeping a security mindset."
  }
];

const storySteps = [
  {
    title: "Self-directed builder",
    detail:
      "I learned by building, debugging, redesigning, and shipping work that had to function in the real world.",
    icon: Rocket
  },
  {
    title: "Grounded in CS + internships",
    detail:
      "Formal study and internship experience gave structure to the momentum and helped sharpen teamwork, delivery, and execution.",
    icon: GraduationCap
  },
  {
    title: "Aiming at product engineering",
    detail:
      "The next chapter is cloud, AI, and secure systems work that combines technical depth with product intuition.",
    icon: BriefcaseBusiness
  }
];

const devLogs = [
  {
    title: "How I built a social music app with realtime energy",
    readTime: "4 min read",
    summary:
      "A breakdown of the feed, collaboration model, messaging flow, and the decisions that made the product feel social instead of static.",
    tags: ["Product Thinking", "Realtime", "React"]
  },
  {
    title: "Fixing deployment friction without losing momentum",
    readTime: "3 min read",
    summary:
      "A practical story about Vercel issues, project organization, and keeping the user-facing product moving while cleaning up the pipeline.",
    tags: ["Deployment", "DX", "Iteration"]
  },
  {
    title: "What incident response taught me about safer software",
    readTime: "5 min read",
    summary:
      "Lessons from host triage and remediation that directly improve how I think about application trust, observability, and defensive defaults.",
    tags: ["Security", "Systems", "Engineering Judgment"]
  }
];

const signatureTags = [
  "Music visualizer energy",
  "Realtime sync",
  "Cloud-backed interaction",
  "Gameplay-inspired UX",
  "Plugin experimentation"
];

const visualizerBars = [76, 42, 88, 58, 96, 64, 82, 48, 90, 54, 72, 44, 92, 62, 78, 50];

const CONTACT_API_URL = "/api/contact";
function TypeCycle({ items, reducedMotion }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion || items.length === 0) {
      return undefined;
    }

    const currentItem = items[activeIndex];
    const hasCompletedWord = displayText === currentItem;
    const delay = isDeleting ? 34 : hasCompletedWord ? 1400 : 68;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && !hasCompletedWord) {
        setDisplayText(currentItem.slice(0, displayText.length + 1));
        return;
      }

      if (!isDeleting && hasCompletedWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText.length > 0) {
        setDisplayText(currentItem.slice(0, displayText.length - 1));
        return;
      }

      setIsDeleting(false);
      setActiveIndex((current) => (current + 1) % items.length);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, displayText, isDeleting, items, reducedMotion]);

  const renderedText = reducedMotion ? items[0] : displayText || items[activeIndex];

  return (
    <span className="type-cycle" aria-live="polite">
      <span>{renderedText}</span>
      <span className="type-cycle__cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}

function ParticleField({ theme, reducedMotion }) {
  useEffect(() => {
    const canvas = document.getElementById("particle-field");

    if (!(canvas instanceof HTMLCanvasElement)) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    const palette =
      theme === "dark"
        ? {
            dot: "rgba(143, 244, 255, 0.72)",
            line: "rgba(91, 231, 255, 0.12)",
            glow: "rgba(255, 177, 66, 0.08)"
          }
        : {
            dot: "rgba(13, 148, 136, 0.72)",
            line: "rgba(249, 115, 22, 0.1)",
            glow: "rgba(8, 145, 178, 0.08)"
          };

    let width = 0;
    let height = 0;
    let frameId = 0;

    const particleCount = window.innerWidth < 768 ? 26 : 46;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0015,
      vy: (Math.random() - 0.5) * 0.0015,
      radius: Math.random() * 1.8 + 0.7
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const drawFrame = () => {
      context.clearRect(0, 0, width, height);

      context.fillStyle = palette.glow;
      context.beginPath();
      context.arc(width * 0.18, height * 0.2, 180, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.arc(width * 0.82, height * 0.3, 220, 0, Math.PI * 2);
      context.fill();

      particles.forEach((particle) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x <= 0 || particle.x >= 1) {
            particle.vx *= -1;
          }

          if (particle.y <= 0 || particle.y >= 1) {
            particle.vy *= -1;
          }
        }
      });

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const pointX = particle.x * width;
        const pointY = particle.y * height;

        context.fillStyle = palette.dot;
        context.beginPath();
        context.arc(pointX, pointY, particle.radius, 0, Math.PI * 2);
        context.fill();

        for (let comparisonIndex = index + 1; comparisonIndex < particles.length; comparisonIndex += 1) {
          const comparison = particles[comparisonIndex];
          const comparisonX = comparison.x * width;
          const comparisonY = comparison.y * height;
          const distance = Math.hypot(pointX - comparisonX, pointY - comparisonY);

          if (distance < 140) {
            context.strokeStyle = palette.line;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(pointX, pointY);
            context.lineTo(comparisonX, comparisonY);
            context.stroke();
          }
        }
      }

      if (!reducedMotion) {
        frameId = window.requestAnimationFrame(drawFrame);
      }
    };

    resize();
    drawFrame();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
    };
  }, [reducedMotion, theme]);

  return <canvas id="particle-field" className="particle-field" aria-hidden="true" />;
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  const prefersReducedMotion = useReducedMotion();
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    humanCheck: "",
    website: ""
  });
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const introMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" }
      };

  const revealMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.65, ease: "easeOut" }
      };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          humanCheck: formData.humanCheck,
          website: formData.website,
          formStartedAt
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      setSubmitStatus({ type: "success", message: "Message sent successfully. I will reply soon." });
      setFormData({ name: "", email: "", message: "", humanCheck: "", website: "" });
      setFormStartedAt(Date.now());
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Message failed. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="site-shell">
      <ParticleField theme={theme} reducedMotion={prefersReducedMotion} />
      <div className="page-glow page-glow--one" aria-hidden="true" />
      <div className="page-glow page-glow--two" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />

      <div className="site-frame">
        <header className="topbar">
          <div className="container topbar__inner">
            <a href="#home" className="brand" aria-label="Go to top of portfolio">
              <span className="brand__mark" aria-hidden="true">
                VP
              </span>
              <span className="brand__copy">
                <strong>VEX PROFITUS</strong>
                <small>Randall Chapman-Bey</small>
              </span>
            </a>

            <nav className="topbar__nav" aria-label="Primary">
              <a href="#work">Work</a>
              <a href="#signature">Signature</a>
              <a href="#stack">Stack</a>
              <a href="#story">Story</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="topbar__actions">
              <button
                type="button"
                className="theme-toggle"
                onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}
                <span>{theme === "dark" ? "Light" : "Dark"}</span>
              </button>
              <a href="#contact" className="button button--primary button--compact">
                Hire Me <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </header>

        <div className="container">
          <section id="home" className="hero section">
            <motion.div className="hero__copy" {...introMotion}>
              <div className="hero__eyebrows">
                <span className="eyebrow-badge">Cloud + AI + Product Engineer Path</span>
                <span className="eyebrow-badge eyebrow-badge--soft">Available Now</span>
              </div>

              <h1>
                Building web products that look sharper,
                <span> move faster, and think bigger.</span>
              </h1>

              <p className="hero__identity">
                I build <TypeCycle items={heroMessages} reducedMotion={prefersReducedMotion} />
              </p>

              <p className="hero__summary">
                Computer Science major at San Antonio College with internship experience, secure systems
                curiosity, and a product-minded approach to React, backend architecture, cloud growth, and
                interactive experiences.
              </p>

              <div className="hero__actions">
                <a href="#work" className="button button--primary">
                  View Selected Work <ArrowRight size={16} />
                </a>
                <a href="#contact" className="button button--secondary">
                  Start a Conversation
                </a>
                <a href="mailto:rchapman16@student.alamo.edu?subject=Resume%20Request" className="button button--ghost">
                  Request Resume <Mail size={16} />
                </a>
              </div>

              <div className="hero__availability">
                {availabilityTags.map((tag) => (
                  <span key={tag} className="availability-pill">
                    <Sparkles size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="hero__visual" {...introMotion} transition={{ duration: 0.75, delay: 0.12 }}>
              <article className="glass-panel profile-card">
                <div className="profile-card__top">
                  <span className="eyebrow-badge eyebrow-badge--soft">Builder Snapshot</span>
                  <BadgeCheck size={18} />
                </div>

                <div className="profile-card__identity">
                  <div className="profile-card__avatar-wrap">
                    <img src={headshot} alt="Randall Chapman-Bey portrait" className="profile-card__avatar" />
                  </div>
                  <div>
                    <h2>Randall Chapman-Bey</h2>
                    <p>
                      Full-stack developer focused on secure systems, product execution, realtime ideas, and
                      experiences that feel alive instead of generic.
                    </p>
                  </div>
                </div>

                <div className="profile-card__stats">
                  <div>
                    <span>Focus</span>
                    <strong>Cloud + AI + Realtime</strong>
                  </div>
                  <div>
                    <span>Strength</span>
                    <strong>Builder + Systems Lens</strong>
                  </div>
                  <div>
                    <span>Status</span>
                    <strong>Internships / Junior Roles</strong>
                  </div>
                </div>
              </article>

              <article className="glass-panel signal-card">
                <div className="signal-card__header">
                  <p className="section-kicker">What you get when you hire me</p>
                  <h3>Range, initiative, and product energy.</h3>
                </div>
                <div className="signal-card__grid">
                  <div className="signal-card__item">
                    <Code2 size={18} />
                    <div>
                      <strong>Shipping instinct</strong>
                      <span>I turn ideas into usable interfaces and working systems.</span>
                    </div>
                  </div>
                  <div className="signal-card__item">
                    <Shield size={18} />
                    <div>
                      <strong>Security mindset</strong>
                      <span>I think about trust, remediation, and safer defaults.</span>
                    </div>
                  </div>
                  <div className="signal-card__item">
                    <Workflow size={18} />
                    <div>
                      <strong>Growth trajectory</strong>
                      <span>Cloud, AI, and realtime systems are all active paths.</span>
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          </section>

          <motion.section id="impact" className="section" {...revealMotion}>
            <SectionHeading
              eyebrow="Impact Dashboard"
              title="Proof that reads like product engineering, not just student work."
              description="The goal is simple: make recruiters see scope, initiative, and execution within seconds."
            />

            <div className="impact-layout">
              <div className="impact-grid">
                {impactStats.map((stat) => (
                  <article key={stat.label} className="glass-panel stat-card">
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                    <p>{stat.detail}</p>
                  </article>
                ))}
              </div>

              <article className="glass-panel impact-brief">
                <p className="section-kicker">Why this portfolio lands harder now</p>
                <h3>It positions you as a product-minded engineer.</h3>
                <ul>
                  {impactHighlights.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </motion.section>

          <motion.section id="work" className="section" {...revealMotion}>
            <SectionHeading
              eyebrow="Featured Work"
              title="Projects that feel like experiences instead of flat thumbnails."
              description="Each card is positioned to show what was built, why it matters, and how it reflects your range."
            />

            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <motion.article
                  key={project.title}
                  className={`project-card glass-panel${project.featured ? " project-card--featured" : ""}`}
                  style={{ "--accent": project.accent }}
                  whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <div className="project-card__header">
                    <div>
                      <span className="project-card__eyebrow">{project.eyebrow}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-card__category">{project.category}</span>
                  </div>

                  <p className="project-card__summary">{project.summary}</p>

                  {project.image && (
                    <div className="project-card__image-wrap">
                                                                  <img
                        src={project.image}
                        srcSet={project.image}
                        sizes="(max-width: 820px) 92vw, 640px"
                        alt={project.imageAlt}
                        className="project-card__image"
                        loading={project.imagePriority ? "eager" : "lazy"}
                        decoding="async"
                        crossOrigin="anonymous"
                        width={project.imageWidth}
                        height={project.imageHeight}
                        onError={(e) => {
                          const fallback = project.imageFallback || project.image;
                          if (e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                      />
                    </div>
                  )}

                  <p className="project-card__metric">{project.metric}</p>

                  <div className="chip-row">
                    {project.stack.map((item) => (
                      <span key={item} className="chip-row__item">
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="project-card__list">
                    {project.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="project-card__actions">
                    {project.actions.map((action) => (
                      <a
                        key={action.label}
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noreferrer" : undefined}
                      >
                        {action.label}
                        <ArrowUpRight size={15} />
                      </a>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section id="signature" className="section" {...revealMotion}>
            <div className="signature-layout">
              <div className="signature-copy">
                <SectionHeading
                  eyebrow="Signature Feature"
                  title="A memorable lane: music, realtime systems, and gameplay-inspired interaction."
                  description="This is the part that gives the portfolio its own fingerprint instead of looking like every other junior dev site."
                />

                <p>
                  The strongest through-line in your work is not just that you code. It is that you build
                  interactive systems people can feel. Social music, cloud-backed features, plugin concepts, and
                  game-inspired design all point in the same direction.
                </p>

                <div className="signature-tags">
                  {signatureTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <article className="glass-panel signature-visual">
                <div className="signature-visual__stage">
                  <div className="visualizer">
                    {visualizerBars.map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className="visualizer__bar"
                        style={{ "--bar-height": `${height}%`, "--bar-delay": `${index * 0.08}s` }}
                      />
                    ))}
                  </div>

                  <span className="orbit-chip orbit-chip--one">Social Feed</span>
                  <span className="orbit-chip orbit-chip--two">Realtime Sync</span>
                  <span className="orbit-chip orbit-chip--three">Plugin R&amp;D</span>
                  <span className="orbit-chip orbit-chip--four">Cloud Roadmap</span>
                </div>

                <div className="signature-visual__footer">
                  <div>
                    <p className="section-kicker">Signature direction</p>
                    <h3>Experiences that feel alive.</h3>
                  </div>
                  <p>
                    From product builds to Unreal-adjacent experiments, the common thread is memorable interaction
                    backed by real engineering choices.
                  </p>
                </div>
              </article>
            </div>
          </motion.section>

          <motion.section id="stack" className="section" {...revealMotion}>
            <SectionHeading
              eyebrow="Visual Stack"
              title="A clean stack map of where you ship today and where you are pushing next."
              description="The bars represent current build focus, not inflated self-ratings."
            />

            <div className="stack-grid">
              {stackGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article key={group.title} className="glass-panel stack-card">
                    <div className="stack-card__header">
                      <span className="stack-card__icon">
                        <Icon size={18} />
                      </span>
                      <div>
                        <h3>{group.title}</h3>
                        <p>{group.description}</p>
                      </div>
                    </div>

                    <div className="stack-card__meter" aria-hidden="true">
                      <div className="stack-card__meter-fill" style={{ width: `${group.focus}%` }} />
                    </div>
                    <p className="stack-card__caption">Current build focus: {group.focus}%</p>

                    <div className="chip-row chip-row--stack">
                      {group.tools.map((tool) => (
                        <span key={tool} className="chip-row__item">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <p className="stack-card__growth">Currently learning: {group.growth}</p>
                  </article>
                );
              })}
            </div>
          </motion.section>

          <motion.section id="story" className="section" {...revealMotion}>
            <div className="story-layout">
              <div>
                <SectionHeading
                  eyebrow="My Journey"
                  title="A real story section that makes the portfolio more human and more strategic."
                  description="This gives recruiters context for your grit, direction, and momentum without turning into fluff."
                />
                <p className="story-intro">
                  I learned the craft by building real things first, solving messy problems, and improving through
                  repetition. That foundation now connects with formal computer science study, internship experience,
                  and a growing focus on cloud, AI, product engineering, and secure systems.
                </p>
              </div>

              <div className="story-grid">
                {storySteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <article key={step.title} className="glass-panel story-card">
                      <span className="story-card__icon">
                        <Icon size={18} />
                      </span>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </motion.section>

          <motion.section id="logs" className="section" {...revealMotion}>
            <SectionHeading
              eyebrow="Dev Logs"
              title="Technical stories that show communication skill and engineering judgment."
              description="Even a small log section helps hiring teams see how you think, not just what you shipped."
            />

            <div className="logs-grid">
              {devLogs.map((post) => (
                <article key={post.title} className="glass-panel log-card">
                  <div className="log-card__meta">
                    <span>
                      <NotebookPen size={14} />
                      {post.readTime}
                    </span>
                    <BookOpenText size={16} />
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <div className="chip-row chip-row--stack">
                    {post.tags.map((tag) => (
                      <span key={tag} className="chip-row__item">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section id="contact" className="section contact-section" {...revealMotion}>
            <div className="contact-layout">
              <article className="glass-panel contact-panel">
                <p className="section-kicker">Ready for hiring conversations</p>
                <h2>Available for internships, junior roles, and ambitious product builds.</h2>
                <p>
                  If you need someone who can code, learn fast, care about experience quality, and grow into cloud
                  and AI-heavy work, let’s talk.
                </p>

                <div className="contact-panel__details">
                  <div>
                    <Mail size={16} />
                    <span>rchapman16@student.alamo.edu</span>
                  </div>
                  <div>
                    <Github size={16} />
                    <span>github.com/profitboysub0-max</span>
                  </div>
                  <div>
                    <Linkedin size={16} />
                    <span>LinkedIn profile available below</span>
                  </div>
                </div>

                <div className="contact-panel__actions">
                  <a href="https://github.com/profitboysub0-max/" target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/randall-chapman-bey-488509253/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn <ArrowUpRight size={15} />
                  </a>
                  <a href="mailto:rchapman16@student.alamo.edu?subject=Resume%20Request">
                    Request Resume <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>

              <article className="glass-panel form-panel">
                <div className="form-panel__intro">
                  <p className="section-kicker">Contact CTA</p>
                  <h3>Send a message</h3>
                  <p>The contact API is still active, so the redesign stays practical, not just pretty.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <label>
                    <span>Name</span>
                    <input name="name" type="text" value={formData.name} onChange={handleChange} required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </label>
                  <label>
                    <span>Message</span>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <span>Human check</span>
                    <input
                      name="humanCheck"
                      type="text"
                      placeholder="What is 4 + 3?"
                      value={formData.humanCheck}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <input
                    name="website"
                    type="text"
                    className="contact-form__honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                    aria-hidden="true"
                  />
                  <button type="submit" className="button button--primary button--full" disabled={isSubmitting}>
                    <Send size={16} />
                    {isSubmitting ? "Sending..." : "Launch Message"}
                  </button>
                </form>

                {submitStatus.type === "success" && (
                  <p className="status-note status-note--success">
                    <CheckCircle2 size={15} />
                    {submitStatus.message}
                  </p>
                )}
                {submitStatus.type === "error" && (
                  <p className="status-note status-note--error">
                    <XCircle size={15} />
                    {submitStatus.message}
                  </p>
                )}
              </article>
            </div>
          </motion.section>
        </div>

        <footer className="container footer">
          <p>Designed in React with Framer Motion, a custom particle backdrop, stronger storytelling, and sharper hiring signals.</p>
          <span>VEX PROFITUS // Randall Chapman-Bey</span>
        </footer>
      </div>
    </main>
  );
}

export default App;












