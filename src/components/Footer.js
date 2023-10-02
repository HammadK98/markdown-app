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
        <div className="d-grid gap-2 pt-4 pb-4">
          <Button
            onClick={saveFileHandler}
            variant="outline-secondary"
            size="lg"
          >
            Save
          </Button>
        </div>
      </Col>
    </>
  );
}

export default Footer;
