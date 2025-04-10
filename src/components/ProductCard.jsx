import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}
