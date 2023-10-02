import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import classes from "./MarkdownInput.module.css";

function MarkdownInput(props) {
  // eslint-disable-next-line
  const [value, setValue] = useState();

  function fileNameHandler(event) {
    props.onFileNameInput(event.target.value);
  }

  function textInputHandler(event) {
    setValue(event.target.value);
    props.onSaveMarkdownInput(event.target.value);
  }
  return (
    <Col className={`pt-2 ${classes.column}`}>
      <div className={classes.customBorder}>
        <Row>
          <Col className="text-muted">
            <Form.Control
              className="border-0 shadow-none"
              style={{ height: "5vh" }}
              type="text"
              placeholder="Untitled-Note"
              onChange={fileNameHandler}
            />
            <hr />
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              className="border-0 shadow-none text-start"
              size="lg"
              style={{ height: "67.3vh", resize: "none" }}
              type="text"
              placeholder="# Enter your Markdown"
              onChange={textInputHandler}
            />
          </Form.Group>
        </Row>
      </div>
    </Col>
  );
}

export default MarkdownInput;
