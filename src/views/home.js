import "../assets/home.css";
import { Container } from "react-bootstrap";

export function Home() {
    return (
      <main id="Home">
        <Container className="jumbotron">
          <h1>For Frodo!</h1>

            <p>The Lord Of The Rings and all of the legendarium that <a href="https://www.tolkienestate.com" rel="noreferrer" target="_blank">J.R.R. Tolkien</a> created is amazing.</p>
            <p>Here you will see a showcase of a few of Tolkien's works, and as a fan myself, I am very fond of it. And if you want to check out how I designed it, please visit my <a href="https://github.com/jufb/lordoftherings" rel="noreferrer" target="_blank">GitHub</a> account!</p>
            <p>Special thanks to <a href="https://github.com/gitfrosh" rel="noreferrer" target="_blank">Rike</a> and her project <a href="https://the-one-api.dev/" rel="noreferrer" target="_blank">One API to rule them all</a> and <a href="https://www.upwork.com/freelancers/~016b44707ecd9743fd" rel="noreferrer" target="_blank">Clarissa T.</a>, who gave helpful suggestions to improve the user experience.</p>

        </Container>
        <img id="tree" src="https://static.wixstatic.com/media/249783_d87aa89bb473474da923e62cf0973b6c~mv2.png" alt="Tree." />
      </main>
    );
  }