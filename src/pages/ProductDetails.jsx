import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, [id]);

  return product ? (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="detail-image"/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
