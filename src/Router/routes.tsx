import { createBrowserRouter } from "react-router-dom";
import Home from "@/Pages/HomePage";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Account from "@/Pages/AccountPage";
import Cart from "@/Pages/CartPage";
import Product from "@/Pages/ProductPage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
