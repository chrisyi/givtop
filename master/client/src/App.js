import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/search_bar";
// import YTSearch from "youtube-search";
// import ImgurAPI from "./components/imgur_api"
import RedditList from "./components/reddit_list";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redditPosts: [],
      selectedRedditPost: null
    };

    this.redditTerm = "developer";

    //this.redditUrlRoot = 

    // this.redditSearch("developer")
  }

  componentDidMount () {
    this.redditSearch()
}

redditSearch () {
    axios.get(`https://www.reddit.com/search.json?q=title%3A${this
    .redditTerm}&limit=12&t=week&restrict_sr=true&sort=top`)
    .then(res => {
        const redditPosts = res.data.data.children.map(obj => obj.data);
        this.setState({
          redditPosts: redditPosts,
          selectedRedditPost: redditPosts[0]
        })
        console.log(this.state.redditPosts);
        })
    .catch(err => {
        console.log(err)
  });
}

  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <SearchBar
          onRedditSearchTermChange={term => (this.redditTerm = term)}
        />
        <RedditList redditPosts={this.state.redditPosts} />
      </div>
    );
  }
}

export default App;

// Youtube API
// const API_KEY = "AIzaSyBbcx_owAq66fzSPpBtWqBFWR55EsdUY2E";
// const currentDate = new Date(Date.now()).toISOString();
// const dateToGoogle = () => {
//   return currentDate.substring(0, currentDate.indexOf("T")) + "T05:00:00Z";
// };
// const YTOptions = {
//   maxResults: 5,
//   key: API_KEY,
//   order: "viewCount",
//   publishedAfter: dateToGoogle(),
//   safeSearch: "moderate",
//   type: "video"
// };
// YTSearch("music", YTOptions, (err, results) => {
//   if (err) return console.log(err);
//   console.log(results);
// });
//  end Youtube API
