import { useState } from "react"
import AuthConsole from "./AuthConsole"
import JWTDecoder from "./JwtDecoder"
import Portfolio from "./Portfolio"
import SecurityBoot from "./SecurityBoot"

const API_URL = "https://security-portfolio-q5sf.onrender.com"

export default function JWTGate() {
  const [authenticated, setAuthenticated] = useState(false)
  const [booting, setBooting] = useState(false)
  const [error, setError] = useState("")

  const verify = async () => {
    try {
      setError("")

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@example.com",
          password: "password123"
        }),
      })

      if (!res.ok) {
        throw new Error("Login failed")
      }

      // ✅ LOGIN SUCCESS → UNLOCK
      setBooting(true)

      setTimeout(() => {
        setAuthenticated(true)
        setBooting(false)
      }, 2000)

    } catch (err) {
      console.error(err)
      setError("Access Denied — Backend Auth Failed")
    }
  }

  if (booting) return <SecurityBoot />
  if (authenticated) return <Portfolio />

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-12">

      <AuthConsole />
      <JWTDecoder />

      <div className="text-center">

        <h1 className="text-3xl font-bold mb-4">
          Secure Portfolio Gateway
        </h1>

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
