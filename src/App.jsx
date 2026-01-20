import { Outlet } from "react-router";
import { Header } from "./components/Header/Header.jsx";
import { CartProvider } from "./context/Cart/CartProvider.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <Header></Header>
        <main>
          <Outlet />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
