import React from "react";
import "./reddit_column_item.css"

const RedditColumnItem = ({ redditPost }) => {
  const redditThumbnailUrl = redditPost.thumbnail;
  return (
    <div>
      <div className="card-columns">
        <div className="card">
          <img className="card-img-top" src={redditThumbnailUrl} alt="" />
          <div className="card-body">
            <h4 className={"card-title"}>{redditPost.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedditColumnItem;
