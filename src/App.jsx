import React, { useState } from "react";
import { CartProvider } from "./contexts/CartContext";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import CartStatus from "./components/CartStatus";

const App = () => {
  const sampleProduct = {
    id: 'prod-001',
    name: 'Wireless Bluetooth Headphones',
    price: 199.99,
    description: 'High-fidelity audio with a comfortable, over-ear design. Perfect for music lovers on the go.',
  };

  const [currentPage, setCurrentPage] = useState('shop');

  return (
    <CartProvider>
      <div className="bg-gray-100 min-h-screen font-sans">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 pt-10">
          {currentPage === 'shop' ? 'Product Page' : 'Your Shopping Cart'}
        </h1>

        {currentPage === 'shop' ? (
          <>
            <ProductDetails product={sampleProduct} />
            <CartStatus onNavigateToCart={() => setCurrentPage('cart')} />
          </>
        ) : (
          <CartPage onBackToShop={() => setCurrentPage('shop')} />
        )}
      </div>
    </CartProvider>
  );
};

export default App;






