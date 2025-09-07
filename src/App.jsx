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

  const goTo = (page) => setCurrentPage(page);
  const goToDetails = (product) => {
    setSelectedProduct(product);
    goTo("details");
  };
  const login = () => setIsAuth(true);

  return (
    <CartProvider>
      {isAuth ? (
        <>
          {currentPage === "products" && <ProductsPage onSelectProduct={goToDetails} />}
          {currentPage === "details" && selectedProduct && (
            <ProductDetails product={selectedProduct} onBack={() => goTo("products")} />
          )}
          {currentPage === "cart" && <CartPage onBackToShop={() => goTo("products")} />}
          <CartStatus onNavigateToCart={() => goTo("cart")} />
        </>
      ) : currentPage === "login" ? (
        <LoginPage
          switchToRegister={() => goTo("register")}
          onLogin={login}
          onGuestLogin={login}
        />
      ) : (
        <RegistrationPage switchToLogin={() => goTo("login")} />
      )}
    </CartProvider>
  );
};

export default App;


