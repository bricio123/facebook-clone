import React from "react";

import "./Feed.css";

import Post from "./Post";

import MessageSender from "./MessageSender";

import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://avatars0.githubusercontent.com/u/41765675?s=460&u=3db6137220da49ebbc0e53f95f0bf4d3ffa566b9&v=4"
        message="Este post e meu!"
        timestamp="ha ha ha ha ha "
        username="Fabricio de Sousa"
        image="https://www.lovethispic.com/uploaded_images/13568-Whatever.jpg"
      />
      <Post
        profilePic="https://avatars0.githubusercontent.com/u/41765675?s=460&u=3db6137220da49ebbc0e53f95f0bf4d3ffa566b9&v=4"
        message="Este post e meu!"
        timestamp="ha ha ha ha ha "
        username="Fabricio de Sousa"
        image="https://www.lovethispic.com/uploaded_images/13568-Whatever.jpg"
      />
    </div>
  );
}

export default Feed;
