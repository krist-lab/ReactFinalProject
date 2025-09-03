// App.jsx
import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="flex flex-col items-center mb-8">
          <span className="text-sm font-semibold text-gray-600">YOUR WRITING SOLUTIONS</span>
        </div>

        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Login to your Account
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-xl pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 text-gray-500"
            >
              Toggle
            </button>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full py-4 bg-purple-600 text-white rounded-lg">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;



