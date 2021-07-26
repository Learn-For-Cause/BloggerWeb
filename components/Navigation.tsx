import { Row, Col, Container, Form } from "react-bootstrap";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/AuthSlice";
import Menu from "@material-ui/core/Menu";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();
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
      <div className="appbar">
        <div className="brand">
          <img className="logo" src="/images/logo.svg" alt="" />
          <p className="title">Web Blogger</p>
        </div>
        <div className="search">
          <Form.Control className="my-form" placeholder="Search..." />
          <Avatar
            onClick={handleClick}
            className="avatar"
            alt="Cindy Baker"
            src="/images/profile.png"
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleMyAccountRedirect}>My Account</MenuItem>
            <MenuItem onClick={handleSettingsRedirect}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navigation;
