import '../assets/chapters.css';
import { useEffect, useState } from 'react';
import { Container, Accordion} from "react-bootstrap";

export function Chapters(props) {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);
  const [chapter, setChapter] = useState([]);

  useEffect(() => {
    setLoading(true);
    
    const fetchData = async () => {
      const rawBooks = await fetch(props.books);
      const books = await rawBooks.json();
      setBook(books.docs);

      const rawChapters = await fetch(props.chapters, { headers: props.headers });
      const chapters = await rawChapters.json();
      setChapter(chapters.docs);

      setLoading(false);
    };

    fetchData();
  }, [props]);

  if(loading) {
    return (
      <center>Loading...</center>
    );
  }

  return (

    <main id="Chapters">
      <img id="tree" src="https://static.wixstatic.com/media/249783_d87aa89bb473474da923e62cf0973b6c~mv2.png" alt="Tree." />

      <Container className='text-center jumbotron'>

      <h1>Chapters</h1>

      <div id="books">
          <Accordion>
            {book.map((element, id) => (
            <Accordion.Item key={id} eventKey={id}>
              <Accordion.Header>{element.name}</Accordion.Header>
              <Accordion.Body>

                {chapter.map((array, id2) => {
                  if (element._id === array.book) {
                    return (
                      <div id={array.book} key={array._id}>
                        {id2+1} - {array.chapterName}
                      </div>
                    );
                  }
                  return null;
                })}

              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

      </div>
      </Container>

    </main>

  );
}