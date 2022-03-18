import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './views/home';
import { Chapters } from './views/chapters';
import { Characters } from './views/characters';
import { Quotes } from './views/quotes';
import { headers, APILOTRBooks, APILOTRChapters, APILOTRChars, APILOTRCharID, APILOTRRaces, APILOTRQuotes } from './components/api-lotr';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Characters headers={headers} chars={APILOTRChars} charRace={APILOTRRaces} />
      <Chapters headers={headers} books={APILOTRBooks} chapters={APILOTRChapters} />
      <Quotes headers={headers} quote={APILOTRQuotes} charID={APILOTRCharID} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;