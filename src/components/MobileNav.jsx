//React...
import React from 'react';

//React router...
import {Link} from 'react-router-dom'

//styles...
import '../styles/MobileNav.scss'


const MobileNav = ({mobileNav, setMobileNav, setMobileMotion, handleTransition}) => {


    const handleNavClick = () => {
        handleTransition()
        setMobileNav(prev => !prev)
        setMobileMotion(false)
    }

    return (
        <div    
            className={`black-overlay-mobile ${mobileNav ? "active" : ""}`} 
            onClick={() => {
                setMobileNav(prev => !prev) 
                setMobileMotion(false)
            }}
        >
            <div onClick={(e) => e.stopPropagation()}>
                <ul className='mobile-nav'>
                    <Link to={'/'} onClick={handleNavClick}>Home</Link>
                    <Link to={'/Inventory'} onClick={handleNavClick}>Inventory</Link>
                    <Link to={'/FAQ'} onClick={handleNavClick}>FAQ</Link>
                    <Link to={'/contact'} onClick={handleNavClick}>Contact</Link>
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;