import { Link } from "react-router-dom";
import "../Root.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

export const Header = () => {
  const { carCounter, setShowCart } = useContext(ProductContext);
  return (
    <header className="header">
      <Link to="/">
        <img src="/loom.svg" alt="loom-icon" />
      </Link>
      <nav>
        <FontAwesomeIcon
          icon={faCartShopping}
          size="xl"
          style={{ color: "#000000" }}
          onClick={() => setShowCart(true)}
        />
        {carCounter > 0 && <div className="header-counter">{carCounter}</div>}
      </nav>
    </header>
  );
};
