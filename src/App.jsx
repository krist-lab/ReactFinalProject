import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div>
      {currentPage === "login" && (
        <LoginPage switchToRegister={() => setCurrentPage("register")} />
      )}
      {currentPage === "register" && (
        <RegistrationPage switchToLogin={() => setCurrentPage("login")} />
      )}
    </div>
  );
}

export default App;






