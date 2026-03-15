import { useState } from "react"
import AuthConsole from "./AuthConsole"
import JWTDecoder from "./JWTDecoder"
import Portfolio from "./Portfolio"
import SecurityBoot from "./SecurityBoot"

export default function JWTGate() {

  const [token, setToken] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [booting, setBooting] = useState(false)
  const [error, setError] = useState("")

  const verify = () => {
    try {

      const parts = token.split(".")

      if (parts.length !== 3) {
        throw new Error()
      }

      const payload = JSON.parse(atob(parts[1]))
      const now = Math.floor(Date.now() / 1000)

      if (payload.exp < now) {
        throw new Error()
      }

      setBooting(true)
      setError("")

      // After boot animation (~4 seconds) load portfolio
      setTimeout(() => {
        setAuthenticated(true)
        setBooting(false)
      }, 4200)

    } catch {
      setError("Access Denied — Invalid Token")
    }
  }

  if (booting) {
    return <SecurityBoot />
  }

  if (authenticated) {
    return <Portfolio />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-12">

      <AuthConsole />

      <JWTDecoder />

      <div className="text-center">

        <h1 className="text-3xl font-bold mb-4">
          Secure Portfolio Gateway
        </h1>

        <textarea
          rows={3}
          className="bg-slate-900 border border-slate-700 rounded-xl p-4 w-96 mb-4"
          placeholder="Paste Access Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />

        <br />

        <button
          onClick={verify}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
        >
          Unlock Portfolio
        </button>

        {error && (
          <p className="text-red-400 mt-4">{error}</p>
        )}

      </div>

    </div>
  )
}
