import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      return setError("მომხმარებელი არ მოიძებნა");
    }

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/products");
    } else {
      setError("არასწორი ელფოსტა ან პაროლი");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          შესვლა
        </h2>
        {error && <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="ელ-ფოსტა"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="პაროლი"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 py-2.5 font-medium text-white transition hover:bg-purple-700"
          >
            შესვლა
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          ჯერ არ გაქვთ ანგარიში?{" "}
          <button onClick={() => navigate("/register")} className="font-semibold text-purple-700 hover:text-purple-900">
            რეგისტრაცია
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
