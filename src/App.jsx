import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
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
  const linksEntries2 = [
    { id: 1, testo: 'Terms Of Use', url: '#', current: false },
    { id: 2, testo: 'Privacy policy (New)', url: '#', current: false },
    { id: 3, testo: 'Ad Choices', url: '#', current: false },
    { id: 4, testo: 'Advertising', url: '#', current: false },
    { id: 5, testo: 'Jobs', url: '#', current: false },
    { id: 6, testo: 'Subscriptions', url: '#', current: false },
    { id: 7, testo: 'Talent Workshop', url: '#', current: false },
    { id: 8, testo: 'CPSC Certificates', url: '#', current: false },
    { id: 9, testo: 'Ratings', url: '#', current: false },
    { id: 10, testo: 'Shop Help', url: '#', current: false },
    { id: 11, testo: 'Contact Us', url: '#', current: false },
  ];
  const linksEntries3 = [
    { id: 1, text: 'Characters', url: '#', current: false },
    { id: 2, text: 'Comics', url: '#', current: false },
    { id: 3, text: 'Movies', url: '#', current: false },
    { id: 4, text: 'TV', url: '#', current: false },
    { id: 5, text: 'Games', url: '#', current: false },
    { id: 6, text: 'Videos', url: '#', current: false },
    { id: 7, text: 'News', url: '#', current: false },
  ];

  const linksEntries4 = [
    { id: 1, text: 'Shop DC', url: '#', current: false },
    { id: 2, text: 'Shop DC Collectibles', url: '#', current: false },
  ];
  const linksEntries5 = [
    { id: 1, text: 'DC', url: '#', current: false },
    { id: 2, text: 'MAD Magazine', url: '#', current: false },
    { id: 3, text: 'DC Magazine', url: '#', current: false },
    { id: 4, text: 'DC Universe', url: '#', current: false },
    { id: 5, text: 'DC Power Visa', url: '#', current: false },
  ];
  return (
    <>
      <Header link={linksEntries} />
      <Main />
      <Footer link={linksEntries2} />
    </>
  )
}

export default App
