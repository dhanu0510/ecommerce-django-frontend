import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-3">{children}</Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
