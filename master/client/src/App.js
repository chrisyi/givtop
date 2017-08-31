import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/search_bar";
// import YTSearch from "youtube-search";
// import ImgurAPI from "./components/imgur_api"
import RedditAPI from "./components/reddit-api-search";
import RedditList from "./components/reddit_list"

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <SearchBar />
        <RedditList />
        <RedditAPI redditQuery={"cat"} />
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