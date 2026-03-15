import { useState } from "react"

export default function AttackSimulator() {

  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, message])
  }

  const tamperToken = () => {
    addLog("[ATTACK] Payload modified")
    addLog("[SECURITY] Signature mismatch detected")
    addLog("[ACCESS] Request denied")
  }

  const expiredToken = () => {
    addLog("[ATTACK] Expired token used")
    addLog("[SECURITY] Token expiration check failed")
    addLog("[ACCESS] Session rejected")
  }

  const breakSignature = () => {
    addLog("[ATTACK] Signature tampering attempt")
    addLog("[SECURITY] Cryptographic verification failed")
    addLog("[ACCESS] Authentication blocked")
  }

  const clearLogs = () => {
    setLogs([])
  }

  return (

    <section className="py-24 bg-slate-950 text-white text-center">

      <h2 className="text-3xl font-bold mb-10">
        Security Attack Simulator
      </h2>

      <div className="flex gap-6 justify-center mb-10 flex-wrap">

        <button
          onClick={tamperToken}
          className="bg-red-600 px-6 py-3 rounded-xl hover:bg-red-700"
        >
          Tamper Token
        </button>

        <button
          onClick={expiredToken}
          className="bg-yellow-600 px-6 py-3 rounded-xl hover:bg-yellow-700"
        >
          Expired Token
        </button>

        <button
          onClick={breakSignature}
          className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Break Signature
        </button>

        <button
          onClick={clearLogs}
          className="bg-gray-700 px-6 py-3 rounded-xl hover:bg-gray-800"
        >
          Clear Logs
        </button>

      </div>

      <div className="bg-black text-green-400 font-mono p-6 rounded-xl border border-green-700 max-w-4xl mx-auto text-left">

        {logs.length === 0 && (
          <div>[SYSTEM] Awaiting attack simulation...</div>
        )}

        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}

      </div>

    </section>

  )
}
