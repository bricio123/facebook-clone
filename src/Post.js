import React from "react";
import "./Post.css";

import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SendIcon from "@material-ui/icons/Send";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <div style={{display:"flex", alignItems:"center"}}>
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>timess</p>
          </div>
        </div>
        <div className="post__bottom"></div>
        <p>{message}</p>

        <div className="post__image">
          <img src={image} alt="photo_back" />
        </div>
        <div className="post__options">
          <div className="post__option">
            <ThumbUpIcon />
            <p>Curtir</p>
          </div>
          <div className="post__option">
            <ChatBubbleIcon />
            <p>Comentar</p>
          </div>
          <div className="post__option">
            <SendIcon />
            <p>compartilhar</p>
          </div>
          <div className="post__option">
            <AccountCircleIcon />
            <ExpandMoreIcon />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
