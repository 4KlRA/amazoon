import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const navigate = useNavigate();

const handleCheckout = () => {
  placeOrder();

  toast.success(
    "Order placed successfully!"
  );

  navigate("/orders");
};

  const { cart, removeFromCart, placeOrder } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="checkout">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <h3>{item.title}</h3>

              <p>${item.price}</p>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${total}</h2>
        </>
      )}
      <button
  className="checkoutBtn"
  onClick={handleCheckout}
>
  Complete Purchase
</button>
    </div>
    
  );
}

export default Checkout;