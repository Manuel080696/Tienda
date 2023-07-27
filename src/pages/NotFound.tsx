import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section>
      <header>
        <h1>Not found</h1>
        <Link to="/">Back to Home</Link>
      </header>
    </section>
  );
};
