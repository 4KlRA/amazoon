import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/">
        <h2>Amazoon</h2>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/checkout">
          Cart ({cart.length})
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;