import { Row, Col, Container } from "react-bootstrap";

export default function BlogList() {
  const tempList = [
    {
      title: "Welcome to BloggerX",
      authot: "LFC",
      publishDate: "04-07-2016",
      views: "24.5k",
      likes: "5647",
      tags: "#tag #random",
    },
  ];
  return (
    <>
      {tempList.map((data, index) => (
        <Container key={index} className="blog" fluid>
          <Row>
            <Col className="h-100">Title: {data.title}</Col>
          </Row>
        </Container>
      ))}
    </>
  );
}
