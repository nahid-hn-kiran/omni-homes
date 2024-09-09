import { Outlet } from "react-router-dom";
import Footer from "./global/Footer/Footer";
import Header from "./global/Header/Header";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <HelmetProvider>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <ScrollToTop smooth />
      <Footer />
    </HelmetProvider>
  );
}

export default App;
