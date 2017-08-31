import React from "react";
// import RedditListItem from "./reddit_list_item";
import "./reddit_list.css"
import RedditColumnItem from "./reddit_column_item"

const RedditList = props => {
  const redditItems = props.redditPosts.map(redditPost => {
    // return <RedditListItem key={redditPost.id} redditPost={redditPost} />
    return <RedditColumnItem key={redditPost.id} redditPost={redditPost} />
  });

  return (
    <div>
      <ul className="col-md-4">{redditItems}</ul>
    </div>
  );
};

export default RedditList;