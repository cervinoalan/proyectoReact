import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NavBarA from "../components/NavBar/Navbar";
import ItemDetailContainer from "../components/Home/Container/ItemDetailContainer";
import ItemListContainer from "../components/Home/Container/ItemListContainer";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import { CartProvider } from "../components/Context/CartContext";

function Router() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBarA />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categoria/:cat" element={<ItemListContainer />}></Route>
          <Route path="/:categoria/:nombre" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default Router;
