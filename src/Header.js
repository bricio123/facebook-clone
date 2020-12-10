import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlineIcon from "@material-ui/icons/Subscriptions";
import StoreFrontOutLinedIcon from "@material-ui/icons/Store";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from  "@material-ui/icons/NotificationsActive"
import ExpandMoreInfo from "@material-ui/icons/ExpandMore";
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="logo-facebook"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text " placeholder='Procure no facebook' />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlineIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StoreFrontOutLinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Fabricio Sousa</h4>
        </div>
        <IconButton>
            <AddIcon/>
        </IconButton>
        <IconButton>
            <ForumIcon/>
        </IconButton>
        <IconButton>
            <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
            <ExpandMoreInfo/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
