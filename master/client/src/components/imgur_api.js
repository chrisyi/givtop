

// import React, { Component } from "react";
// import axios from "axios";



// class ImgurAPI extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       imgurPosts: []
//     };

//     const imgurRootUrl = `https://api.imgur.com/3/gallery/search/top/day/?q=${this.props.imgurQuery}`

//     const imgurApiKey = "c901424d4aed893";
//   }

//   // componentDidMount() {
//   //     axios.get("https://api.imgur.com/3/gallery/search/top/day/?q=" + this.props.imgurQuery)
//   //     .then(res => this.setState({ imgurPosts: res.data.data }))
//   // }

// axios({
//     method: 'get',
//     url: `https://api.imgur.com/3/gallery/search/top/day/?q=${this.props.imgurQuery}`,
//     headers: {"Authorization"}
// })

//   render() {
//     return (
//       <div>
//           {this.state.imgurPosts}
//       </div>
//     );
//   }
// }

// export default ImgurAPI;
