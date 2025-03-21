import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { FormControl, InputGroup } from "react-bootstrap";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";


const Navbar1 = () => {
  

  return (
    <div >
      <Navbar
      className='d-flex align-items-center px-4 py-2 '
       
      >
        <Container fluid className="">
          <Form className="d-flex flex-grow-1" >
            <InputGroup className="w-100"  style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}>
              <InputGroup.Text>
              <FaSearch />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search here..."
                className="me-2"
              />
            </InputGroup>
          </Form>
        </Container>

        
        <div className="d-flex align-items-center gap-3">

        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIkjWuYPdlUlSxLDGzGUk8HV7JDUqdgqQvg&s"
            alt="India Flag"
            width="24"
            height="24"
            style={{ borderRadius: '10%' }}
          />
        
        <FaBell size={20} className="cursor-pointer text-dark mx-2" />

        {/* User Avatar */}
        <FaUserCircle size={30} className="cursor-pointer text-dark mx-2" />
        </div>
      </Navbar>
    </div>
  );
};

export default Navbar1;
