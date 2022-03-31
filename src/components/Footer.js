import { Container, Button } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import LOTRImg from '../assets/lotr-thefellowshipofthering.png';

export const Footer = (props) => {
  return (
    <footer className="box-footer">
      <img src={LOTRImg} alt="The fellowship of the Ring crossing a mountain." />
      <Container fluid className="box-dark">
        <div id="quote-footer">
          <blockquote>May it be a light to you in dark places, when all other lights go out.</blockquote>
          <cite>― J.R.R. Tolkien, The Fellowship of the Ring</cite>
        </div>
        <div id="contacts">
          <Button variant="link" href="https://github.com/jufb/lordoftherings" rel="noreferrer" target="_blank">
            <Github color="white" size="40" />
          </Button>
          <Button variant="link" href="https://www.linkedin.com/in/fborgesj" rel="noreferrer" target="_blank">
            <Linkedin color="white" size="40" />
          </Button>
          <p>
            I do not own this content. All credits go to its rightful owners.
          </p>
        </div>
        <Container fluid id="contacts">
          © {props.year} Designed by Juliana F. Borges <a href="https://jufb.github.io" rel="noreferrer" target="_blank">
            <img src="https://jufb.github.io/favicon.ico" width="40" height="40" alt="Juliana F. Borges logo." />
          </a>
        </Container>
      </Container>
    </footer>
  );
}