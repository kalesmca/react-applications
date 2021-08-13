import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import standard_logo from "../assets/images/standard_logo.svg.png";
import "../assets/css/header.css";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import NotificationsNoneRounded from "@material-ui/icons/NotificationsNoneRounded";
import NotificationMenu from "../components/notification";
import ImageAvatars from "../components/avatar";
import img_avatar from "../assets/images/img_avatar.png";
import MenuListComposition from "../components/menu";

export default function HeaderContainer(props) {
  const classes = props.classes;
  return (
    <div>
      <AppBar
        position="fixed"
        color="transparent"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: props.open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div className="header-container">
            <div>
              <img src={standard_logo} className="logo" />
            </div>
            <div className="blk-itm"></div>

            <div className="nav-list">
              <div className="nav-item">
                <SearchOutlined />
              </div>
              <div className="nav-item">
                <NotificationsNoneRounded />
              </div>
              <div className="nav-item">
                <NotificationMenu />
              </div>
              <div className="nav-item profile-menu">
                <ImageAvatars altTxt={"Profile"} imageUrl={img_avatar} />
                <MenuListComposition />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
