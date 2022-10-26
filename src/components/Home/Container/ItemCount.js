import {useState} from "react";
import Button from "react-bootstrap/Button"

function ItemCount (props) {
    const [valor,setValor] = useState(1);
    const [estado,setEstado] =useState("");

    function agregar(){
        props.stock !== valor ? setValor(valor + 1) : setEstado("No hay más stock disponible!")
    }

    function quitar(){
        setEstado("");
        valor !== 0 ? setValor(valor - 1) : setEstado("");
    }

    return(
        <div className="card m-5 col-2">
            <div className="d-flex align-items-center justify-content-center p-1">
                <Button variant="light" onClick={quitar}>-</Button>{' '}
                <h1>{valor}</h1>
                <Button variant="light" onClick={agregar}>+</Button>{' '}
                
            </div>
            <h6 className="d-flex justify-content-center mx-2">{estado}</h6>
            {/* <Button variant="light">Agregar al carrito</Button>{' '} */}
            
        </div>
    )
}

export default ItemCount