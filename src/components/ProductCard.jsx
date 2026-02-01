import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const gotoDetailsPage = (productId) => {
    navigate(`/products/${productId}`);
  };
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "30px",
          height: "30px",
          objectFit: "cover",
          marginRight: "10px",
        }}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h4 style={{ margin: "0 0 5px 0" }}>{product.title}</h4>
          <p style={{ margin: 0 }}>Brand: {product.brand}</p>
          {/* <p style={{ margin: 0 }}>Price: ${product.price}</p>
        <p style={{ margin: 0 }}>Rating: {product.rating}</p> */}
        </div>
        <button
          onClick={() => {
            gotoDetailsPage(product.id);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
