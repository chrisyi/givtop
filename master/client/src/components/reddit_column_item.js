import React from "react";
import redditLogo from "./reddit-logo.jpg";
import './reddit_column_item.css'

const RedditColumnItem = ({ redditPost }) => {
  const redditThumbnailUrl = redditPost.thumbnail;

  const redditThumbnailConditional = redditThumbnailUrl => {
    if (redditThumbnailUrl.slice(0, 3) !== "htt") {
      return redditLogo;
    } else {
      return redditThumbnailUrl;
    }
  };

  return (
    <div>
      <div className="card">
      <div className="card-top">
        <img
          className="card-img-top"
          src={redditThumbnailConditional(redditThumbnailUrl)}
          alt="thumbnail"
        />
        </div>
        <div className="card-body">
          <h6 className={"card-title"}>
            <a href={redditPost.url} target="_blank">
              {redditPost.title}
            </a>
          </h6>
        </div>
        <div className="card-footer">
          <small>
            <a href="#" className="btn btn-primary">
              Save
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default RedditColumnItem;
