import { Row, Col, Container, Form } from "react-bootstrap";
import MenuItem from "@material-ui/core/MenuItem";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/AuthSlice";
import Menu from "@material-ui/core/Menu";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = (event: {
    currentTarget: React.SetStateAction<HTMLElement>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyAccountRedirect = () => router.push("/account");
  const handleSettingsRedirect = () => router.push("/setting");

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    router.push("/login");
    handleClose();
  };

  return (
    <>
      <Container className="appbar" fluid>
        <Row className="justify-content-between align-items-center">
          <Col md={4}>
            <Row className="justify-content-start align-items-center">
              <Col md={2}>
                <img className="logo" src="/images/logo.png" alt="" />
              </Col>
              <Col md={4}>
                <Link href="/home">
                  <p className="brand">W E B X</p>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row className="justify-content-end align-items-center">
              <Col md={7}>
                <Form.Control placeholder="Search..." />
              </Col>
              <Col md={2}>
                <img
                  onClick={handleClick}
                  className="logo"
                  src="/images/profile.png"
                  alt=""
                />
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleMyAccountRedirect}>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleSettingsRedirect}>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
