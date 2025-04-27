import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav style={{ background: "#333", padding: "1rem", color: "white" }}>
        <h2 style={{ display: "inline-block", marginRight: "2rem" }}>
          {" "}
          🛒 ShopMate{" "}
        </h2>
        <Link to="/" style={{ color: "white", marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart
        </Link>
      </nav>
    </div>
  );
};


export default Navbar