"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { useState } from "react"

export default function SignupForm({ onSignup }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      setIsLoading(false)
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    // Simulate signup
    setTimeout(() => {
      onSignup({
        name,
        email,
        creditPoints: 0,
        level: 1,
        quizzesCompleted: 0,
      })
      setIsLoading(false)
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground mb-6">Create Account</h2>

      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">
          Full Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background border-border"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-email" className="text-foreground">
          Email
        </Label>
        <Input
          id="signup-email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background border-border"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-password" className="text-foreground">
          Password
        </Label>
        <Input
          id="signup-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-background border-border"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password" className="text-foreground">
          Confirm Password
        </Label>
        <Input
          id="confirm-password"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-background border-border"
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Sign Up"}
      </Button>
    </form>
  )
}
