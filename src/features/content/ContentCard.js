import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from "reactstrap";

const ContentCard = ({ content }) => {
  const { video, week, title, date, reading, thumbnail } = content;
  return (
    <>
      <h1 className="ms-3">Week {week}</h1>
      <Card>
        <CardImg src={thumbnail} />
        <CardBody>
          <CardTitle tag="h3">{title}</CardTitle>
          <h5>{date}</h5>
          <p>{reading}</p>
        </CardBody>
      </Card>
    </>
  );
};

export default ContentCard;
