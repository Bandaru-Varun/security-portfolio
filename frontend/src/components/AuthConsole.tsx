import { useState } from "react"

const API_URL = "https://security-portfolio-q5sf.onrender.com"

export default function AuthConsole() {
  const [token, setToken] = useState("")
  const [error, setError] = useState("")

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

      if (!res.ok) {
        throw new Error("Login failed")
      }

      const data = await res.json()

      setToken(data.access_token)

    } catch (err) {
      console.error(err)
      setError("Failed to generate token")
    }
  }

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 w-full max-w-xl">

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

      {error && (
        <p className="text-red-400 mt-2">{error}</p>
      )}

    </div>
  )
}
