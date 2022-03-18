import "../assets/home.css";
import { Container } from "react-bootstrap";
import LOTRImg from '../assets/tree.png';

export function Home() {
    return (
      <main id="Home">
        <Container className="jumbotron">
          <h1>For Frodo!</h1>
          <p>The Lord Of The Rings and all of the legendarium that <a href="https://www.tolkienestate.com/life/biography/" rel="noreferrer" target="_blank">J.R.R. Tolkien</a> created is amazing.</p>
          <p>Here you will see a showcase of a few of Tolkien's works, and as a fan myself, I am very fond of it. And if you want to check out how I designed it, please visit my <a href="https://github.com/jufb/lordoftherings" rel="noreferrer" target="_blank">GitHub</a> account!</p>
          Thank you!
        </Container>
        <img src={LOTRImg} alt="Tree." />
      </main>
    );
  }