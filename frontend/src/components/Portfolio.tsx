import DashboardLayout from "./DashboardLayout"
import SecurityHeader from "./SecurityHeader"
import Hero from "./Hero"
import About from "./About"
import SecuritySkills from "./SecuritySkills"
import Projects from "./Projects"
import Architecture from "./Architecture"
import AttackSimulator from "./AttackSimulator"
import SecurityLog from "./SecurityLog"
import Contact from "./Contact"

export default function Portfolio() {

  return (
    <DashboardLayout>

      {/* Header full width */}
      <div className="col-span-3">
        <SecurityHeader />
      </div>

      {/* Hero full width */}
      <div className="col-span-3">
        <Hero />
      </div>

      {/* LEFT COLUMN */}
      <div className="col-span-1 panel">
        <About />
      </div>

      {/* TOP RIGHT */}
      <div className="col-span-2 panel">
        <SecuritySkills />
      </div>

      {/* BOTTOM RIGHT */}
      <div className="col-span-2 panel">
        <Projects />
      </div>

      {/* FULL WIDTH */}
      <div className="col-span-3 panel">
        <Architecture />
      </div>

      <div className="col-span-2 panel">
        <AttackSimulator />
      </div>

      <div className="col-span-1 panel">
        <SecurityLog />
      </div>

      <div className="col-span-3">
        <Contact />
      </div>

    </DashboardLayout>
  )
}
