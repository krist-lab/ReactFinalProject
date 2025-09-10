import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (confirm && password !== confirm) {
      setError("პაროლები არ ემთხვევა");
    } else {
      setError("");
    }
  }, [password, confirm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim() || !password || !confirm) {
      return setError("გთხოვთ შეავსოთ ყველა ველი");
    }
    if (!isValidEmail(email.trim())) {
      return setError("გთხოვთ შეიყვანოთ სწორი ელფოსტა");
    }
    if (password !== confirm) {
      return setError("პაროლები არ ემთხვევა");
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("user", JSON.stringify({ email, password }));
      setSuccess("რეგისტრაცია წარმატებით დასრულდა");
      setEmail("");
      setPassword("");
      setConfirm("");

      setTimeout(() => navigate("/login"), 1200);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          რეგისტრაცია
        </h2>
        {error && <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">{error}</div>}
        {!error && success && <div className="mb-4 rounded-md bg-green-50 p-3 text-sm text-green-600">{success}</div>}
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
          <input
            type="password"
            placeholder="გაიმეორეთ პაროლი"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-purple-600 py-2.5 font-medium text-white transition hover:bg-purple-700 disabled:opacity-60"
          >
            {isLoading ? "იტვირთება..." : "რეგისტრაცია"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          უკვე გაქვთ ანგარიში?{" "}
          <button onClick={() => navigate("/login")} className="font-semibold text-purple-700 hover:text-purple-900">
            შესვლა
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;

