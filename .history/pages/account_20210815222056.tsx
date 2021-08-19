import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
const MyAccounts = () => {
  return (
    <>
      <div className="account-root">
        <Container className="upper" fluid>
          <Row className="h-100 w-100">
            <Col md={3} className="avatar-col">
              <Avatar
                className="avatar"
                alt="Cindy Baker"
                src="/images/profile.png"
              />
            </Col>
            <Col md={9} className="details">
              <h4>Cindy Bakerslade</h4>
              <Row className="minor-details w-75">
                <Col>
                  <p>
                    <strong>12</strong> Posts
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>345</strong> Following
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>48k</strong> Followers
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyAccounts;
