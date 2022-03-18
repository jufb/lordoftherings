import { Navbar, Nav, Container } from 'react-bootstrap';
import LOTRImg from '../assets/theonering.png';

export function Header() {
  return (
    <header>
      <Container>
        <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
          <Navbar.Toggle />

          <Navbar.Brand href="/">
            <img src={LOTRImg} alt="The one ring." />
            The Lord of The Rings
          </Navbar.Brand>

          <Navbar.Collapse>
            <Nav className='text-center'>
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Characters">Characters</Nav.Link>
              <Nav.Link href="#Chapters">Chapters</Nav.Link>
              <Nav.Link href="#Quotes">Quotes</Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}