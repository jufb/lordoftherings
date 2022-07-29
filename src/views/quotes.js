import '../assets/quotes.css';
import { useEffect, useState } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { ArrowClockwise } from 'react-bootstrap-icons';

export function Quotes(props) {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState();
  const [character, setCharacter] = useState();
  async function fetchData() {
    setLoading(true);
    const rawQuotes = await fetch(props.quote, { headers: props.headers });
    const quotes = await rawQuotes.json();
    const q = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
    setQuote(q.dialog);

    const rawCharacters = await fetch(props.charID + q.character, { headers: props.headers });
    const characters = await rawCharacters.json();
    const c = characters.docs[0];
    setCharacter(c.name);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <main id="Quotes">
      <div id="tree-bottom" />
      <Container>
          <div id="blank-page">
            {loading ? <center>Loading...</center> 
            :
              <div>
                <blockquote>{quote}</blockquote>
                <cite>― {character}</cite>
                <br />
                <center><Button id="refresh" variant="link" href="#Quotes" onClick={() =>  fetchData()} rel="noreferrer">
                  <ArrowClockwise color="goldenrod" size="40" />
                </Button></center>
              </div>
            }
          </div>
          <div id="photo">
            <Image id="img-tolkien" alt="Tolkien." src="https://epistleofdude.files.wordpress.com/2019/05/tolkien-gardens-merton-college.jpg" />
            <br />Tolkien in the gardens of Merton College, Oxford University.
          </div>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fdd9a3" fillOpacity="1" d="M0,224L24,208C48,192,96,160,144,133.3C192,107,240,85,288,106.7C336,128,384,192,432,186.7C480,181,528,107,576,112C624,117,672,203,720,234.7C768,267,816,245,864,202.7C912,160,960,96,1008,85.3C1056,75,1104,117,1152,128C1200,139,1248,117,1296,106.7C1344,96,1392,96,1416,96L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    </main>
  );
}