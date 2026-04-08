import { useState } from "react"
import AuthConsole from "./AuthConsole"
import JWTDecoder from "./JwtDecoder"
import Portfolio from "./Portfolio"
import SecurityBoot from "./SecurityBoot"

const API_URL = "https://security-portfolio-q5sf.onrender.com"

export default function JWTGate() {
  const [token, setToken] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [booting, setBooting] = useState(false)
  const [error, setError] = useState("")

  // 🔥 Generate token from backend
  const generateToken = async () => {
    try {
      setError("")

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@example.com",
          password: "password123",
        }),
      })

      if (!res.ok) throw new Error()

      const data = await res.json()

      setToken(data.access_token)

    } catch {
      setError("Token generation failed")
    }
  }

  // 🔥 Unlock using SAME token
  const unlock = () => {
    try {
      if (!token) throw new Error()

      const payload = JSON.parse(atob(token.split(".")[1]))
      const now = Math.floor(Date.now() / 1000)

      if (payload.exp < now) throw new Error()

      setBooting(true)

      setTimeout(() => {
        setAuthenticated(true)
        setBooting(false)
      }, 2000)

    } catch {
      setError("Invalid or expired token")
    }
  }

  if (booting) return <SecurityBoot />
  if (authenticated) return <Portfolio />

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-12">

      {/* 🔥 CONNECTED AUTH CONSOLE */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 w-full max-w-xl text-center">
        <h2 className="text-lg font-semibold mb-4 text-green-400">
          Security Auth Console
        </h2>

        <button
          onClick={generateToken}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg mb-4"
        >
          Generate Token Pair
        </button>

        {token && (
          <textarea
            value={token}
            readOnly
            className="w-full bg-slate-800 p-3 rounded-lg text-sm"
          />
        )}
      </div>

      {/* 🔥 DECODER USES SAME TOKEN */}
      <JWTDecoder token={token} />

      {/* 🔥 UNLOCK BUTTON */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Secure Portfolio Gateway
        </h1>

        <button
          onClick={unlock}
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
