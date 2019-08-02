import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Avatar Component
function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/fe69ac45af41becd3a523f2b36d2bd08"
      className="avatar"
      alt="an avatar of Bassie Bangura"
    />
  );
}

//Message Component
function Message() {
  return <div className="message">God has been faithful.</div>;
}
//NameWithHandle
function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Bassie Bangura</span>
      <span className="handle">@programmer4Christ</span>
    </span>
  );
}

//Time Component
const Time = () => <span className=" time"> 3h ago </span>;

//ReplyButton Component
const ReplyButton = () => <i className=" fa fa-reply reply-button" />;

//RetweetButton Component.
const RetweetButton = () => <i className=" fa fa-retweet retweet-button" />;

//LikeButton Component
const LikeButton = () => <i className=" fa fa-heart like-button" />;

//MoreOptionsButton
const MoreOptionsButton = () => (
  <i className=" fa fa-ellipsis-h more-options-button" />
);

//Tweet Component
function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle /><Time />
        <Message />
        <div className = "buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet />, document.getElementById("root"));
