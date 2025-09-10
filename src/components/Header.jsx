import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Header = ({ showTitle = false, showCartIcon = true }) => {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <div className="relative mb-8">
      {showTitle && (
        <h1
          onClick={() => navigate("/products")}
          className="text-2xl md:text-3xl text-yellow-500 text-center cursor-pointer"
        >
          shopco - შენი ონლაინ მაღაზია
        </h1>
      )}

      {showCartIcon && (
        <button
          onClick={() => navigate("/cart")}
          className="absolute right-6 top-1/2 -translate-y-1/2"
        >
          <img
            src="/images/cart-icon.svg"
            alt="Cart"
            className="w-8 h-8 cursor-pointer"
          />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {cart.reduce((t, i) => t + i.quantity, 0)}
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default Header;

