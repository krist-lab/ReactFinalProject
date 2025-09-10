import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity, removeItem } = useCart();
  const totalItems = cart.reduce((t, i) => t + i.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <main className="container mx-auto">
        <Header showTitle={false} />

        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto my-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Cart ({totalItems} items)
            </h2>
            <button
              onClick={() => navigate("/products")}
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-500"
            >
              &larr; Back to Shop
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">Your cart is empty.</p>
              <button
                onClick={() => navigate("/products")}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-500"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm"
                  >
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">{item.price.toFixed(2)} ₾</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="px-2 py-1 border rounded-lg"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="px-2 py-1 border rounded-lg"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-3 text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t-2 border-gray-200 flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>₾ {cartTotal.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CartPage;
