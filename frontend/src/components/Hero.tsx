import { motion } from "framer-motion"
import { fadeUp } from "./animations"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-slate-950 text-white">

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Varun Bandaru
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-2xl text-blue-400 mb-6"
      >
        Cloud & Security Engineer
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-3xl text-slate-400 leading-relaxed"
      >
        I design and build secure backend systems focused on authentication,
        JWT identity infrastructure, and Zero-Trust access control.

        My work centers on Python, FastAPI, PostgreSQL, Docker, and Linux,
        building real security pipelines including token validation,
        policy enforcement, and protected API services.
      </motion.p>

      <div className="flex gap-4 mt-10">

        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
        >
          View Projects
        </a>

        <a
          href="https://github.com/Bandaru-Varun"
          className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-800"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/varun-bandaru-777b5837b"
          className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-800"
        >
          LinkedIn
        </a>

      </div>

    </section>
  )
}
