import React from "react";

import "./Sidebar.css";

import SidebarRow from './SidebarRow';

import LocalHospitalIcon from  "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from  "@material-ui/icons/EmojiFlags";
import PeopleIcon from  "@material-ui/icons/People";
import ChatIcon from   "@material-ui/icons/Chat";
import StorefrontIcon from  "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import {ExpandLessOutlined, ExpandMoreOutlined} from "@material-ui/icons";
import User from "@testing-library/user-event";

function Sidebar() {
  return( 
  <div>
      <SidebarRow src="https://avatars0.githubusercontent.com/u/41765675?s=460&u=3db6137220da49ebbc0e53f95f0bf4d3ffa566b9&v=4"
       title="Fabricio de sousa"/>
      <SidebarRow Icon={LocalHospitalIcon}
      title="COVID-19 Information Centera"/>
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={ChatIcon} title='Messenger'/>
      <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
      <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
      <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
  </div>
  )
}

export default Sidebar;
