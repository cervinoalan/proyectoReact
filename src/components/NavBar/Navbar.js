import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './CartWidget';

function NavBarA() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">TecnoStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="">Productos</Nav.Link>
            <Nav.Link href="">Contacto</Nav.Link>
          </Nav>
        </Container>
        <Cart/>
      </Navbar>
      </div>
    );
  }
  
  export default NavBarA;
  