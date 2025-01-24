import React, { useState } from "react";
import ServiceList from "./ServiceList";
import Cart from "./Cart";
import Checkout from "./checkout";
import Receipt from "./Receipt";
import "./styles.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item.id !== serviceId));
  };

  const handleCheckout = (customerDetails) => {
    setReceipt({ customerDetails, cart });
    setCart([]); // Clear cart after checkout
    setShowCheckout(false); // Exit checkout view
  };

  return (
    <div className="app-container">
      <h1>Point of Sale (POS)</h1>
      {!receipt ? (
        <>
          {!showCheckout ? (
            <>
              <ServiceList addToCart={addToCart} />
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                proceedToCheckout={() => setShowCheckout(true)}
              />
            </>
          ) : (
            <Checkout cart={cart} onCheckout={handleCheckout} />
          )}
        </>
      ) : (
        <Receipt receipt={receipt} />
      )}
    </div>
  );
};

export default App;
