import "./Index.css";
import App from "./App";
import Products from "./pages/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ShopContextProvider from "./Context/ShopContext";

export default function ProductsRoutes() {
  return (
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  );
}

export {
  Products,
  ProductDetails,
};