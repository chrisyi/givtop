// import React, { Component } from "react";
// import axios from "axios";

// class RedditAPI extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       redditPosts: []
//     };

//     this.redditUrlRoot = `http://www.reddit.com/search.json?q=title%3A${this
//       .props.redditQuery}&limit=6&t=day&restrict_sr=true&sort=top`;
//   }

//   componentDidMount() {
//     axios.get(this.redditUrlRoot).then(res => {
//       console.log(res);
//       const redditPosts = res.data.data.children.map(obj => obj.data);
//       this.setState({ redditPosts });
//       console.log(this.state.redditPosts);
//     });
//   }

//   //   <ul>
//   //   {this.state.redditPosts.map(post =>
//   //     <li key={post.id}>
//   //       {post.title}
//   //     </li>
//   //   )}
//   // </ul>

//   render() {
//     return <div />;
//   }
// }

// export default RedditAPI;
