import { Link } from "react-router-dom";
import "../Root.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

export const Header = () => {
  const { carCounter, setShowCart } = useContext(ProductContext);
  return (
    <header className="header">
      <ul className="header-menu">
        <Link to="/electronics" className="header-Link">
          <li>Electronics</li>
        </Link>
        <Link to="/jewelery" className="header-Link">
          <li>Jewelery</li>
        </Link>
        <Link to="/men's clothing" className="header-Link">
          <li>Men's </li>
        </Link>
        <Link to="/women's clothing" className="header-Link">
          <li>Women's</li>
        </Link>
      </ul>
      <figure>
        <Link to="/">
          <img src="/loom.svg" alt="loom-icon" />
        </Link>
      </figure>
      <nav className="header-nav">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          style={{ color: "#000000" }}
        />
        <Link to="/login">
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            style={{ color: "#000000" }}
          />
        </Link>
        <Link to="/favorites">
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            style={{ color: "#000000" }}
          />
        </Link>
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
