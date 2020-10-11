import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
  console.log("CounterS - Rendered");

    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.props.onDelete(counter.id)}
            onIncrement={() => this.props.onIncrement(counter)}
            onDecrement={() => this.props.onDecrement(counter)}
          >
            {" "}
            <h4>Counter #{counter.id}</h4>{" "}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
