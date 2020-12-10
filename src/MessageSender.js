import React, { useState } from "react";

import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoIcon from "@material-ui/icons/Photo";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import "./MessageSender.css";

function MessageSender() {
  const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder="o que está passando em sua mente?"
          ></input>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="messageSender__input"
            placeholder="imagem URL opcional"
          ></input>
          <button onClick={handleSubmit}>enviar</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live</h3>
        </div>
        <div className="messageSender__option">
          <PhotoIcon style={{ color: "green" }} />
          <h3>foto/Video</h3>
        </div>
        <div className="messageSender__option">
          <EmojiEmotionsIcon style={{ color: "yellow" }} />
          <h3>Reações/Atividades</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
