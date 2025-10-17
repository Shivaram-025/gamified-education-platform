'use client';

import { Leaf } from 'lucide-react';
import { useState } from 'react';
import LoginForm from './login-form';
import SignupForm from './signup-form';

export default function LoginPage({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">EduPlay</h1>
          </div>
          <p className="text-muted-foreground">Learn about the environment through gamified quizzes</p>
        </div>

        {/* Form Container */}
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          {isSignup ? (
            <>
              <SignupForm onSignup={onLogin} />
              <p className="text-center text-sm text-muted-foreground mt-6">
                Already have an account?{' '}
                <button
                  onClick={() => setIsSignup(false)}
                  className="text-primary font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </>
          ) : (
            <>
              <LoginForm onLogin={onLogin} />
              <p className="text-center text-sm text-muted-foreground mt-6">
                Don't have an account?{' '}
                <button
                  onClick={() => setIsSignup(true)}
                  className="text-primary font-semibold hover:underline"
                >
                  Sign up
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
