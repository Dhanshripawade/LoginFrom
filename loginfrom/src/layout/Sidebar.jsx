import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaBox, FaBlog, FaSignInAlt, FaExclamationTriangle, FaUserCircle } from 'react-icons/fa';

function Sidebar() {
  return (
    <div style={{ width: "250px", minHeight: "100vh", position: "fixed", background: "#f8f9fa", boxShadow: "2px 0 5px rgba(0,0,0,0.1)" }}>
      <Nav defaultActiveKey="/" className="flex-column p-3 text-dark position-fixed">
        <div className="mb-4 text-center">
          <h5 className='mt-4'>
            <FaUserCircle size={28} className="text-secondary mx-1" /> Jaydon Frankie
          </h5>
        </div>

        <Link to="/dashboard" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mx-3">
          <FaTachometerAlt /> Dashboard
        </Link>

        <Link to="/user" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mx-3">
          <FaUser /> User
        </Link>

        <Link to="/product" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mx-3">
          <FaBox /> Product
        </Link>

        <Link to="/blog" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mx-3">
          <FaBlog /> Blog
        </Link>

        <Link to="/" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mx-3">
          <FaSignInAlt /> Login
        </Link>

        <Link to="/notfound" className="mb-3 d-flex align-items-center gap-2 text-dark text-decoration-none mx-3">
          <FaExclamationTriangle /> Not Found
        </Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
