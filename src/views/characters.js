import '../assets/characters.css';
import { useEffect, useState } from 'react';
import { FormControl, Form, Card, Container, Button, Alert } from 'react-bootstrap';
import LOTRImg from '../assets/tree-bottom.png';
import ReactPaginate from 'react-paginate';
//import dataChars from './characters.json';

function isValid(value) {
  if (value.length > 0 && value !== "NaN" && value !== null) {
    return value;
  }
  else {
    return "Not informed";
  }
}

export function Characters(props) {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]); //Used to load the characters from the API

  //Used for pagination
  const [countPages, setCountPages] = useState(0);
  const dataLimit = 10; //Change this to show more/less characters
  
  //Used for searching
  const [character, setCharacter] = useState(""); //Used to search the characters by name
  const [show, setShow] = useState(false); //Alert to search with 3+ letters

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      //Sets the paginated list of characters
      const rawCharacters = await fetch(props.chars + '&page=1&limit=' + dataLimit, { headers: props.headers });
      const chars = await rawCharacters.json();

      setCharacters(chars.docs);
      setCountPages(chars.pages);
    };

    fetchData();

    setLoading(false);
  }, [props, dataLimit]);

  //Gets the clicked item number on the Pagination and call the API again to set the page and the limit of items in each page
  const pageClick = async (page) => {
    let pageAdd = page.selected + 1;
    const rawCharacters = await fetch(props.chars + '&name=/' + character + '/i&page=' + pageAdd + '&limit=' + dataLimit, { headers: props.headers });
    const chars = await rawCharacters.json();

    setCharacters(chars.docs);
    setCountPages(chars.pages);
  }

  // Find the character by name
  const search = async () => {
    if (character.trim().length > 0 && character.trim().length < 3){
      setShow(true);
    }

    if (character.trim().length >= 3) {
      setShow(false);
      pageClick(0);
    }

    if (character.trim().length === 0) {
      setShow(false);
      pageClick(0);
    }
  }

  if(loading) {
    return (
      <center>Loading...</center>
    );
  }

  return (

    <main id="Characters">

      <Container className='jumbotron'>

        <h1 className='text-light'>Characters</h1>

        {show &&
          <Alert variant="warning" onClose={() => setShow(false)} dismissible>
            Please include <strong>three (3) letters or more</strong> to search.
          </Alert>
        }

        <Form className="d-flex container">
          <FormControl
            type="search"
            placeholder="Search by name"
            aria-label="Search"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
          />
          <span className="sr-only">Search characters by name here.</span>&nbsp;
          <Button variant="primary" onClick={search}>Search</Button>
        </Form>

        <div className="group-card">
          {characters.length > 0 ? 
            characters.map ((array) => (
              <Card key={array._id}>
                <Card.Link href={array.wikiUrl} target="_blank">
                <Card.Title>{array.name}</Card.Title>
                <Card.Body>
                  <Card.Text>
                  <label>Race:</label> {isValid(array.race)}<br />
                  <label>Gender:</label> {isValid(array.gender)}<br />
                  <label>Birth:</label> {isValid(array.birth)}<br />
                  <label>Spouse:</label> {isValid(array.spouse)}<br />
                  <label>Death:</label> {isValid(array.death)}
                  </Card.Text>
                </Card.Body>
                </Card.Link>
              </Card>
            ))
          : <div className='text-light'>
              <p className='text-center'><strong>No characters found.</strong></p>
              <div>
                <blockquote>Not all those who wander are lost.</blockquote>
                <cite>― Bilbo Baggins</cite>
              </div>
            </div>
        }
        </div>

        {countPages > 0 &&
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={countPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={pageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        }

      </Container>

      <div className='img-bottom'>
        <img src={LOTRImg} alt="Tree." />
      </div>

    </main>
  );
}