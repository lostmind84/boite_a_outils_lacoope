import { Container, Row, Col } from "react-bootstrap";

function WelcomePage() {
  return (
    <Container className="p-10">
      <Row>
        <Col md="2"></Col>
        <Col className="text-center p-5 fs-2 fw-bold">
          Bienvenue sur la boîte à outils de la Coopé !
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
}

export default WelcomePage;
