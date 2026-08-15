import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Index.css";
import DarkModeTheme from "./Tools/DarkModeTheme";

import App from "./App";



import ShopContextProvider from "./Context/ShopContext";

import Products from "./pages/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";

DarkModeTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     
      {
        path: "Products",
        element: <Products />,
      },
      
      
      {
        path: "Products/:ProductDetails",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="min-h-[100vh] bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
   
      <ShopContextProvider>
        <RouterProvider router={router} />
      </ShopContextProvider>
   
  </div>,
);
