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

      <Container className='text-center jumbotron'>

      <h1>Chapters</h1>

      {book.map((element, id) => (

        <Accordion defaultActiveKey="0" key={id}>
          <Accordion.Item key={element._id}>
            <Accordion.Header>{element.name}</Accordion.Header>
            <Accordion.Collapse>
            <Accordion.Body>

              {chapter.map((array, id2) => {
                let c = null;
                if (element._id === array.book) {
                  c = (
                    <div id={array.book} key={array._id}>
                      {id2 + 1} - {array.chapterName}
                    </div>
                  );
                }
                return c;
              })}

            </Accordion.Body>
            </Accordion.Collapse>
          </Accordion.Item>
        </Accordion>

      ))}

      </Container>

    </main>

  );
}