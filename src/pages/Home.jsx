import Header from "../components/Header";
import Product from "../components/Product";
import { products } from "../data/products";

function Home() {
  return (
    <>
      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt=""
        />
      </div>

      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default Home;