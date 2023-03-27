/** @format */

import LeftNavbar from "../leftNavbar/LeftNavbar";
import "./navbar.css";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav-icon' onClick={() => openSidebar()}>
        <i className='fa fa-bars'></i>
      </div>

      <div className='navbar-left'>
        {/* <Link to='/'>Home</Link>
        <Link to='subscribe'>Subscribes</Link>
        <Link to='videomanagement'>Video management</Link>
        <Link to='admin'>Admin</Link>
        <a href='subscribe'>Subscribers</a>
        <a href='videomanagement'>Video management</a>
        <a href='admin' className='active-link'>
          Admin
        </a>
        */}
        <LeftNavbar />
      </div>

      <div className='navbar-right'>
        <a href='#'>
          <i className='fa fa-search'></i>
        </a>
        <a href='#'>
          <i className='fa fa-clock'></i>
        </a>
        <a href='#'>
          <img width='50' src='./images/logoNavbar2.webp' alt='logo-navbar' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
