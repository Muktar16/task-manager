import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "20px auto",
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#fafafa",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "contain",
          marginBottom: "16px",
        }}
      />

      <h2 style={{ marginBottom: "8px" }}>{product.title}</h2>

      <p style={{ color: "#555", marginBottom: "12px" }}>
        {product.description}
      </p>

      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Availability:</strong> {product.availabilityStatus}</p>
    </div>
  );
};
