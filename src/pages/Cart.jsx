import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const [popup, setPopup] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleCheckout = () => {
    clearCart();
    setPopup(true);
    setTimeout(() => setPopup(false), 4000);
  };

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.title}</h4>
          <p>${item.price} × {item.quantity}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              updateQuantity(item.id, parseInt(e.target.value, 10))
            }
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Checkout</button>
      {popup && <div className="popup">Order placed successfully!</div>}
    </div>
  );
}
