import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState, useContext } from "react";
import CartContext from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function Formulario(cart, precioTotal) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [mailConfirmacion, setMailConfirmacion] = useState("");
  const { clearCart } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const order = {
      buyer: {
        nombre: name,
        telefono: phone,
        mail: mail,
      },
      items: cart,
      precioTotal,
      Fecha: date,
    };
    console.log(order);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(
      ({ id }) =>
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Orden enviada!",
          text: `Su numero de orden es: ${id}`,
          confirmButtonText: "Entendido",
          confirmButtonColor: "#777",
          showConfirmButton: true,
        }),
      clearCart(),
      handleClose()
    );
  }

  return (
    <>
      <Button className="btn btn-dark m-2" onClick={handleShow}>
        Finalizar Compra
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingrese sus datos:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Ingrese su nombre:</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Nombre Apellido"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setMail(e.target.value)}
                type="email"
                placeholder="nombre@ejemplo.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mailConfirmacion">
              <Form.Label>Verifique su Email</Form.Label>
              <Form.Control
                onChange={(e) => setMailConfirmacion(e.target.value)}
                type="email"
                placeholder="nombre@ejemplo.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="00000000"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="dark"
            onClick={handleSubmit}
            disabled={
              mail !== mailConfirmacion ||
              name === "" ||
              mail === "" ||
              phone === "" ||
              mailConfirmacion === "" ||
              !isNaN(name) ||
              !mail.match(validRegex)
            }
          >
            Confirmar Compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formulario;
