import App from "./App";
import { Home } from "./components/paths/HomePage/Home";
import { Shop } from "./components/paths/ShopPage/Shop";
import { Cart } from "./components/paths/CartPage/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
