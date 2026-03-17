import ContentCard from "./ContentCard";
import { Col, Row } from "reactstrap";
import { selectAllContent } from "./contentSlice";

export const ContentList = () => {
  const content = selectAllContent();
  return (
    <Row className="ms-auto">
      {content.map((item, index) => (
        <Col md="5" className="m-4" key={item.week}>
          <ContentCard key={index} content={item} />
        </Col>
      ))}
    </Row>
  );
};
