import { motion } from "framer-motion"
import { fadeUp, stagger } from "./animations"

export default function Architecture() {
return ( <section className="py-24 bg-slate-950 text-white px-6">

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-4xl font-bold text-center mb-10"
  >
    Security Architecture
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="max-w-3xl mx-auto text-slate-300 text-center mb-16 leading-relaxed"
  >
    My authentication systems follow a Zero Trust architecture where every
    request must be verified before accessing protected resources. Identity
    tokens are validated, authorization policies are evaluated, and access
    decisions are enforced through policy-driven services.
  </motion.p>

  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex flex-col items-center gap-6"
  >

    <motion.div variants={fadeUp} className="pipeline-box border-blue-500">
      User Request
    </motion.div>

    <span className="arrow">↓</span>

    <motion.div variants={fadeUp} className="pipeline-box border-green-500">
      Authentication Service (FastAPI)
      <p className="text-sm text-slate-400 mt-1">
        Login & token issuance
      </p>
    </motion.div>

    <span className="arrow">↓</span>

    <motion.div variants={fadeUp} className="pipeline-box border-purple-500">
      JWT Identity Token
      <p className="text-sm text-slate-400 mt-1">
        Signed using RS256
      </p>
    </motion.div>

    <span className="arrow">↓</span>

    <motion.div variants={fadeUp} className="pipeline-box border-yellow-500">
      Policy Decision Point (PDP)
      <p className="text-sm text-slate-400 mt-1">
        Authorization evaluation
      </p>
    </motion.div>

    <span className="arrow">↓</span>

    <motion.div variants={fadeUp} className="pipeline-box border-red-500">
      Policy Enforcement Point (PEP)
      <p className="text-sm text-slate-400 mt-1">
        Resource protection
      </p>
    </motion.div>

    <span className="arrow">↓</span>

    <motion.div variants={fadeUp} className="pipeline-box border-green-400">
      Protected Resource
    </motion.div>

  </motion.div>

</section>

)
}
