import { Outlet } from "react-router-dom";
import Footer from "./global/Footer/Footer";
import Header from "./global/Header/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
