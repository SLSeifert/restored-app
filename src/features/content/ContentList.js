import ContentCard from "./ContentCard";
import { Col, Row } from "reactstrap";
import { selectAllContent } from "./contentSlice";

export const ContentList = () => {
  const content = selectAllContent();
  const today = new Date();
  return (
    <Row className="mx-auto justify-content-center">
      {content
        .filter((item) => {
          const [startStr, endStr] = item.date.split(" - ");
          const year = today.getFullYear();
          const startDate = new Date(`${startStr} ${year}`);
          const endDate = new Date(`${endStr} ${year}`);
          return !(today >= startDate && today <= endDate);
        })
        .map((item, index) => (
          <Col md="5" className="m-4" key={item.week}>
            <ContentCard key={index} content={item} />
          </Col>
        ))}
    </Row>
  );
};
