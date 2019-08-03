import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";

//Data for props
const testTweet = {
  message: "Something about cats.",
  gravatar: "fe69ac45af41becd3a523f2b36d2bd08",
  author: { handle: "catperson", name: "IAMA Cat Person" },
  likes: 2,
  retweets: 10,
  timestamp: "2016-07-30 21: 24: 37"
};

//Avatar Component
function Avatar({ hash }) {
  let url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="an avatar of Bassie Bangura" />;
}

//Message Component
function Message({ text }) {
  return <div className="message">{text}</div>;
}
//NameWithHandle
function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

//Time Component
const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className=" time">{timeString}</span>;
};

//Helper function
function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

//ReplyButton Component
const ReplyButton = ({ count }) => <i className=" fa fa-reply reply-button" />;

//RetweetButton Component.
const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className=" fa fa-retweet retweet-button" />
      {getRetweetCount(count)}
    </span>
  );
};

//LikeButton Component
const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className=" fa fa-heart like-button" />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

//MoreOptionsButton
const MoreOptionsButton = () => (
  <i className=" fa fa-ellipsis-h more-options-button" />
);

//Tweet Component
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));
