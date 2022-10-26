import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './CartWidget';
import {Link} from "react-router-dom";
import "./nav.css"

function NavBarA(props) {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="./">
          <Navbar.Brand className='me-5'>TecnoStore</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
          <Link to="./categoria/monitores"><Nav className='navA'>Monitores</Nav></Link>
          <Link to="./categoria/discosduros"><Nav className='navA'>Discos Rigidos</Nav></Link>
          <Link to="./categoria/teclados"><Nav className='navA'>Teclados</Nav></Link>
          </Nav>
        </Container>
        <Cart/>
      </Navbar>
      </div>
    );
  }
  
  export default NavBarA;
  