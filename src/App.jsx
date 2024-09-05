import { Outlet } from "react-router-dom";
import Footer from "./global/Footer/Footer";
import Header from "./global/Header/Header";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
