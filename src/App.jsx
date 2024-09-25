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
import { useState } from 'react';
import MobileNav from './components/MobileNav';

function App() {


  const [mobileNav, setMobileNav] = useState(false);

  const [mobileMotion, setMobileMotion] = useState(false);




  return (
    <Router>
      <div className="App raleway-font">
        <ScrollToTop/>


        <nav>
            <Link to={'/'}>
              <h1>VivaBike</h1>
            </Link>
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

            <div className='hamburger-menu'>
                <svg 
                  class={`ham hamRotate ${mobileMotion ? "active" : ""} ham7 `}
                  viewBox="0 0 100 100" 
                  width="80" 
                  onClick={() => {
                    setMobileMotion(prev => !prev)
                    setMobileNav(prev => !prev)
                  }}
                >
                  <path
                    class="line top"
                    d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" 
                  />
                  <path
                    class="line middle"
                    d="m 70,50 h -40" 
                  />
                  <path
                    class="line bottom"
                    d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" 
                  />
                </svg>
              </div>
        </nav>



        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} setMobileMotion={setMobileMotion}/>







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
