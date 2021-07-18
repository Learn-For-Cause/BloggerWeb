import { Row, Col, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Container className="my-header mt-2" fluid>
        <Row className="h-100">
          <Col className="image-col h-100">
            {/* <img src="/images/header.jpg" alt="" /> */}
            <img
              src="https://easetemplate.com/free-website-templates/hike/images/pageheader.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
