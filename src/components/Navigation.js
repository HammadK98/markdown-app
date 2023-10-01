import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <FontAwesomeIcon icon="fa-brands fa-markdown" />
          <Navbar.Brand>Pro Notes</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
