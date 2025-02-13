import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App(props) {
  const linksEntries = [
    { id: 1, testo: 'CHARACTERS', url: '#', current: false },
    { id: 2, testo: 'COMICS', url: '#', current: false },
    { id: 3, testo: 'MOVIES', url: '#', current: false },
    { id: 4, testo: 'TV', url: '#', current: false },
    { id: 5, testo: 'GAMES', url: '#', current: false },
    { id: 6, testo: 'COLLECTIBLES', url: '#', current: false },
    { id: 7, testo: 'VIDEOS', url: '#', current: false },
    { id: 8, testo: 'FANS', url: '#', current: false },
    { id: 9, testo: 'NEWS', url: '#', current: false },
    { id: 10, testo: 'SHOP', url: '#', current: false },
  ];
  return (
    <>
      <Header link={linksEntries} />
      <Main />
      <Footer />
    </>
  )
}

export default App
