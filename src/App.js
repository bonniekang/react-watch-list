import React, { Component } from 'react';
import PropTypes from "prop-types";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 6000)
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "Ready"}
      </div>
    );
  }
}

export default App;
