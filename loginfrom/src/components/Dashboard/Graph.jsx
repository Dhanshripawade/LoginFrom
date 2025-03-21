import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area
} from 'recharts';

const data = [
  { name: 'Jan', teamA: 20, teamB: 40, teamC: 25 },
  { name: 'Feb', teamA: 10, teamB: 60, teamC: 30 },
  { name: 'Mar', teamA: 30, teamB: 20, teamC: 35 },
  { name: 'Apr', teamA: 15, teamB: 55, teamC: 40 },
  { name: 'May', teamA: 25, teamB: 25, teamC: 45 },
  { name: 'Jun', teamA: 35, teamB: 65, teamC: 50 },
  { name: 'Jul', teamA: 20, teamB: 20, teamC: 55 },
  { name: 'Aug', teamA: 40, teamB: 50, teamC: 30 },
  { name: 'Sep', teamA: 25, teamB: 40, teamC: 20 },
  { name: 'Oct', teamA: 30, teamB: 35, teamC: 25 },
];

const WebsiteVisitsChart = () => (
  <Container className="my-4">
    <Row className="">
      <Col md={10}>
        {/* <Card className="p-4"> */}
          {/* <h5>Website Visits</h5> */}
          <p className="text-muted">(+43%) than last year</p>
          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="teamB" fill="rgba(255,193,7,0.1)" stroke="none" />
              <Bar dataKey="teamA" barSize={20} fill="#0d6efd" /> {/* Bootstrap primary color */}
              <Line type="monotone" dataKey="teamB" stroke="#ffc107" strokeWidth={2} /> 
              <Line type="monotone" dataKey="teamC" stroke="#0d6efd" strokeWidth={2} /> {/* Bootstrap primary color */}
            </ComposedChart>
          </ResponsiveContainer>
        {/* </Card> */}
      </Col>
    </Row>
  </Container>
);

export default WebsiteVisitsChart;
