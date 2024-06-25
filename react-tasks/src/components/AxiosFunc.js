import React, { Component } from "react";
import axios from "axios";

export default class AxiosFunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ people: res.data });
    })
  }
  render() {
    return <div>{console.log(this.state.people)}</div>;
    
  }
}
