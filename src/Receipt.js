import React from "react";

const Receipt = ({ receipt }) => {
  const { customerDetails, cart } = receipt;
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <p><strong>Customer:</strong> {customerDetails.name}</p>
      <p><strong>Email:</strong> {customerDetails.email}</p>
      <p><strong>Phone:</strong> {customerDetails.phone}</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total}</p>
      <button onClick={() => window.location.reload()}>Start New Transaction</button>
    </div>
  );
};

export default Receipt;
