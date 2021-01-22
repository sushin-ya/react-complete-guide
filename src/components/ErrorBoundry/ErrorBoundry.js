import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
    errorsMessage: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorsMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorsMessage}</h1>;
    } else {
      this.props.children;
    }
  }
}

export default ErrorBoundry;