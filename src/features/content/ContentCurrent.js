import { currentContent } from "./contentSlice";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, Col } from "reactstrap";

const ContentCurrent = () => {
  const { week, title, date, reading, thumbnail } = currentContent();
  return (
    <Col md='8' className="mx-auto">
      <h1 className="ms-3">Week {week}</h1>
      <Card className="mx-5">
        <CardImg src={thumbnail} />
        <CardImgOverlay className="text-dark ">CURRENT WEEK</CardImgOverlay>
        <CardBody>
          <CardTitle tag="h3">{title}</CardTitle>
          <h5>{date}</h5>
          <p>{reading}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContentCurrent;
