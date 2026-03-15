import { useState, useEffect } from "react"
import axios from "axios"

export default function Playground() {

const [tokens, setTokens] = useState<any>(null)
const [secondsLeft, setSecondsLeft] = useState<number | null>(null)

const login = async () => {

const res = await axios.post("http://localhost:8000/auth/login", {
  email: "varun@test.com",
  password: "StrongPass123"
})

setTokens(res.data)

const payload = JSON.parse(atob(res.data.access_token.split(".")[1]))
const exp = payload.exp
const now = Math.floor(Date.now() / 1000)

setSecondsLeft(exp - now)

}

const refresh = async () => {

if (!tokens?.refresh_token) return

const res = await axios.post("http://localhost:8000/auth/refresh", {
  refresh_token: tokens.refresh_token
})

setTokens(res.data)

}

const logout = () => {
setTokens(null)
setSecondsLeft(null)
}

useEffect(() => {

if (!secondsLeft) return

const interval = setInterval(() => {
  setSecondsLeft((prev) => prev ? prev - 1 : 0)
}, 1000)

return () => clearInterval(interval)

}, [secondsLeft])

return (

<section className="py-24 bg-slate-900 text-slate-200">

  <h2 className="text-3xl font-semibold text-center mb-10">
    Security Playground
  </h2>

  <div className="max-w-2xl mx-auto space-y-6 px-6">

    {!tokens && (
      <button
        onClick={login}
        className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl"
      >
        Generate Token Pair
      </button>
    )}

    {tokens && (

      <div className="space-y-4">

        <div className="bg-black/40 p-4 rounded-xl">
          <p className="text-green-400 mb-2">Access Token</p>
          <p className="break-all text-xs">{tokens.access_token}</p>
        </div>

        <div className="bg-black/40 p-4 rounded-xl">
          <p className="text-blue-400 mb-2">Refresh Token</p>
          <p className="break-all text-xs">{tokens.refresh_token}</p>
        </div>

        {secondsLeft !== null && (
          <p className="text-yellow-400">
            Access Token Expires In: {secondsLeft}s
          </p>
        )}

        <div className="flex gap-4">

          <button
            onClick={refresh}
            className="flex-1 bg-indigo-600 px-4 py-2 rounded-xl"
          >
            Refresh
          </button>

          <button
            onClick={logout}
            className="flex-1 bg-red-600 px-4 py-2 rounded-xl"
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
