import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { FaTachometerAlt, FaUser, FaBox, FaBlog, FaSignInAlt, FaExclamationTriangle, FaUserCircle,FaUserPlus } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className='overflow-auto d-flex flex-column' style={{scrollbarWidth:"none" , height:"100vh" , position:"fixed"}}>
    <Nav defaultActiveKey="/" className="flex-column vh-100 bg-light p-3 shadow-sm text-dark">
      <div className="mb-4 text-center">
        <h5 className='mt-4'>
          <FaUserCircle size={28} className="text-secondary cursor-pointer mx-1 text-dark" /> Jaydon Frankie
        </h5>
      </div>

      <Link to="/dashboard" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mt-3 mx-5">
        <FaTachometerAlt /> Dashboard
      </Link>

      <Link to="/user" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mt-3 mx-5">
        <FaUser /> User
      </Link>

      <Link  to="/product" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mt-3 mx-5">
        <FaBox /> Product
      </Link>

      <Link to="/blog" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mt-3 mx-5">
        <FaBlog /> Blog
      </Link>

      <Link  to="/" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mt-3 mx-5">
        <FaSignInAlt /> Login
      </Link>

      

      <Link to="/notfound" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mt-3 mx-5">
        <FaExclamationTriangle /> Not Found
      </Link>
    </Nav>
    </div>
  );
}

export default Sidebar;
