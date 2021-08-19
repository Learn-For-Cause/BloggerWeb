import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";

const MyAccounts = () => {
  const [profileName, setprofileName] = useState("");
  const FetchData = async () => {
    axios.get(`http://localhost:3000/api/profile/611deb9767a86636d419a87e`).then((res) => {
      //alert(JSON.stringify(res.data.data.profiledata.username));
      setprofileName(JSON.stringify(res.data.data.profiledata.username));
    });
  };

  useEffect(() => {
    FetchData();
  }, []);

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
              <h4>{profileName}</h4>
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
