import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaAndroid, FaApple, FaWindows, FaBug } from 'react-icons/fa';
import Graph from './Graph.jsx';
import PieChart from './PieChart.jsx';

function Home() {
  return (
    <Container >
      <h4 className='mt-2 mt-5'>Hi, Welcome Back</h4>

      <Row className="mt-4">
        <Col md={3}>
          <Card className="border-0 text-center p-3 rounded-3 text-decoration-none" style={{backgroundColor: "rgb(209,233,252)"}}>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="bg-primary-subtle rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <FaAndroid size={24} className="text-primary" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="fw-bold fs-4">714k</Card.Title>
              <Card.Text className="text-muted">Weekly Sales</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="border-0 text-center p-3 rounded-3" style={{backgroundColor: "rgb(208,242,254)"}}>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="bg-info-subtle rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <FaApple size={24} className="text-primary" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="fw-bold fs-4">1.35m</Card.Title>
              <Card.Text className="text-muted">New Users</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="border-0 text-center p-3 rounded-3" style={{backgroundColor: "rgb(255,247,204)"}}>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <FaWindows size={24} className="text-warning" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="fw-bold fs-4">1.72m</Card.Title>
              <Card.Text className="text-muted">Item Orders</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="border-0 text-center p-3 rounded-3" style={{backgroundColor: "rgb(255,231,217)"}}>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="bg-danger-subtle rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <FaBug size={24} className="text-danger" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="fw-bold fs-4">234</Card.Title>
              <Card.Text className="text-muted">Bug Reports</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
      <Row className="gx-4 gy-4">
        <Col md={6}>
          <Card className="border-0 shadow-sm mt-3">
            <Card.Body>
              <h5 className="fw-semibold mb-3">Website Visits</h5>
              < Graph/>
              <small className="text-muted d-block mt-2">(+43%) than last year</small>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="border-0 shadow-sm mt-3">
          
              <PieChart />
           
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
