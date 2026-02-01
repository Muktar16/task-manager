import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

export const ProductDetails = () => {
  const { id } = useParams(); // 👈 path param
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getProductDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      // porductDetails = response?.data;
      setProductDetails(response?.data);
    } catch (error) {
      console.log(error);
      alert("Someting wrong!!!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      {/* Title */}
      <h1 style={{ marginBottom: "10px" }}>{productDetails.title}</h1>

      {/* Thumbnail */}
      <img
        src={productDetails.thumbnail}
        alt={productDetails.title}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          marginBottom: "15px",
          borderRadius: "8px",
        }}
      />

      {/* Basic info */}
      <p>
        <strong>Brand:</strong> {productDetails.brand}
      </p>
      <p>
        <strong>Category:</strong> {productDetails.category}
      </p>
      <p>
        <strong>Price:</strong> ${productDetails.price}
      </p>
      <p>
        <strong>Discount:</strong> {productDetails.discountPercentage}%
      </p>
      <p>
        <strong>Rating:</strong> ⭐ {productDetails.rating}
      </p>
      <p>
        <strong>Stock:</strong> {productDetails.stock}
      </p>
      <p>
        <strong>Availability:</strong> {productDetails.availabilityStatus}
      </p>
      <p>
        <strong>Weight:</strong> {productDetails.weight}g
      </p>
      <p>
        <strong>Dimensions:</strong> {productDetails.dimensions?.width} x{" "}
        {productDetails.dimensions?.height} x {productDetails.dimensions?.depth}{" "}
        cm
      </p>
      <p>
        <strong>Minimum Order Quantity:</strong>{" "}
        {productDetails.minimumOrderQuantity}
      </p>
      <p>
        <strong>Warranty:</strong> {productDetails.warrantyInformation}
      </p>
      <p>
        <strong>Shipping:</strong> {productDetails.shippingInformation}
      </p>
      <p>
        <strong>Return Policy:</strong> {productDetails.returnPolicy}
      </p>
      <p>
        <strong>SKU:</strong> {productDetails.sku}
      </p>
      <p>
        <strong>Tags:</strong> {productDetails.tags?.join(", ")}
      </p>

      {/* Description */}
      <p style={{ marginTop: "15px" }}>
        <strong>Description:</strong> {productDetails.description}
      </p>

      {/* QR Code */}
      {productDetails.meta?.qrCode && (
        <div style={{ marginTop: "15px" }}>
          <img
            src={productDetails.meta.qrCode}
            alt="QR Code"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      )}

      {/* Reviews */}
      {productDetails.reviews?.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Reviews:</h3>
          {productDetails.reviews.map((r, idx) => (
            <div
              key={idx}
              style={{ padding: "5px 0", borderBottom: "1px solid #eee" }}
            >
              <p style={{ margin: 0 }}>
                <strong>{r.reviewerName}</strong> ({r.rating}⭐)
              </p>
              <p style={{ margin: 0 }}>{r.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
