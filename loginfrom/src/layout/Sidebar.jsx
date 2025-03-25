import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaBox, FaBlog, FaSignInAlt, FaExclamationTriangle, FaUserCircle } from 'react-icons/fa';

const Sidebar = ({ sidebarToggle }) => {
  const sidebarWidth = sidebarToggle ? '80px' : '250px';

  return (
    
    <div
      className="bg-light vh-100 position-fixed d-flex flex-column align-items-center"
      style={{
        width: sidebarWidth,
        transition: 'all 0.3s ease',
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <Nav defaultActiveKey="/" className="flex-column w-100 mt-4">
        <div className="text-center mb-4 mx-3">
          {!sidebarToggle && (
            <h6>
              <FaUserCircle size={28} className="text-secondary " /> Jaydon Frankie
            </h6>
          )}
          {sidebarToggle && (
            <FaUserCircle size={28} className="text-secondary" />
          )}
        </div>

        <Link to="/dashboard" className=" d-flex align-items-center justify-content-center justify-content-md-start px-3 text-decoration-none text-dark">
          <FaTachometerAlt className="me-2" /> {!sidebarToggle && "Dashboard"}
        </Link>
        <Link to="/user" className=" d-flex align-items-center justify-content-center justify-content-md-start px-3 mt-4 text-decoration-none text-dark">
          <FaUser className="me-2" /> {!sidebarToggle && "User"}
        </Link>
        <Link to="/product" className=" d-flex align-items-center justify-content-center justify-content-md-start px-3  mt-4 text-decoration-none text-dark">
          <FaBox className="me-2" /> {!sidebarToggle && "Product"}
        </Link>
        <Link to="/blog" className=" d-flex align-items-center justify-content-center justify-content-md-start px-3 mt-4 text-decoration-none text-dark">
          <FaBlog className="me-2" /> {!sidebarToggle && "Blog"}
        </Link>
        <Link to="/" className=" d-flex align-items-center justify-content-center justify-content-md-start px-3 mt-4 text-decoration-none text-dark">
          <FaSignInAlt className="me-2" /> {!sidebarToggle && "Login"}
        </Link>
        <Link to="/notfound" className=" d-flex align-items-center justify-content-center justify-content-md-start px-3 mt-4 text-decoration-none text-dark">
          <FaExclamationTriangle className="me-2" /> {!sidebarToggle && "Not Found"}
        </Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
