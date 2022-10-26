import Button from 'react-bootstrap/Button';

import "./Item/ItemDetail.css"
import ItemCount from "./ItemCount"

function ItemDetail (props){
    return(
        <div className='d-flex justify-content-evenly'>
            <img className='col-6 imagen' src={props.imagen} alt="imagen de producto"></img>
            <div className='col-6'>
                <h3 className='m-5 borderB'>{props.nombre}</h3>
                <h4 className='m-5 borderB'>Precio: <strong>${props.precio}</strong></h4>
                <ItemCount stock={props.cantidad}/>
                <Button variant="dark" className='m-5'>Sumar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemDetail;