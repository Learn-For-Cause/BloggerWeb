import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";

const MyAccounts = () => {
  const [profileName, setprofileName] = useState("");
  const [profileEmail,setprofileEmail] = useState("");
  const [profileFollowing,setprofileFollowing] = useState("");
  const [intrestprofile,setintrestprofile] = useState("");
  
  const FetchData = async () => {
    axios.get(`http://localhost:3000/api/profile/611deb9767a86636d419a87e`).then((res) => {
      //alert(JSON.stringify(res.data.data.profiledata.username));
      setprofileName(res.data.data.profiledata.username);
      setprofileEmail(res.data.data.profiledata.email);
      setprofileFollowing(res.data.data.profiledata.following);
      setintrestprofile(res.data.data.profiledata.intrests);
      
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
                    <strong>Email : </strong> {profileEmail}
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>Following : </strong>{profileFollowing}
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>Intrests : </strong>{intrestprofile} 
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
