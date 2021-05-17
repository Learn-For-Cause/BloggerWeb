import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { profileOptions } from "./constants/ProfileOptions";
import { useAppBarStyles } from "../styles/AppbarStyles";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const classes = useAppBarStyles();
  const [isVisible, setVisiblity] = useState(false);
  const [searchData, setSearchData] = useState("");
  const ExpandForm = () => setVisiblity(true);
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchData(event.target.value);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] =
    React.useState<null | HTMLElement>(null);

  const handleBellClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAvatarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  return (
    <>
      <div className={classes.appbar}>
        <div className={classes.left}>B L O G</div>
        <div className={classes.right}>
          {!isVisible ? (
            <div onClick={ExpandForm} className={classes.icons}>
              <SearchIcon />
            </div>
          ) : (
            <div className={classes.expand}>
              <input
                className={classes.input}
                style={{ backgroundColor: "white", width: "20vw" }}
                type="text"
                onChange={handleFormChange}
                placeholder="Search"
              />
            </div>
          )}
          <Link href="/bookmarks">
            <a>
              <div className={classes.icons}>
                <TurnedInNotIcon />
              </div>
            </a>
          </Link>
          <div
            aria-controls="bell-menu"
            aria-haspopup="true"
            onClick={handleBellClick}
            className={classes.icons}
          >
            <NotificationsNoneIcon />
          </div>

          <Menu
            id="bell-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>All</MenuItem>
            <MenuItem onClick={handleClose}>Responses</MenuItem>
          </Menu>

          <Avatar
            onClick={handleAvatarClick}
            aria-controls="profile-menu"
            aria-haspopup="true"
            className={classes.icons}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTWtZjV_YXCgbJr1SNLAA_Px-nz8eacMrlw&usqp=CAU"
          />
          <Menu
            id="profile-menu"
            anchorEl={profileAnchor}
            keepMounted
            open={Boolean(profileAnchor)}
            onClose={handleProfileClose}
          >
            {profileOptions.map((data, index) => {
              return (
                <MenuItem key={index} onClick={handleProfileClose}>
                  {data["list"]}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navigation;
