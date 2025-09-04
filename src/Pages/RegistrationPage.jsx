import React, { useState } from "react";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          რეგისტრაცია
        </h2>

        <form className="space-y-5">
          <input type="email" placeholder="ელ-ფოსტა" className="w-full border rounded-xl px-4 py-2.5" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="პაროლი" className="w-full border rounded-xl px-4 py-2.5" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="გაიმეორეთ პაროლი" className="w-full border rounded-xl px-4 py-2.5" value={confirm} onChange={(e) => setConfirm(e.target.value)} />

          <button type="submit" className="w-full bg-purple-600 text-white py-2.5 rounded-xl font-medium">
            რეგისტრაცია
          </button>
        </form>

        <div className="text-center mt-6 text-gray-600 text-sm">
          უკვე გაქვთ ანგარიში? <button className="text-purple-700 font-semibold">შესვლა</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;


