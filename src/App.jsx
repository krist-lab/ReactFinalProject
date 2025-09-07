import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import CartStatus from "./components/CartStatus";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const login = () => setIsAuth(true);
  const guestLogin = () => setIsAuth(true);

  const goToDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage("details");
  };

  return (
    <CartProvider>
      {isAuth ? (
        <>
          {currentPage === "products" && <ProductsPage onSelectProduct={goToDetails} />}
          {currentPage === "details" && selectedProduct && (
            <ProductDetails product={selectedProduct} onBack={() => setCurrentPage("products")} />
          )}
          {currentPage === "cart" && <CartPage onBackToShop={() => setCurrentPage("products")} />}
          <CartStatus onNavigateToCart={() => setCurrentPage("cart")} />
        </>
      ) : (
        <>
          {currentPage === "login" && (
            <LoginPage switchToRegister={() => setCurrentPage("register")} onLogin={login} onGuestLogin={guestLogin} />
          )}
          {currentPage === "register" && (
            <RegistrationPage switchToLogin={() => setCurrentPage("login")} />
          )}
        </>
      )}
    </CartProvider>
  );
};

export default App;








