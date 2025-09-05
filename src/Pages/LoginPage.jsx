import React, { useState } from "react";

const LoginPage = ({ switchToRegister, switchToProducts }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("გთხოვთ შეავსოთ ყველა ველი");
      return;
    }
    setIsLoading(true);
    setError("");

    // Fake login simulation
    setTimeout(() => {
      setIsLoading(false);
      if (email === "user@example.com" && password === "password123") {
        alert("ავტორიზაცია წარმატებით დასრულდა ✅");
        switchToProducts(); // წარმატებულ login-ზე გადადის პროდუქტებზე
      } else {
        setError("ელფოსტა ან პაროლი არასწორია");
      }
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          შესვლა
        </h2>

        {error && (
          <p className="text-red-600 bg-red-50 p-3 rounded-md text-sm mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="ელ-ფოსტა"
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="პაროლი"
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 text-white py-2.5 rounded-xl font-medium hover:bg-purple-700 disabled:opacity-60 transition"
          >
            {isLoading ? "იტვირთება..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-6 text-gray-600 text-sm space-y-2">
          <div>
            ჯერ არ გაქვთ ანგარიში?{" "}
            <button
              onClick={switchToRegister}
              className="text-purple-700 hover:text-purple-900 font-semibold"
            >
              რეგისტრაცია
            </button>
          </div>

          <button
            onClick={switchToProducts}
            className="text-gray-600 hover:underline"
          >
            გაგრძელება სტუმრის სახით
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

