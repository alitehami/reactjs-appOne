import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter item - prevProps=" + prevProps);
    console.log("Counter item - prevState=" + prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call to fetch new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter item - componentWillUnmount");
  }

  render() {
    console.log("Counter item - Rendered");

    return (
      <React.Fragment>
        {this.props.children}
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>

        <button
          onClick={this.props.onIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>

        <button
          onClick={this.props.onDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter;
    return count.value === 0 ? "Zero!" : count.value;
  }
}

export default Counter;
