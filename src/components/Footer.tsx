import { Link } from "react-router-dom";
import "../Root.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img src="/loom-icon.svg" alt="loom-icon" />
      </Link>
      <nav>Menu</nav>
    </footer>
  );
};
