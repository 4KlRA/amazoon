import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Product({ product }) {
  const { addToCart } =
    useContext(CartContext);

    const navigate = useNavigate();

  const buyNow = () => {
    addToCart(product);
    window.location.href =
      "/checkout";
  };

  const handleCart = () => {
  addToCart(product);

  toast.success(
    `${product.title} added to cart`
  );
};

const handleBuy = () => {
  addToCart(product);

  toast.success(
    "Redirecting to checkout..."
  );

  setTimeout(() => {
    navigate("/checkout");
  }, 1000);
};

  return (
    <div className="product">

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <div className="rating">
        {"⭐".repeat(product.rating)}
      </div>

      <h2>${product.price}</h2>

      <div className="buttons">

        <button
  className="cartBtn"
  onClick={handleCart}
>
  Add To Cart
</button>

        <button
  className="buyBtn"
  onClick={handleBuy}
>
  Buy Now
</button>
      </div>

    </div>
  );
}

export default Product;