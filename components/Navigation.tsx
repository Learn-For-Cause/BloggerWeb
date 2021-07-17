import { Row, Col, Container, Form } from "react-bootstrap";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import React, { useState } from "react";
import Image from "next/image";
import { signOut } from "next-auth/client";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: {
    currentTarget: React.SetStateAction<HTMLElement>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Container className="appbar" fluid>
        <Row className="justify-content-between align-items-center">
          <Col className="brand align-items-center" sm={4}>
            <h3>Web Blogger</h3>
          </Col>
          <Col sm={4}>
            <Row className="justify-content-end align-items-center">
              <Col className="align-items-center" sm={7}>
                <Form.Control placeholder="Search blogs..." />
              </Col>
              <Col className="align-items-center" sm={2}>
                <Image
                  onClick={handleClick}
                  width={49}
                  height={49}
                  src="/avatar.png"
                  alt=""
                />
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      signOut();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navigation;
