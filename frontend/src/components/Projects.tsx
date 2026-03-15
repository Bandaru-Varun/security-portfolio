import { motion } from "framer-motion"
import { fadeUp, stagger } from "./animations"

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950 text-white px-6">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >

        <motion.div variants={fadeUp} className="project-card">

          <h3 className="text-xl font-semibold mb-4">
            Zero Trust Cloud Access Broker
          </h3>

          <p className="text-slate-400 mb-4">
            Microservice-based access control system demonstrating
            Zero Trust security architecture. Every request is verified
            using JWT identity tokens, RBAC authorization policies,
            and policy enforcement services before protected resources
            are accessed.
          </p>

          <p className="text-sm text-blue-400 mb-4">
            Python • FastAPI • PostgreSQL • Docker • JWT
          </p>

          <a href="#" className="text-blue-400 hover:underline">
            View Project →
          </a>

        </motion.div>

        <motion.div variants={fadeUp} className="project-card">

          <h3 className="text-xl font-semibold mb-4">
            Secure Authentication Playground
          </h3>

          <p className="text-slate-400 mb-4">
            Interactive authentication infrastructure demonstrating
            access token generation, refresh token rotation, session
            lifecycle management, and JWT inspection for understanding
            identity validation in modern API systems.
          </p>

          <p className="text-sm text-blue-400 mb-4">
            Python • FastAPI • React • PostgreSQL • JWT
          </p>

          <a href="#" className="text-blue-400 hover:underline">
            View Project →
          </a>

        </motion.div>

      </motion.div>

    </section>
  )
}
