import { useEffect, useState } from "react"

export default function SecurityLog() {

const [logs, setLogs] = useState<string[]>([])

useEffect(() => {

const entries = [
  "[✓] Token validated",
  "[✓] JWT signature verified",
  "[✓] Session established",
  "[✓] Access granted to portfolio"
]

let i = 0

const interval = setInterval(() => {
  setLogs((prev) => [...prev, entries[i]])
  i++

  if (i === entries.length) clearInterval(interval)

}, 800)

return () => clearInterval(interval)

}, [])

return (

<div className="bg-black text-green-400 font-mono p-6 mt-16 rounded-xl border border-green-700 max-w-4xl mx-auto">

  <h3 className="mb-4 text-green-500">
    SECURITY ACTIVITY LOG
  </h3>

  {logs.map((log, index) => (
    <div key={index}>{log}</div>
  ))}

</div>

)
}
