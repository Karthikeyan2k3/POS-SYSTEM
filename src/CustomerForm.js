import React, { useState } from "react";

const CustomerForm = ({ onCheckout }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onCheckout({ name, email });
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="customer-form">
      <h2>Customer Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default CustomerForm;
