import { useContext, useState } from "react";
import "./Item/ItemDetail.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { Button } from "react-bootstrap";

function ItemDetail(props) {
  const [gotoCart, setGoToCart] = useState(false);
  const { addProduct } = useContext(CartContext);

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(props, quantity);
  };

  return (
    <div className="d-flex justify-content-evenly">
      <img className="col-4" src={props.imagen} alt="imagen de producto"></img>
      <div className="col-6">
        <h3 className="m-5 borderB">{props.nombre}</h3>
        <h4 className="m-5 borderB">
          Precio: <strong>${props.precio}</strong>
        </h4>
        {gotoCart ? (
          <div>
            <Link style={{ textDecoration: "none" }} to="/cart">
              <Button variant="dark" className="mx-5">
                Ir al carrito
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button variant="dark">Seguir Comprando</Button>
            </Link>
          </div>
        ) : (
          <ItemCount initial={1} stock={props.cantidad} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
