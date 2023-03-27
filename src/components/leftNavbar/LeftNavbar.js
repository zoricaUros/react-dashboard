/** @format */

import Home from "../../pages/home/Home";
import Subscribe from "../../pages/subscribes/Subscribe";
import Videoman from "../../pages/videoman/Videoman";
import Admin from "../../pages/admin/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='subscribe'>Subscribes</Link>
      <Link to='videomanagement'>Video management</Link>
      <Link to='admin'>Admin</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='subscribe' element={<Subscribe />} />
        <Route path='video' element={<Videoman />} />
        <Route path='admin' element={<Admin />} />
      </Routes>
    </Router> 
  );
};

export default LeftNavbar;
