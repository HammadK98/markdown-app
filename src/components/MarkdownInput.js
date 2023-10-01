import { useEffect, useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import classes from "./MarkdownInput.module.css";

function MarkdownInput(props) {
  const textRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);

  function fileNameHandler(event) {
    event.preventDefault();

    props.onFileNameInput(event.target.value);
  }

  function textInputHandler(event) {
    event.preventDefault();

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
              type="text"
              placeholder="# Enter your Markdown"
              onChange={textInputHandler}
              ref={textRef}
            />
          </Form.Group>
        </Row>
      </div>
    </Col>
  );
}

export default MarkdownInput;
