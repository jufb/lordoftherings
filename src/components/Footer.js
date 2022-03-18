import { Container, Button } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import LOTRImg from '../assets/lotr-thefellowshipofthering.png';

export const Footer = (props) => {
  return (
    <footer className="box-footer">
      <img src={LOTRImg} alt="The fellowship of the Ring crossing a mountain." />
      <Container fluid className="box-dark">
        <div id="quote">
          <strong>"May it be a light to you in dark places, when all other lights go out."</strong>
          <br/>
          <small>― J.R.R. Tolkien, The Fellowship of the Ring</small>
        </div>
        <div id="contacts">
          <Button variant="link" href="https://github.com/jufb/lordoftherings" rel="noreferrer" target="_blank">
            <Github color="white" size="30" />
          </Button>
          <Button variant="link" href="https://www.linkedin.com/in/fborgesj" rel="noreferrer" target="_blank">
            <Linkedin color="white" size="30" />
          </Button>
          <p>
            I do not own this content. All credits go to its rightful owners.
            <br/>
            Designed by Juliana F. Borges
            <br />
            © {props.year}
          </p>
          <a href="https://jufb.github.io" rel="noreferrer" target="_blank">
            <img src="https://jufb.github.io/favicon.ico" width="50" height="50" alt="Juliana F. Borges logo." />
          </a>
        </div>
      </Container>
    </footer>
  );
}