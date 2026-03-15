export default function Skills() {
  return (
    <section className="py-24 bg-slate-950 text-slate-200 text-center">

      <h2 className="text-3xl font-semibold mb-10">
        Technical Skills
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="font-semibold mb-2 text-blue-400">
            Backend
          </h3>
          <p className="text-slate-400">
            Python<br/>
            FastAPI<br/>
            REST APIs<br/>
            JWT (RS256)<br/>
            Authentication Systems
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="font-semibold mb-2 text-blue-400">
            Security
          </h3>
          <p className="text-slate-400">
            Zero Trust Architecture<br/>
            RBAC Authorization<br/>
            Policy Enforcement (PDP/PEP)<br/>
            Device Trust Validation<br/>
            IAM Concepts
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="font-semibold mb-2 text-blue-400">
            Cloud & DevOps
          </h3>
          <p className="text-slate-400">
            AWS (EC2, Security Groups)<br/>
            Docker<br/>
            Linux Administration<br/>
            Git & GitHub
          </p>
        </div>

      </div>

    </section>
  )
}
