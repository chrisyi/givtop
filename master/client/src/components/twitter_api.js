import React, { Component } from "react";
import axios from "axios";

class TwitterAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            twitterPosts: []
        };
    }
}

componentDidMount() {
    axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since2017-08-29&result_type=mixed&count=4`)
    .then(res => {
        const 
    })
}
{"statuses":[],"search_metadata":{"completed_in":0.046,"max_id":902908469111640065,"max_id_str":"902908469111640065","query":"cats+until%3AT1","refresh_url":"?since_id=902908469111640065&q=cats%20until%3AT1&include_entities=1","count":15,"since_id":0,"since_id_str":"0"}}