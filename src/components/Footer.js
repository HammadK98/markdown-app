import { saveAs } from "file-saver";
import { Button, Col } from "react-bootstrap";

function Footer(props) {
  function saveFileHandler() {
    let blobFile = new Blob([props.saveMarkdownText], { type: "text" });
    saveAs(blobFile, props.saveFileName);
  }

  return (
    <>
      <Col>
        <Button onClick={saveFileHandler} variant="outline-secondary">
          Save
        </Button>
      </Col>
    </>
  );
}

export default Footer;
