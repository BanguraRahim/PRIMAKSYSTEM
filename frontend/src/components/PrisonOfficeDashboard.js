//import React from 'react';
//import { Container, Row, Col, Card } from 'react-bootstrap';
//import { useNavigate } from 'react-router-dom';
//
//const PrisonOfficerDashboard = () => {
//  const navigate = useNavigate();
//
//  return (
//    <Container>
//      <h1 className="text-center shiny-text">Prison Officer Dashboard</h1>
//      <Row className="justify-content-center">
//        <Col md={3}>
//          <Card className="text-white bg-primary mb-3 dashboard-card">
//            <Card.Header>
//              <i className="fas fa-plus fa-3x"></i>
//            </Card.Header>
//            <Card.Body className="d-flex flex-column align-items-center justify-content-center full-width">
//              <h5 className="card-title">Add Inmate</h5>
//              <button className="btn btn-light btn-block" onClick={() => navigate('/add-inmate')}>
//                Add Inmate
//              </button>
//            </Card.Body>
//          </Card>
//        </Col>
//        <Col md={3}>
//          <Card className="text-white bg-warning mb-3 dashboard-card">
//            <Card.Header>
//              <i className="fas fa-list fa-3x"></i>
//            </Card.Header>
//            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
//              <h5 className="card-title">View Inmates</h5>
//              <button className="btn btn-light btn-block" onClick={() => navigate('/view-inmates')}>
//                View Inmates
//              </button>
//            </Card.Body>
//          </Card>
//        </Col>
//      </Row>
//    </Container>
//  );
//};
//
//export default PrisonOfficerDashboard;
//

//import React from 'react';
//import { Container, Row, Col,ListGroup } from 'react-bootstrap';
//import { useNavigate } from 'react-router-dom';
//import './PrisonOfficerDashboard.css';
//import backgroundImage from '../img/prisonStaff.jpg';
//
//const PrisonOfficerDashboard = () => {
//  const navigate = useNavigate();
//
//  return (
//    <Container fluid>
//      <Row>
//        <Col md={3} className="sidebar bg-info" style={{ backgroundColor: '#2c3e50'}}>
//          <ListGroup variant="flush">
//            <ListGroup.Item action onClick={() => navigate('/add-inmate')}>
//              <i className="fas fa-plus mr-2"></i> Add Inmate
//            </ListGroup.Item>
//            <ListGroup.Item action onClick={() => navigate('/view-inmates')}>
//              <i className="fas fa-list mr-2"></i> View Inmates
//            </ListGroup.Item>
//          </ListGroup>
//        </Col>
//        </Row>
//
//    </Container>
//  );
//};
//
//export default PrisonOfficerDashboard;

import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './PrisonOfficerDashboard.css';
import backgroundImage from '../img/prisonStaff.jpg';

const PrisonOfficerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-background">
      <Container fluid>
        <Row>
          <Col md={3} className="sidebar bg-info" style={{ backgroundColor: '#2c3e50'}}>
            <ListGroup variant="flush">
              <ListGroup.Item action onClick={() => navigate('/add-inmate')}>
                <i className="fas fa-plus mr-2"></i> Add Inmate
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => navigate('/view-inmates')}>
                <i className="fas fa-list mr-2"></i> View Inmates
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9} className="content">
            {/* Content Here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrisonOfficerDashboard;

