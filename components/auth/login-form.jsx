"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { useState } from "react"

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields")
      setIsLoading(false)
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      setIsLoading(false)
      return
    }

    // Simulate login
    setTimeout(() => {
      onLogin({
        email,
        name: email.split("@")[0],
        creditPoints: 0,
        level: 1,
        quizzesCompleted: 0,
      })
      setIsLoading(false)
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground mb-6">Login</h2>

      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background border-border"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-foreground">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-background border-border"
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  )
}
