import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const logo = ''
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  const navigate = useNavigate()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    if (offset > 800) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  let navbarClasses = [
    'navbar',
    'navbar-expand-lg',
    'fixed-top',
    'navbar-light',
  ]

  if (scrolled || isOpen) {
    navbarClasses.push('scrolled')
    navbarClasses.push('navbar-dark')
  }

  if (hidden) {
    navbarClasses.push('hidden')
  }

  return (
    <nav className={navbarClasses.join(' ')}>
      <div className='container-fluid my-lg-2 bd-layout p-lg-5 pt-lg-0 pb-lg-0'>
        {logo && (
          <a className='navbar-brand' href='/'>
            <img src={logo} alt='Booknow.lk' width='45' />
            <span className='ms-2 text-light'>Booknow.lk</span>
          </a>
        )}
        <div className='d-block d-lg-none ms-auto'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <div
                className='btn-group'
                role='group'
                aria-label='Basic example'>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => navigate('/auth')}>
                  Login
                </button>
                <button
                  type='button'
                  className='btn btn-dark btn-secondary'
                  onClick={() => navigate('/auth/register')}>
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
        </div>
        <button
          className={`custom-toggler navbar-toggler ${isOpen ? 'open' : ''}`}
          type='button'
          onClick={handleToggle}
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded={isOpen}
          aria-label='Toggle navigation'>
          <span className='toggler-icon'></span>
          <span className='toggler-icon'></span>
          <span className='toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse text-center text-sm-end pe-0 pe-sm-3 pe-lg-0'
          id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <span
                className='nav-link'
                aria-current='page'
                onClick={() => navigate('/')}>
                Home
              </span>
            </li>
            <li className='nav-item dropdown'>
              <span
                className='nav-link dropdown-toggle'
                role='button'
                data-bs-toggle='dropdown'
                onClick={() => navigate('/movies')}
                aria-expanded='false'>
                Stations
              </span>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                Schedules
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>
                Contact us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className='d-block d-none d-lg-block'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <div
                className='btn-group'
                role='group'
                aria-label='Basic example'>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => navigate('/auth')}>
                  Login
                </button>
                <button
                  type='button'
                  className='btn btn-dark btn-secondary'
                  onClick={() => navigate('/auth/register')}>
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
