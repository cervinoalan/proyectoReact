import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function ItemCount({ initial, stock, onAdd }) {
  const [valor, setValor] = useState(parseInt(initial));

  function agregar() {
    setValor(valor + 1);
  }

  function quitar() {
    setValor(valor - 1);
  }

  useEffect(() => {
    setValor(parseInt(initial));
  }, [initial]);

  return (
    <>
      <div className="card m-5 col-3">
        <div className="d-flex align-items-center justify-content-center p-1">
          <Button disabled={valor <= 1} variant="light" onClick={quitar}>
            -
          </Button>{" "}
          <h2 className="mx-3">{valor}</h2>
          <Button disabled={valor >= stock} variant="light" onClick={agregar}>
            +
          </Button>{" "}
        </div>
      </div>
      <div>
        <Button
          variant="dark"
          className="mx-5"
          disabled={stock === 0}
          onClick={() => onAdd(valor)}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
