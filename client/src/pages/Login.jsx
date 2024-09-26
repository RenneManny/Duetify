import React from "react";
import assets from "../assets/assets.js";

function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Spotify Logo - Centered at the top */}
        <img
          className="mb-8"
          src={assets.spotify_logo}
          alt="Spotify Logo"
        />

        {/* Login Form */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl text-center mb-8">Login to Spotify</h2>
          
          <form className="mt-8">
            <div className="mb-4">
              {/* Email/Username Input */}
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email or username
              </label>
              <input
                id="email"
                type="text"
                placeholder="email or username"
                className="auth-input"
                required
              />

              {/* Password Input */}
              <label
                className="block text-sm font-medium mb-1 mt-4"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                className="auth-input"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="auth-btn w-full">
              Login
            </button>
          </form>

          {/* Forgot Password / Signup */}
          <div className="text-center mt-6">
            <a href="#" className="underline">Forgot your password?</a>
            <p className="text-center mt-5">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 underline">
                Signup for Spotify
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
