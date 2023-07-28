import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function Root() {
  return (
    <section className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default Root;
