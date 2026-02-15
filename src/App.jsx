import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "./index.css";

// Small project image in About Me section
import project1 from "./assets/project1.png.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
};

function App() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white px-6 py-12"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-5xl mx-auto space-y-24">

        {/* Hero Section */}
        <motion.section variants={fadeInUp} className="text-center space-y-6">
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold">
            Randall Chapman-Bey
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-400">
            Full-Stack Developer | React | Node.js | Cybersecurity Enthusiast
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-4 text-gray-400">
            <a href="https://github.com/profitboysub0-max/" target="_blank" rel="noreferrer"><Github size={32} /></a>
            <a href="https://www.linkedin.com/in/randall-chapman-bey-488509253//" target="_blank" rel="noreferrer"><Linkedin size={32} /></a>
            <a href="mailto:profiboysub0@gmail.com"><Mail size={32} /></a>
          </motion.div>
        </motion.section>

        {/* About Me Section with smaller project image */}
        <motion.section variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-6">
          {/* Resized circular image */}
          <motion.img
            src={project1}
            alt="Project 1"
            className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
            whileHover={{ scale: .05, y: -3 }}
            whileTap={{ scale: 5.98 }}
            transition={{ type: "spring", stiffness: 30, damping: 20 }} 
          />

          {/* About text */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-400 leading-relaxed">
              I am a Computer Science major at San Antonio College with experience as an IT and Project Management Intern.
              I focus on building secure and scalable full-stack applications while leveraging Linux, networking, and cybersecurity knowledge.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-xl mb-3">Frontend</h3>
              <ul className="text-gray-400 space-y-1">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3 / Tailwind</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-xl mb-3">Backend</h3>
              <ul className="text-gray-400 space-y-1">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-xl mb-3">Security & Systems</h3>
              <ul className="text-gray-400 space-y-1">
                <li>Linux CLI</li>
                <li>Firewall & Security Config</li>
                <li>Networking</li>
                <li>PowerShell / Scripting</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400">Email: your@email.com</p>
        </motion.section>

        {/* Contact Form */}
        <motion.section variants={fadeInUp} className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <form className="flex flex-col max-w-md gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-zinc-900 text-white" />
            <input type="email" placeholder="Your Email" className="p-3 rounded bg-zinc-900 text-white" />
            <textarea placeholder="Your Message" className="p-3 rounded bg-zinc-900 text-white" rows={5} />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded p-3 text-white font-semibold">
              Send Message
            </button>
          </form>
        </motion.section>

      </div>
    </motion.div>
  );
}

export default App;

