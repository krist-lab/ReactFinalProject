// App.jsx
import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./contexts/CartContext";
import CartStatus from "./components/CartStatus";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const goToRegister = () => setCurrentPage("register");
  const goToLogin = () => setCurrentPage("login");
  const goToProducts = () => setCurrentPage("products");
  const goToDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage("details");
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <CartStatus />
        {currentPage === "login" && (
          <LoginPage switchToRegister={goToRegister} switchToProducts={goToProducts} />
        )}
        {currentPage === "register" && (
          <RegistrationPage switchToLogin={goToLogin} />
        )}
        {currentPage === "products" && (
          <ProductsPage onSelectProduct={goToDetails} />
        )}
        {currentPage === "details" && selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            goBack={goToProducts} 
          />
        )}
      </div>
    </CartProvider>
  );
}

export default App;







