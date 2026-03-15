import { useState } from "react"

export default function JwtDecoder() {

  const [token, setToken] = useState("")
  const [header, setHeader] = useState<any>(null)
  const [payload, setPayload] = useState<any>(null)

  const decode = () => {

    try {

      const parts = token.split(".")

      const decodedHeader = JSON.parse(atob(parts[0]))
      const decodedPayload = JSON.parse(atob(parts[1]))

      setHeader(decodedHeader)
      setPayload(decodedPayload)

    } catch {
      alert("Failed to decode token")
    }

  }

  return (
    <section className="py-24 bg-slate-900 text-white px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        JWT Security Decoder
      </h2>

      <div className="max-w-4xl mx-auto">

        <textarea
          placeholder="Paste JWT token here"
          className="w-full bg-black p-4 rounded mb-4"
          onChange={(e)=>setToken(e.target.value)}
        />

        <button
          onClick={decode}
          className="bg-blue-600 px-6 py-3 rounded mb-10"
        >
          Decode Token
        </button>

        {header && (
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-black p-4 rounded">
              <p className="text-blue-400 mb-2">Header</p>
              <pre>{JSON.stringify(header,null,2)}</pre>
            </div>

            <div className="bg-black p-4 rounded">
              <p className="text-blue-400 mb-2">Payload</p>
              <pre>{JSON.stringify(payload,null,2)}</pre>
            </div>

          </div>
        )}

      </div>

    </section>
  )
}
