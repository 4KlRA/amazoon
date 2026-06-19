import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Orders() {
  const {
  orders,
  addToCart
} = useContext(CartContext);

  return (
    <div className="ordersPage">

      <h1>Your Orders</h1>

      {orders.length === 0 ? (
        <div className="emptyOrders">
          No orders placed yet.
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="orderCard"
          >
            <h3>
              Order #{order.id}
            </h3>

            <p>{order.date}</p>

            {order.items.map((item) => (
              <div
                key={item.id}
                className="orderItem"
              >
                <img
                  src={item.image}
                  alt=""
                />

                <div>
  <h4>
    {item.title}
  </h4>

  <p>
    ${item.price}
  </p>

  <button
    className="buyAgainBtn"
    onClick={() => addToCart(item)}
  >
    Buy Again
  </button>
</div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;