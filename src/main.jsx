import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import { CartProvder } from "./Provider/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-white">
      <CartProvder>
        <RouterProvider router={router} />
      </CartProvder>
    </div>
  </StrictMode>
);
