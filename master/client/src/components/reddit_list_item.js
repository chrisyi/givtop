import React from "react";

const RedditListItem = ({ redditPost }) => {
  // const post = props.redditPost === {redditPost};
  const thumbnailUrl = redditPost.thumbnail;
  return (
    <div>
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={thumbnailUrl} alt="thumbnail" />
          </div>
          <div className="media-body">
            <div className="media-heading">{redditPost.title}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default RedditListItem;
