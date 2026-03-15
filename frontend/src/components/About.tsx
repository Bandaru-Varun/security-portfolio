import { motion } from "framer-motion"
import { fadeUp } from "./animations"

export default function About() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-24 bg-slate-900 text-slate-200 text-center px-6"
    >

      <h2 className="text-4xl font-bold mb-10">
        About Me
      </h2>

      <p className="max-w-3xl mx-auto text-slate-400 leading-relaxed text-lg">
        I'm an aspiring Cloud & Security Engineer focused on building secure
        backend systems and implementing Zero Trust security architectures.

        My work centers on authentication systems, identity-based access
        control, and policy-driven authorization models using Python,
        FastAPI, and JWT.

        I actively explore security concepts including RBAC, device trust
        validation, policy enforcement architectures (PDP/PEP), and
        containerized microservices deployed with Docker in Linux environments.
      </p>

    </motion.section>
  )
}
