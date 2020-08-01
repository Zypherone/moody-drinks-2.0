import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row' 

function Footer() {
  return (
    <>
    
      <Container as="footer" bsPrefix="container center">
        <Row bsPrefix="row text-center">
          <Col>Copyright &copy; {new Date().getFullYear()} </Col>
        </Row>
      </Container>
    
    </>
  );
}

export default Footer;