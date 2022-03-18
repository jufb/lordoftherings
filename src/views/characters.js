import '../assets/characters.css';
import { useEffect, useState } from 'react';
import { FormControl, Form, CardGroup, Card, Container, Button } from 'react-bootstrap';
import LOTRImg from '../assets/tree-bottom.png';
import ReactPaginate from 'react-paginate';

export function Characters(props) {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState([]);
  const [countPages, setCountPages] = useState(0);
  const dataLimit = 10;
  
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const rawCharacters = await fetch(props.chars + '?page=1&limit=' + dataLimit, { headers: props.headers });
      const chars = await rawCharacters.json();
      setCharacter(chars.docs);
      setCountPages(Math.ceil(chars.total / dataLimit));
    };

    fetchData();

    setLoading(false);
  }, [props, dataLimit]);

  //Gets the clicked item number on the Pagination and call the fetchDataPaginated
  const pageClick = async (data) => {
    let page = data.selected + 1;
    const chars = await fetchDataPaginated(page);
    setCharacter(chars.docs);
  }

  // Fetch the API again to set the page and the limit of items in each page
  const fetchDataPaginated = async (page) => {
    const rawCharacters = await fetch(props.chars + '?page=' + page + '&limit=' + dataLimit, { headers: props.headers });
    const chars = await rawCharacters.json();
    return chars;
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

        <Form className="d-flex container">
          <FormControl
            type="search"
            placeholder="Search by name"
            aria-label="Search" disabled
          />
          <Button variant="primary" disabled>Search</Button>
        </Form>

        <CardGroup>
          {character.map ((array) => (
            <Card key={array._id}>
              <Card.Link href={array.wikiUrl} target="_blank">
              <Card.Title>{array.name}</Card.Title>
              <Card.Body>
                <Card.Text>
                  <label>Race:</label> {array.race}<br />
                  <label>Gender:</label> {array.gender}<br />
                  <label>Birth:</label> {array.birth}<br />
                  <label>Spouse:</label> {array.spouse}<br />
                  <label>Death:</label> {array.death}<br />
                </Card.Text>
              </Card.Body>
              </Card.Link>
            </Card>
          ))}
        </CardGroup>

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

      </Container>

      <div className='img-bottom'>
        <img src={LOTRImg} alt="Tree." />
      </div>

    </main>
  );
}