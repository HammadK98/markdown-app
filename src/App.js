import { useState } from "react";
import Footer from "./components/Footer";
import { Container, Row } from "react-bootstrap";
import Navigation from "./components/Navigation";
import MarkdownRender from "./components/MarkdownRender";

function App() {
  const [markdownText, setMarkdownText] = useState("");
  const [fileName, setFileName] = useState("untitled-note");

  function saveFileNameHandler(fileNameInput) {
    setFileName(fileNameInput);
  }

  function saveMarkdownInputHandler(markdownInput) {
    setMarkdownText(markdownInput);
  }

  return (
    <>
      <Navigation />
      <Container fluid>
        <MarkdownRender
          markdownTextInput={markdownText}
          onSaveFileName={saveFileNameHandler}
          onSaveMarkdownText={saveMarkdownInputHandler}
        />
        <Row>
          <Footer saveMarkdownText={markdownText} saveFileName={fileName} />
        </Row>
      </Container>
    </>
  );
}

export default App;
