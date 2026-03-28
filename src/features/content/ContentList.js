import ContentCard from "./ContentCard";
import { Col, Row } from "reactstrap";
import { notCurrentContent } from "./contentSlice";

export const ContentList = () => {
  const content = notCurrentContent();

  return (
    <Row className="mx-auto justify-content-center">
      {
        content.map((item, index) => (
          <Col md="5" className="m-4" key={item.week}>
            <ContentCard key={index} content={item} />
          </Col>
        ))}
    </Row>
  );
};
