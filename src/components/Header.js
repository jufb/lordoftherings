import { Navbar, Nav, Container } from 'react-bootstrap';

export function Header() {
  return (
    <header>
      <Container>
        <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
          <Navbar.Toggle />

          <Navbar.Brand href="#Home">
            <img src='https://static.wixstatic.com/media/249783_d33bf99f6c1d42b082526cbb6630d96e~mv2.png' alt="The one ring." />
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