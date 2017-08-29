import React, { Component } from "react";
import axios from "axios";

class RedditAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redditPosts: []
    };
  }

  componentDidMount() {
    axios
    //   .get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .get(`http://www.reddit.com/search.json?q=title%3A${this.props.subreddit}&limit=5&t=day&restrict_sr=true&sort=top`)
      .then(res => {
        const redditPosts = res.data.data.children.map(obj => obj.data);
        this.setState({ redditPosts });
        console.log(this.state.redditPosts);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.redditPosts.map(post =>
            <li key={post.id}>
              {post.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default RedditAPI;
