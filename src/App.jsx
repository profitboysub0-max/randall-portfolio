import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  Rocket,
  Send,
  Server,
  Shield,
  SatelliteDish,
  Terminal,
  XCircle
} from "lucide-react";
import project1 from "./assets/project1.png.jpg";

const projectAccomplishments = [
  {
    project: "Put Me On - Social Music Platform",
    stack: "React + TypeScript + Convex + Clerk",
    icon: Rocket,
    accomplishments: [
      "Built a full social feed with song, playlist, and thought posts plus likes, reposts, comments, and share links.",
      "Implemented direct messaging with conversation threads and unread message counters.",
      "Shipped collaborative playlists with owner/collaborator permissions, track ordering, and playlist post sharing.",
      "Added social graph features: follow/unfollow, profile search, notifications, and creator analytics dashboards.",
      "Integrated web push notification subscription and dispatch pipelines for social events."
    ]
  },
  {
    project: "Social Music REST API",
    stack: "Node.js + Express + Sequelize + JWT",
    icon: Server,
    accomplishments: [
      "Designed and connected relational models for users, songs, playlists, comments, favorites, and playlist-song joins.",
      "Built JWT authentication flows with hashed passwords, token verification middleware, and protected routes.",
      "Implemented playlist endpoints with included song relationships and authenticated playlist creation.",
      "Delivered comment creation APIs scoped to authenticated users and song IDs.",
      "Configured database connection + server bootstrap with synchronized models and API health route."
    ]
  },
  {
    project: "Clerk Next.js Auth Sandbox",
    stack: "Next.js App Router + Clerk",
    icon: Shield,
    accomplishments: [
      "Integrated ClerkProvider with SignIn/SignUp/UserButton states in the root app layout.",
      "Configured Clerk middleware with route matchers that secure app and API/TRPC routes.",
      "Established an auth-ready Next.js starter for secure feature rollout in future modules."
    ]
  }
];

const missionTimeline = [
  {
    phase: "Phase 01",
    title: "Backend Core Systems",
    detail: "Shipped Express + Sequelize API with auth, playlists, songs, and comments resources."
  },
  {
    phase: "Phase 02",
    title: "Realtime Social Platform",
    detail: "Built Convex-powered social music app with feed interactions, profiles, and following graph."
  },
  {
    phase: "Phase 03",
    title: "Messaging + Notifications",
    detail: "Added direct messaging, unread counters, push subscriptions, and notification workflows."
  },
  {
    phase: "Phase 04",
    title: "Collaborative Playlists",
    detail: "Implemented playlist ownership, collaborator controls, track management, and post sharing."
  },
  {
    phase: "Phase 05",
    title: "Portfolio Mission Control",
    detail: "Deployed this NASA-themed portfolio to present your implementation history and contact pipeline."
  }
];

const skillDeck = [
  {
    title: "Frontend",
    points: ["React", "JavaScript / TypeScript", "Tailwind", "Responsive UI"],
    icon: Cpu
  },
  {
    title: "Backend",
    points: ["Node.js", "Express.js", "REST APIs", "Sequelize / SQL"],
    icon: Database
  },
  {
    title: "Security & Systems",
    points: ["JWT auth", "Linux CLI", "Firewall hardening", "PowerShell scripting"],
    icon: Shield
  }
];

const CONTACT_API_URL = "/api/contact";

