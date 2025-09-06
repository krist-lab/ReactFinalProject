import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails"; 

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // page switchers
  const goToRegister = () => setCurrentPage("register");
  const goToLogin = () => setCurrentPage("login");
  const goToProducts = () => setCurrentPage("products");

  const goToDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage("details");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "login" && (
        <LoginPage
          switchToRegister={goToRegister}
          switchToProducts={goToProducts}
        />
      )}

      {currentPage === "register" && (
        <RegistrationPage switchToLogin={goToLogin} />
      )}

      {currentPage === "products" && (
        <ProductsPage onSelectProduct={goToDetails} />
      )}

      {currentPage === "details" && selectedProduct && (
        <ProductDetails product={selectedProduct} />
      )}
      {currentPage === "details" && selectedProduct && (
        <ProductDetails 
        product={selectedProduct} 
        onBack={goToProducts} />
      )}

    </div>
  );
}

export default App;







