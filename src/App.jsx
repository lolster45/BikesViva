// src/App.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//Pages...
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import ContactPage from './pages/ContactPage';
import FAQ from './pages/FAQ';

//Components...
import ScrollToTop from './components/ScrollToTop';

//Styles...
import './styles/App.scss'; // For basic styling

function App() {
  return (
    <Router>
      <div className="App raleway-font">
        <ScrollToTop/>
        <nav>
            <h1>VivaBike Austin</h1>
            <div>
              <span>
                <Link to={'/'}>Home</Link>
              </span>
              <span>
                <Link to={'Inventory'}>Inventory</Link>
              </span>
              <span>
                <Link to={'/FAQ'}>FAQ</Link>
              </span>
              <span>
                <Link to={'/contact'}>Contact</Link>
              </span>
            </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
        <footer>
          <div className='page-title'>
            <h2>VivaBikes Austin</h2>
          </div>
          <div className='contact-footer footer-size'>
            <h2>Contact</h2>
            <div>Phone: 000-000-0000</div>
            <div>EmaiL randomemail#gmail.com</div>
          </div>
          <div className="resources-footer footer-size">
            <h2>Resources</h2>
            <ul>
              <Link to={'/contact'}>Locations</Link>
              <Link to={'/FAQ'}>FAQ</Link>
              <div>
                social media
              </div>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
