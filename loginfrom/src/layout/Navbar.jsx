import React, { useState } from "react";
import { Container, Navbar, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch, FaBell, FaUserCircle, FaBars } from "react-icons/fa";

const Navbar1 = ({ sidebarToggle, setSidebarToggle }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar
      fixed="top"
      className="px-3 py-2 bg-white shadow-sm"
      style={{
        transition: "all 0.3s ease",
        marginLeft: sidebarToggle ? "80px" : "250px",
        width: sidebarToggle ? "calc(100% - 80px)" : "calc(100% - 250px)",
        zIndex: 1,
      }}
    >
      <Container fluid className="d-flex align-items-center">
        <FaBars
          className="me-3 d-lg-none cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />

        <Form className="d-none d-md-flex flex-grow-1 me-4">
          <InputGroup className="w-100 rounded-pill overflow-hidden">
            <InputGroup.Text style={{ border: "none" }}>
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              type="search"
              placeholder="Search here..."
              style={{ border: "none", outline: "none", boxShadow: "none" }}
            />
          </InputGroup>
        </Form>

        <div className="d-flex align-items-center gap-3 position-relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIkjWuYPdlUlSxLDGzGUk8HV7JDUqdgqQvg&s"
            alt="Flag"
            width="24"
            height="24"
            style={{ borderRadius: "10%" }}
          />
          <FaBell size={20} className="cursor-pointer" />
          <div>
            <FaUserCircle
              size={30}
              className="cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div
                style={{ position: "absolute", right: 0, top: "40px",
                  background: "white", boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  padding: "10px", zIndex: 1, minWidth: "90px",
                }}
              >
                <Button variant="primary" className="d-flex w-100 mb-2" href="/">Login</Button>
                <Button variant="success" className="w-100" href="/signUp">Signup</Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
