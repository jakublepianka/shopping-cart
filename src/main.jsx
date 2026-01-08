import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ProductDataProvider } from "./context/Products/ProductDataProvider";
import "normalize.css";
import "./index.css";
import routes from "./routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductDataProvider>
      <RouterProvider router={router} />
    </ProductDataProvider>
  </StrictMode>
);
