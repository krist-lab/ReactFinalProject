import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProductsPage from "./pages/ProductsPage"; 

function App() {
  const [currentPage, setCurrentPage] = useState("login"); 

  const goToRegister = () => setCurrentPage("register");
  const goToLogin = () => setCurrentPage("login");
  const goToProducts = () => setCurrentPage("products");

  return (
    <div>
      {currentPage === "login" && (
        <LoginPage 
          switchToRegister={goToRegister} 
          switchToProducts={goToProducts} 
        />
      )}
      
      {currentPage === "register" && (
        <RegistrationPage 
          switchToLogin={goToLogin} 
        />
      )}

      {currentPage === "products" && (
        <ProductsPage />
      )}
    </div>
  );
}

export default App;






