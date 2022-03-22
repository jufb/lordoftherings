import '../assets/quotes.css';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export function Quotes(props) {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState()
  const [character, setCharacter] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const rawQuotes = await fetch(props.quote, { headers: props.headers });
      const quotes = await rawQuotes.json();
      const q = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
      setQuote(q.dialog);
      
      const rawCharacters = await fetch(props.charID + q.character, { headers: props.headers });
      const characters = await rawCharacters.json();
      const c = characters.docs[0];
      setCharacter(c.name);
    };

    fetchData();
    setLoading(false);
  }, [props]);

  if(loading) {
    return (
      <center>Loading...</center>
    );
  }

  return (
    <main id="Quotes">
      <Container className='text-center'>
        <blockquote>{quote}</blockquote>
        <cite>― {character}</cite>
      </Container>
    </main>
  );
}