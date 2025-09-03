// App.jsx
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="flex flex-col items-center mb-8">
          <span className="text-sm font-semibold text-gray-600">YOUR WRITING SOLUTIONS</span>
        </div>

        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Login to your Account
        </h1>

        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-xl"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-xl"
            />
          </div>
          <button type="submit" className="w-full py-4 bg-purple-600 text-white rounded-lg">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    // ...same JSX as previous commit, but add:
    // value={email} onChange={(e) => setEmail(e.target.value)}
    // value={password} onChange={(e) => setPassword(e.target.value)}
    // form onSubmit={handleLogin}
  );
};


export default App;


