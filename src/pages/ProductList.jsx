import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("api called and data received", productData);
        setProductData(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const gotoDetailsPage =  (id) => {
    navigate(`/products/${id}`);
  }

  return (
    <div>
      <h2>Product List</h2>

      {productData?.products?.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              padding: "12px 16px",
              marginBottom: "12px",
              borderRadius: "6px",
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <h4 style={{ margin: 0 }}>
              Title: {product.title}, price: {product.price}, rating:{" "}
              {product.rating}
            </h4>
            <button onClick={()=>{
              gotoDetailsPage(product.id);
            }}>View Details</button>
          </div>
        );
      })}
    </div>
  );
}
