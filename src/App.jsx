//React...
import { useState } from 'react';

// src/App.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//Pages...
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import ContactPage from './pages/ContactPage';
import FAQ from './pages/FAQ';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

// const Home = lazy(() => import('./pages/Home'));
// const Inventory = lazy(() => import('./pages/Inventory'));
// const ContactPage = lazy(() => import('./pages/ContactPage'));
// const FAQ = lazy(() => import('./pages/FAQ'));
// const LoginPage = lazy(() => import('./pages/LoginPage'));
// const AdminPage = lazy(() => import('./pages/AdminPage'));

//Components...
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';
import MobileNav from './components/MobileNav';
import MoreInfoPage from './pages/MoreInfoPage';
import TransitionPage from './pages/TransitionPage';

//React icons...
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

//Styles...
import './styles/App.scss';


const App = () => {

  //State that determines if the mobile menu should show...
  const [mobileNav, setMobileNav] = useState(false);
  const [mobileMotion, setMobileMotion] = useState(false);


  const [loading, setLoading] = useState(false);


  const handleTransition = () => {
    setLoading(true);
  }


  return (
    <Router>
      <div className="App raleway-font">
        {loading ? (
          <TransitionPage loading={loading} setLoading={setLoading}/>
        ) : (
          <>
            <ScrollToTop/>
            <nav>
                          <Link to={'/'}>
                            <h1 onClick={handleTransition}>VivaBike</h1>
                          </Link>
                          <div>
                            <span>
                              <Link onClick={handleTransition} to={'/'}>Home</Link>
                            </span>
                            <span>
                              <Link onClick={handleTransition} to={'Inventory'}>Inventory</Link>
                            </span>
                            <span>
                              <Link onClick={handleTransition} to={'/FAQ'}>FAQ</Link>
                            </span>
                            <span>
                              <Link onClick={handleTransition} to={'/contact'}>Contact</Link>
                            </span>
                          </div>
                          <div className='hamburger-menu'>
                              <svg 
                                className={`ham hamRotate ${mobileMotion ? "active" : ""} ham7 `}
                                viewBox="0 0 100 100" 
                                width="80" 
                                onClick={() => {
                                  setMobileMotion(prev => !prev)
                                  setMobileNav(prev => !prev)
                                }}
                              >
                                <path
                                  className="line top"
                                  d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" 
                                />
                                <path
                                  className="line middle"
                                  d="m 70,50 h -40" 
                                />
                                <path
                                  className="line bottom"
                                  d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" 
                                />
                              </svg>
                          </div>
            </nav>
            <MobileNav 
              mobileNav={mobileNav} 
                        setMobileNav={setMobileNav} 
                        setMobileMotion={setMobileMotion}
              handleTransition={handleTransition}
            />
            <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/inventory" element={<Inventory />}/>
                        <Route path="/inventory/:id" element={<MoreInfoPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/FAQ" element={<FAQ />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route 
                          path="/admin" 
                          element={
                            <PrivateRoute>
                              <AdminPage/>
                            </PrivateRoute>
                          } 
                        />
            </Routes>
            <footer>
                        <div className='page-title'>
                          <h2>VivaBikes Austin</h2>
                        </div>
                        <div className='contact-footer footer-size'>
                          <h2>Contact</h2>
                          <div>Phone: 000-000-0000</div>
                          <div>EmaiL info@vivabikesaustin.org</div>
                        </div>
                        <div className="resources-footer footer-size">
                          <h2>Resources</h2>
                          <ul>
                            <Link to={'/contact'}>Locations</Link>
                            <Link to={'/FAQ'}>FAQ</Link>
                            <div className='social-media-container'>
                                <a href="">
                                  <FaFacebook/>
                                </a>
                                <a href="https://www.instagram.com/100bikesforkids/?hl=en">
                                  <FaInstagram/>
                                </a>
                                <a href="">
                                  <FaXTwitter/>
                                </a>
                            </div>
                          </ul>
                        </div>
            </footer>     
          </>
        )          
        }
      </div>
    </Router>
  );

};

export default App;
