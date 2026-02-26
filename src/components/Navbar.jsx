import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">DM</div>
          Dunder Mithlin
        </Link>
        <div className="navbar-links">
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/team" className={pathname === '/team' ? 'active' : ''}>Team</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
