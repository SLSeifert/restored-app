import { selectAllContent } from "./contentSlice";
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from "reactstrap";

const ContentCard = () => {
  const contentAll = selectAllContent();
  const content = contentAll[0];
  return (
    <>
      <h1 className="ms-3">Week {content.week}</h1>
      <Card>
        <video src={content.video} controls width="100%" />
        <CardImgOverlay className="text-light">CURRENT WEEK</CardImgOverlay>
        <CardBody>
            <CardTitle tag='h5'>{content.title}</CardTitle>
            <p>{content.date}</p>
            <p>{content.reading}</p>
        </CardBody>
      </Card>
    </>
  );
};

export default ContentCard;
