import { Container, Button } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';

export const Footer = (props) => {
  return (
    <footer className="box-footer">
      <img src='https://static.wixstatic.com/media/249783_8e5cc480ce6a4db9bf98c9b062107966~mv2.png' alt="The fellowship of the Ring crossing a mountain." />
      <Container fluid className="box-dark">
        <div id="quote-footer">
          <blockquote>May it be a light to you in dark places, when all other lights go out.</blockquote>
          <cite>― J.R.R. Tolkien, The Fellowship of the Ring</cite>
        </div>
        <div id="contacts">
          <p><Button variant="link" href="https://github.com/jufb/lordoftherings" rel="noreferrer" target="_blank">
            <Github color="white" size="40" />
          </Button>
          <Button variant="link" href="https://www.linkedin.com/in/fborgesj" rel="noreferrer" target="_blank">
            <Linkedin color="white" size="40" />
          </Button>
          </p>
          I do not own this content. All credits go to its rightful owners.
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