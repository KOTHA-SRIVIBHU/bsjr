import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64; // height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50" data-theme="fantasy">
      <div className="navbar bg-base-100 shadow-md backdrop-blur-sm bg-opacity-90">
        <div className="flex-1">
          <Link to="/">
            <img src="./assets/image1.png" alt="college title image" className="h-12 mr-3" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            {location.pathname === '/' ? (
              <>
                <li>
                  <button onClick={() => scrollToSection('home')} className="btn btn-ghost">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="btn btn-ghost">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('academics')} className="btn btn-ghost">
                    Academics
                  </button>
                </li>
                <li>
                  <Link to="/staff" className="btn btn-ghost">
                    Staff
                  </Link>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="btn btn-ghost">
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('activities')} className="btn btn-ghost">
                    Activities
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="btn btn-ghost">
                    Contact
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" className="btn btn-ghost">
                    Go Back
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
