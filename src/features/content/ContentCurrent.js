const ContentCurrent = () => {
  return (
    <>
      <h1 className="ms-3">Week {week}</h1>
      <Card>
        <CardImg src={thumbnail} />
        <CardImgOverlay className="text-light">CURRENT WEEK</CardImgOverlay>
        <CardBody>
          <CardTitle tag="h3">{title}</CardTitle>
          <h5>{date}</h5>
          <p>{reading}</p>
        </CardBody>
      </Card>
    </>
  );
};

export default ContentCurrent;
