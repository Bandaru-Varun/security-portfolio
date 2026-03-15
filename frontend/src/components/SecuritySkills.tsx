import { motion } from "framer-motion"
import { fadeUp } from "./animations"

export default function SecuritySkills() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="panel lg:col-span-3"
    >
      <h2 className="text-2xl font-bold mb-10 text-center">
        Security Capabilities
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="skill-card">
          <h3 className="skill-title">Identity & Access Security</h3>
          <ul className="skill-list">
            <li>JWT Authentication Systems</li>
            <li>Token Validation Pipelines</li>
            <li>Refresh Token Rotation</li>
            <li>Session Lifecycle Management</li>
            <li>RBAC Authorization Models</li>
            <li>Zero Trust Access Models</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Backend Engineering</h3>
          <ul className="skill-list">
            <li>Python Backend Development</li>
            <li>FastAPI API Development</li>
            <li>REST API Architecture</li>
            <li>Authentication Middleware</li>
            <li>Secure Session Handling</li>
            <li>PostgreSQL Integration</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Cloud & DevOps</h3>
          <ul className="skill-list">
            <li>Docker Containerization</li>
            <li>Linux Server Environments</li>
            <li>Git Version Control</li>
            <li>Microservice Architecture</li>
            <li>API Deployment Pipelines</li>
          </ul>
        </div>

      </div>
    </motion.section>
  )
}
