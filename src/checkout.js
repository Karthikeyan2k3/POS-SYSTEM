import React, { useState } from "react";

const Checkout = ({ cart, onCheckout }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      onCheckout({ name, email, phone });
    } else {
      alert("Please provide your name, email, and phone number.");
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Customer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p><strong>Total:</strong> ${total}</p>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
