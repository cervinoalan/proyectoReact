import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

function Cart() {
  const { totalProduct } = useContext(CartContext);

  return (
    <div className="me-2">
      <Link style={{ textDecoration: "none" }} to="/cart">
        <ShoppingCartIcon sx={{ color: red[500] }} fontSize="large" />
        <span className="colorBlanco me-2">{totalProduct() || ""}</span>
      </Link>
    </div>
  );
}

export default Cart;
