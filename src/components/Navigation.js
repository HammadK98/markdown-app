import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Navbar, Row } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#861919", height: "7vh" }} data-bs-theme="dark">
        <Container>
          <Row xs="auto">
            <Col>
              <FontAwesomeIcon icon={faBook} size="2xl" />
            </Col>
            <Col>
              <Navbar.Brand>Pro Notes</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