function App() {
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

      setSubmitStatus({ type: "success", message: "Transmission successful. I will reply soon." });
      setFormData({ name: "", email: "", message: "", humanCheck: "", website: "" });
      setFormStartedAt(Date.now());
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Transmission failed. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="space-canvas text-slate-100">
      <div className="space-canvas__stars" aria-hidden="true" />
      <div className="space-canvas__orbit" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        <section className="hud-panel mb-8 overflow-hidden md:mb-12">
          <div className="hud-grid gap-8 p-6 md:grid-cols-[1.5fr_1fr] md:p-10">
            <div className="space-y-6">
              <p className="tracking-[0.32em] text-xs text-cyan-300/80">MISSION CONTROL // PORTFOLIO</p>
              <h1 className="font-orbitron text-3xl leading-tight text-white md:text-6xl">
                Randall
                <span className="text-cyan-300"> Chapman-Bey</span>
              </h1>
              <p className="max-w-xl text-sm text-slate-300 md:text-lg">
                Full-Stack Developer focused on secure systems, modern React applications, and deployment-ready
                engineering workflows.
              </p>

              <div className="flex flex-wrap gap-3 text-sm">
                <a href="https://github.com/profitboysub0-max/" target="_blank" rel="noreferrer" className="action-pill">
                  <Github size={16} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/randall-chapman-bey-488509253/"
                  target="_blank"
                  rel="noreferrer"
                  className="action-pill"
                >
                  <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
                </a>
                <a href="mailto:profiboysub0@gmail.com" className="action-pill">
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>

            <div className="hud-card">
              <div className="flex flex-col items-center p-4 pt-6">
                <img
                  src={project1}
                  alt="Randall Chapman-Bey"
                  className="h-8 w-8 rounded-full border border-cyan-300/60 object-cover md:h-10 md:w-10"
                  style={{
                    width: "40px",
                    height: "40px",
                    maxWidth: "40px",
                    maxHeight: "40px",
                    position: "relative",
                    top: "0.3cm"
                  }}
                />
                <p className="mt-2 text-center text-xs tracking-[0.24em] text-cyan-200">FLIGHT STATUS: ACTIVE</p>
              </div>
              <p className="text-center text-sm text-slate-300">
                Computer Science major at San Antonio College with IT and project management internship experience.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 md:mb-12">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="font-orbitron text-xl text-cyan-200 md:text-2xl">Implementation Log</h2>
            <Code2 className="text-cyan-300" size={22} />
          </div>
          <div className="grid gap-4 md:grid-cols-1">
            {projectAccomplishments.map((project) => {
              const Icon = project.icon;
              return (
              <article key={project.project} className="hud-card p-5 md:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{project.project}</h3>
                    <p className="text-sm text-cyan-200">{project.stack}</p>
                  </div>
                  <span className="inline-flex rounded-md border border-cyan-300/40 bg-cyan-400/10 p-2 text-cyan-200">
                    <Icon size={18} />
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.accomplishments.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
              );
            })}
          </div>
        </section>

        <section className="mb-8 md:mb-12">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="font-orbitron text-xl text-cyan-200 md:text-2xl">Mission Timeline</h2>
            <SatelliteDish className="text-cyan-300" size={22} />
          </div>
          <article className="hud-card p-5 md:p-7">
            <div className="project-timeline">
              {missionTimeline.map((event) => (
                <div key={event.phase} className="timeline-item">
                  <div className="timeline-item__dot" aria-hidden="true" />
                  <p className="timeline-item__phase">{event.phase}</p>
                  <h3 className="timeline-item__title">{event.title}</h3>
                  <p className="timeline-item__detail">{event.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mb-8 md:mb-12">
          <h2 className="font-orbitron mb-4 text-xl text-cyan-200 md:text-2xl">Skill Matrix</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {skillDeck.map((item) => {
              const Icon = item.icon;
              return (
              <article key={item.title} className="hud-card p-5">
                <div className="mb-3 flex items-center gap-2 text-cyan-200">
                  <Icon size={18} />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <ul className="space-y-1 text-sm text-slate-300">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="hud-card p-6">
            <h2 className="font-orbitron mb-3 text-xl text-cyan-200">Contact</h2>
            <p className="mb-2 text-slate-200">rchapman16@student.alamo.edu</p>
            <p className="mb-4 text-sm text-slate-400">
              Open to internships, junior engineering roles, and collaboration.
            </p>
            <p className="text-xs text-slate-500">
              Backend: Custom API endpoint at <code>/api/contact</code> (server-side key protected).
            </p>
          </article>

          <article className="hud-card p-6">
            <h2 className="font-orbitron mb-3 text-xl text-cyan-200">Transmit Message</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="hud-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="hud-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="hud-input resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <input
                name="humanCheck"
                type="text"
                placeholder="Human check: what is 4 + 3?"
                className="hud-input"
                value={formData.humanCheck}
                onChange={handleChange}
                required
              />
              <input
                name="website"
                type="text"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
                aria-hidden="true"
              />
              <button type="submit" className="launch-button" disabled={isSubmitting}>
                <Send size={15} /> {isSubmitting ? "Transmitting..." : "Launch Message"}
              </button>
            </form>
            {submitStatus.type === "success" && (
              <p className="status-note status-note--success">
                <CheckCircle2 size={15} /> {submitStatus.message}
              </p>
            )}
            {submitStatus.type === "error" && (
              <p className="status-note status-note--error">
                <XCircle size={15} /> {submitStatus.message}
              </p>
            )}
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
