import { Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownPreview(props) {
  return (
    <Col className="pt-2">
      <h2 className="text-center text-secondary">{props.showTitle}</h2>
      <hr />
      <ReactMarkdown
        children={props.onSaveMarkdownInput}
        remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
      />
    </Col>
  );
}

export default MarkdownPreview;
