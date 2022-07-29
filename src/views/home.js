import "../assets/home.css";
import { Container, Button } from "react-bootstrap";

export function Home() {
    return (
      <main id="Home">
        <Container>
          <h1>For Frodo!</h1>
          <Button href="#About">Explore more</Button>
        </Container>
      </main>
    );
  }