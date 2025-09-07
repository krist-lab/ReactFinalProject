import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import CartStatus from "./components/CartStatus";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <CartStatus />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPageWrapper />} />
          <Route path="/register" element={<RegistrationPageWrapper />} />
          <Route path="/products" element={<ProductsPageWrapper />} />
          <Route path="/products/:id" element={<ProductDetailsWrapper />} />
          <Route path="/cart" element={<CartPageWrapper />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

const LoginPageWrapper = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const login = () => setIsAuth(true);

  if (isAuth) return <Navigate to="/products" replace />;
  return <LoginPage onLogin={login} onGuestLogin={login} switchToRegister={() => {}} />;
};

const RegistrationPageWrapper = () => <RegistrationPage switchToLogin={() => {}} />;
const ProductsPageWrapper = () => <ProductsPage onSelectProduct={() => {}} />;
const ProductDetailsWrapper = () => <ProductDetails product={{ id: 1, name: "Sample", price: 10, description: "Sample desc" }} />;
const CartPageWrapper = () => <CartPage onBackToShop={() => {}} />;

export default App;

