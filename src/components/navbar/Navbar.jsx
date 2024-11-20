import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';




function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail'); // Retrieve stored email


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = [
    'navbar',
    'navbar-expand-lg',
    'fixed-top',
    scrolled ? 'navbar-dark bg-dark' : 'navbar-dark bg-dark',
  ];

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove login token
    localStorage.removeItem('userEmail'); // Remove user email token
    
    navigate('/home'); // Navigate to the login or home page
  };

  return (
    <nav className={navbarClasses.join(' ')}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <img src="src/images/Icons/CousineCompassLogo_2.png" alt="Book a Table" style={{  display: 'block', margin: '0 auto' }} />
        </a>

        <button
          className={`navbar-toggler ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          
          <ul className="navbar-nav ms-auto">
            {['Home', 'Search'].map((item, index) => (
              <li key={index} className="nav-item1">
                <span className="nav-link" onClick={() => navigate(`/${item.toLowerCase()}`)}>
                  {item}
                </span>
              </li>
            ))}
            

            {['Preferences', 'Map', 'Booking'].map((item, index) => (
              <li key={index} className="nav-item1">
                
                {localStorage.getItem('token') && 
                <span className="nav-link" onClick={() => navigate(`/${item.toLowerCase()}`)}>
                  {item}
                </span>
                }
              </li>
            ))}
          </ul>
          
          

          <div className="d-flex" >
            
            {!localStorage.getItem('token') && <button className="btn btn-primary me-2" onClick={() => navigate('/Login')}>
              Login
            </button>
            }
            
            {localStorage.getItem('token') && <button className="btn btn-primary me-2" onClick={handleLogout}>Logout</button>}

            {!localStorage.getItem('token') && (
              <button className="btn btn-primary me-2" onClick={() => navigate('/Register')} >
                <a href="/Register">Register</a>
              </button>
            )}

            {localStorage.getItem('token') && (
            <button className="btn btn-primary me-2" >
              Settings
            </button>
            )}
            
            {userEmail && <span className="welcome-message">Welcome: {userEmail}</span>}


          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
