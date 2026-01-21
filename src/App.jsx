import { Outlet } from "react-router";
import { Header } from "./components/Header/Header.jsx";
import { CartProvider } from "./context/Cart/CartProvider.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
