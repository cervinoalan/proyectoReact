import { useContext } from "react";
import CartContext from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./cart.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Formulario from "./Formulario";

function Cart() {
  const { cart, totalPrice, removeProduct, clearCart } =
    useContext(CartContext);

  // Si el carrito esta vacio muestra boton para ir al menu principal
  if (cart.length === 0) {
    return (
      <>
        <h2 className="d-flex justify-content-center m-5">
          Su carrito se encuentra vacío!
        </h2>
        <div className="d-flex justify-content-center m-5 ">
          <img
            src="../images/teclados/carrito.png"
            alt="cart"
            className="carrito"
          ></img>
        </div>
        <div className="d-flex justify-content-center m-5 ">
          <Link to="/">
            <Button
              variant="dark"
              className="d-flex justify-content-center mt-5"
            >
              Continuar Comprando
            </Button>
          </Link>
        </div>
      </>
    );
  }
  // Si el carrito tiene contenido muestra la tabla + botones de compra
  return (
    <>
      <div className="d-flex justify-content-center estilo text-center m-5">
        <table className="border col-6">
          <thead>
            <tr>
              <th className="border-end" colSpan="2">
                Articulo
              </th>
              <th className="border-end">Cantidad</th>
              <th className="border-end">Precio</th>
              <th className="border-end">Subtotal</th>
              <th className="border-end">Remover</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {cart.map((product) => (
              <tr key={product.id}>
                <td className="border-top">
                  <img
                    className="imagen"
                    src={product.imagen}
                    alt={product.nombre}
                  ></img>
                </td>
                <td className="border-end border-top">{product.nombre}</td>
                <td className="border-end border-top">{product.quantity}</td>
                <td className="border-end border-top">${product.precio}</td>
                <td className="border-end border-top">
                  ${product.quantity * product.precio}
                </td>
                <td className="border-end border-top">
                  <DeleteForeverOutlinedIcon
                    className="trash"
                    fontSize="large"
                    onClick={() => removeProduct(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="column">
          <div className="mx-5 d-flex mb-5">
            <h3 className="cartTotal">Total a Pagar: ${totalPrice()}</h3>
          </div>
          <div className="mx-5 d-flex">
            <button onClick={clearCart} className="btn btn-danger m-2">
              Vaciar Carrito
            </button>
            <Formulario cart={cart} precioTotal={totalPrice()} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
