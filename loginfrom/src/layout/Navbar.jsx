import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import {  Button } from "react-bootstrap";

import { FormControl, InputGroup, Dropdown } from "react-bootstrap";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar1 = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <Navbar
        className="d-flex align-items-center px-4 py-2 text-dark"
        style={{
          
           
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
        }}
      >
        <Container fluid>
          <Form className="d-flex flex-grow-1 me-4">
            <InputGroup className="w-100" style={{ borderRadius: "30px", overflow: "hidden" }}>
              <InputGroup.Text style={{  border: "none" }}>
                <FaSearch />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search here..."
                style={{ border: "none", outline: "none", boxShadow: "none" }}
              />
            </InputGroup>
          </Form>
        </Container>

        <div className="d-flex align-items-center gap-3 position-relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIkjWuYPdlUlSxLDGzGUk8HV7JDUqdgqQvg&s"
            alt="India Flag"
            width="24"
            height="24"
            style={{ borderRadius: "10%" }}
          />

          <FaBell size={20} className="cursor-pointer text-dark mx-2" />

          <div>
            <FaUserCircle
              size={30}
              className="cursor-pointer text-dark mx-2"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "40px",
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  padding: "10px",
                  zIndex: 1000,
                  minWidth: "150px"
                }}
              >
                <Button className="btn btn-primary w-100 mb-2 p-1" href="/">Login</Button>
                <Button className="btn btn-success w-100" href="/signUp">Signup</Button>
               
              </div>
            )}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbar1;
