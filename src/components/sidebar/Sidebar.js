/** @format */

import "./sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-image'>
          <img
            width='80'
            className='logoSidebar-img'
            src='./images/logoSidebar.jpg'
            alt='logo-navbar'
          />
          <h1 className='codersbite-title'>MinnieCode</h1>
        </div>
        <i
          className='fa fa-times'
          id='sidebarIcon'
          onClick={() => closeSidebar()}
        ></i>
      </div>
      <div className='sidebar-menu'>
        <div className='sidebar-link active-menu-link'>
          <i className='fa fa home'></i>
          <a href='#'>Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className='sidebar-link'>
          <i className='fa fa-user-secret'></i>
          <a href='#'>Admin Management</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-building'></i>
          <a href='#'>Company Management</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-wrench'></i>
          <a href='#'>Employee Management</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-archive'></i>
          <a href='#'>Warehouse</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-handshake'></i>
          <a href='#'>Contracts</a>
        </div>
        <h2>LEAVE</h2>
        <div className='sidebar-link'>
          <i className='fa fa-question'></i>
          <a href='#'>Requests</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-sign-out'></i>
          <a href='#'>Leave Policy</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-calendar-check'></i>
          <a href='#'>Special Days</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-files'></i>
          <a href='#'>Apply for leave</a>
        </div>
        <h2>PAYROLL</h2>
        <div className='sidebar-link'>
          <i className='fa fa-money'></i>
          <a href='#'>Payroll</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-briefcase'></i>
          <a href='#'>Paygrade</a>
        </div>
        <div className='sidebar-link'>
          <i className='fa fa-power-off'></i>
          <a href='#'>Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
