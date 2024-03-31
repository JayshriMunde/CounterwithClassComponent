import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  handleDecrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1>Counter App</h1>
        <div className="counter-display">
          <p>Count: {count}</p>
        </div>
        <div className="button-container">
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
