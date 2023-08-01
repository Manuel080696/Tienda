import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faSpotify,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../Root.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <FontAwesomeIcon
          icon={faTwitter}
          size="lg"
          style={{ color: "#000000" }}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          size="lg"
          style={{ color: "#000000" }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="lg"
          style={{ color: "#000000" }}
        />
        <FontAwesomeIcon
          icon={faYoutube}
          size="lg"
          style={{ color: "#000000" }}
        />
        <FontAwesomeIcon
          icon={faPinterest}
          size="lg"
          style={{ color: "#000000" }}
        />
        <FontAwesomeIcon
          icon={faSpotify}
          size="lg"
          style={{ color: "#000000" }}
        />
      </nav>
    </footer>
  );
};
