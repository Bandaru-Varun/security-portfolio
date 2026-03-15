import { motion } from "framer-motion"
import { fadeUp } from "./animations"

export default function Contact() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-24 bg-slate-900 text-center px-6 text-white"
    >

      <h2 className="text-4xl font-bold mb-10">
        Contact
      </h2>

      <p className="text-slate-400 mb-8">
        Open to Cloud Security, Backend Engineering,
        and Security Engineering roles.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        <a
          href="mailto:yourmail@gmail.com"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
        >
          Email Me
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

    </motion.section>
  )
}
