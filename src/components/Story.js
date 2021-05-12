import React from "react";
import moment from "moment";

const Story = ({ story }) => {
  const { title, url, points, author, created_at, num_comments } = story;
  return (
    <div className="result">
      <span className="title">{title}</span>
      <span className="url">
        <a target="_blank" rel="noopener noreferrer" href={url}>
          ({url})
        </a>
      </span>
      <br />
      <span className="span">{points} points</span>
      <span className="span">|</span>
      <span className="span">{author}</span>
      <span className="span">|</span>
      <span className="span">{moment(created_at).fromNow()}</span>
      <span className="span">|</span>
      <span className="span">{num_comments} comments</span>
    </div>
  );
};

export default Story;
