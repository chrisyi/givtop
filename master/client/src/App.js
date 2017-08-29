import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-search";
import RedditAPI from "./components/reddit_api";

// Youtube API
const API_KEY = "AIzaSyBbcx_owAq66fzSPpBtWqBFWR55EsdUY2E";
const currentDate = new Date(Date.now()).toISOString();
const dateToGoogle = () => {
  return currentDate.substring(0, currentDate.indexOf("T")) + "T05:00:00Z";
};
const YTOptions = {
  maxResults: 5,
  key: API_KEY,
  order: "viewCount",
  publishedAfter: dateToGoogle(),
  safeSearch: "moderate",
  type: "video"
};
YTSearch("music", YTOptions, (err, results) => {
  console.log(YTOptions);
  if (err) return console.log(err);
  console.log(results);
});
//  end Youtube API

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <SearchBar />
        <RedditAPI subreddit={"trump"} />
      </div>
    );
  }
}

export default App;
