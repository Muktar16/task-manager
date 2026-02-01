import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#333",
      }}
    >
      <h2 style={{color: 'white'}}>My App</h2>

      <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
        <Link to="/users" style={{ color: "blue" }}>
          Users
        </Link>
        <Link to="/products" style={{ color: "blue" }}>
          Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
