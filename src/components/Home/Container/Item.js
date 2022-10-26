import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

function Item(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagen} alt="imagen producto"/>
      <Card.Body>
        <Link to={`/${props.categoria}/${props.id}`}>
        <Card.Title className='colorNegro'>{props.nombre}</Card.Title>
        </Link>
        <Card.Text><strong>${props.precio}</strong></Card.Text>
        <Button variant="dark">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;