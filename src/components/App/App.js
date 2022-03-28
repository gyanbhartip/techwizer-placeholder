import './App.css';
import bgVideo from '../../Assets/pexels-tima-miroshnichenko-6722163.mp4';
import Navbar from '../Header/Navbar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <div className="overlay"></div>
      <video autoPlay muted loop id="myVideo">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <header className="App-header">
        <Navbar />
      </header>
      <main className='main'>
        <Hero />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
