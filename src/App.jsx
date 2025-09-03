import React, { useState } from 'react';
import googleIcon from "./assets/googleIcon.svg";
import facebookIcon from "./assets/facebookIcon.svg";
import twiterIcon from "./assets/twiterIcon.svg";
import eyeSign from "./assets/eyeSign.svg";

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Function to show a message (error or success)
  const showMessageBox = (text, type) => {
    setMessage({ text, type });
    setIsMessageVisible(true);
    setTimeout(() => {
      setIsMessageVisible(false);
    }, 3000); // Hide after 3 seconds
  };

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showMessageBox('გთხოვთ შეიყვანოთ ელფოსტა და პაროლი.', 'error');
      return;
    }
    // Simple validation
    if (email === 'user@example.com' && password === 'password123') {
      showMessageBox('ავტორიზაცია წარმატებით დასრულდა!', 'success');
    } else {
      showMessageBox('არასწორი ელფოსტა ან პაროლი.', 'error');
    }
  };

  // Social login placeholder
  const handleSocialLogin = (platform) => {
    showMessageBox(`ავტორიზაცია ${platform}-ით... (დროებითი ფუნქცია)`, 'info');
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      {/* Message Box */}
      {isMessageVisible && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg text-white font-semibold transition-opacity duration-300 z-50 ${
            message.type === 'error' ? 'bg-red-500' :
            message.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Login Card */}
      <div className="w-full max-w-sm mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img className="mb-2" alt="Logo" />
          <span className="text-sm font-semibold text-gray-600"></span>
        </div>

        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Login to your Account
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent pr-12 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-purple-600 transition-colors"
            >
              <img src={eyeSign} alt="Toggle visibility" className="w-6 h-6"/>
            </button>
          </div>

          <a
            href="#"
            className="block text-right text-sm text-purple-600 font-semibold hover:underline"
          >
            Forget Password?
          </a>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or sign in with</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => handleSocialLogin('Google')}
            className="p-3 border border-gray-300 rounded-full hover:border-purple-600 transition-colors shadow-sm"
          >
            <img src={googleIcon} alt="Google" className="w-6 h-6"/>
          </button>

          <button
            onClick={() => handleSocialLogin('Facebook')}
            className="p-3 border border-gray-300 rounded-full hover:border-purple-600 transition-colors shadow-sm"
          >
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6"/>
          </button>

          <button
            onClick={() => handleSocialLogin('Twitter')}
            className="p-3 border border-gray-300 rounded-full hover:border-purple-600 transition-colors shadow-sm"
          >
            <img src={twiterIcon} alt="Twitter" className="w-6 h-6"/>
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="font-semibold leading-6 text-purple-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;




