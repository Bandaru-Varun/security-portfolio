import { useEffect, useState } from "react"

export default function SecurityBoot() {

  const steps = [
    "Initializing secure session...",
    "Verifying JWT signature...",
    "Decrypting token payload...",
    "Establishing encrypted channel...",
    "ACCESS GRANTED"
  ]

  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {

    let i = 0

    const interval = setInterval(() => {

      setLogs(prev => [...prev, steps[i]])
      i++

      if (i >= steps.length) {
        clearInterval(interval)
      }

    }, 800)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center font-mono">

      <div className="w-full max-w-xl p-6 border border-green-500">

        <h2 className="mb-4 text-green-300 text-lg">
          SECURITY INITIALIZATION
        </h2>

        {logs.map((log, i) => (
          <p key={i}>[ {log} ]</p>
        ))}

      </div>

    </div>
  )
}
