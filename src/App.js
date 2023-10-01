import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col className="text-center border-end">Col 1 of 1</Col>
          <Col className="text-center border-start">Col 2 of 2</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
