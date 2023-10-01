import { Container, Row } from "react-bootstrap";
import Navigation from "./components/Navigation";
import MarkdownInput from "./components/MarkdownInput";
import { useState } from "react";
import MarkdownPreview from "./components/MarkdownPreview";
import Footer from "./components/Footer";

function App() {
  const [markdownText, setMarkdownText] = useState("");
  const [fileName, setFileName] = useState("untitled-note");

  function saveFileNameHandler(savedFileName) {
    setFileName(savedFileName);
  }

  function saveMarkdownInputHandler(markdownInput) {
    setMarkdownText(markdownInput);
  }

  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <MarkdownInput
            onSaveMarkdownInput={saveMarkdownInputHandler}
            onFileNameInput={saveFileNameHandler}
          />
          <MarkdownPreview
            onSaveMarkdownInput={markdownText}
            showTitle={fileName}
          />
        </Row>
        <Row>
          <Footer saveMarkdownText={markdownText} saveFileName={fileName} />
        </Row>
      </Container>
    </>
  );
}

export default App;
