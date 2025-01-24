import React from "react";

const Cart = ({ cart, removeFromCart, proceedToCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total}</p>
          <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
