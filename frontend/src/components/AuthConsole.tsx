import { useState, useEffect } from "react"
import axios from "axios"

export default function AuthConsole() {

  const [tokens, setTokens] = useState<any>(null)
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null)

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        email: "varun@test.com",
        password: "StrongPass123",
      })

      setTokens(res.data)

      const payload = JSON.parse(atob(res.data.access_token.split(".")[1]))
      const exp = payload.exp
      const now = Math.floor(Date.now() / 1000)

      setSecondsLeft(exp - now)

    } catch (err) {
      console.error("Login failed", err)
    }
  }

  const refresh = async () => {
    try {
      const res = await axios.post("http://localhost:8000/auth/refresh", {
        refresh_token: tokens.refresh_token,
      })

      setTokens(res.data)

      const payload = JSON.parse(atob(res.data.access_token.split(".")[1]))
      const exp = payload.exp
      const now = Math.floor(Date.now() / 1000)

      setSecondsLeft(exp - now)

    } catch (err) {
      console.error("Refresh failed", err)
    }
  }

  const logout = () => {
    setTokens(null)
    setSecondsLeft(null)
  }

  useEffect(() => {
    if (!secondsLeft) return

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (!prev) return null
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)

  }, [secondsLeft])

  return (
    <section className="py-20 bg-slate-950 text-white text-center">

      <h2 className="text-3xl font-bold mb-10">
        Security Auth Console
      </h2>

      <div className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-xl border border-slate-800">

        {!tokens && (

          <button
            onClick={login}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
          >
            Generate Token Pair
          </button>

        )}

        {tokens && (

          <div className="space-y-6 text-left">

            <div>
              <p className="text-blue-400 mb-2">Access Token</p>
              <p className="text-xs break-all bg-black p-3 rounded">
                {tokens.access_token}
              </p>
            </div>

            <div>
              <p className="text-blue-400 mb-2">Refresh Token</p>
              <p className="text-xs break-all bg-black p-3 rounded">
                {tokens.refresh_token}
              </p>
            </div>

            {secondsLeft !== null && (
              <p className="text-yellow-400">
                Access Token Expires In: {secondsLeft}s
              </p>
            )}

            <div className="flex gap-4">

              <button
                onClick={refresh}
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
              >
                Refresh
              </button>

              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Logout
              </button>

            </div>

          </div>

        )}

      </div>

    </section>
  )
}
