import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Component } from "react";
import "./index.css";
const name = "Jan";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Click me 👇</button>
        <h1>Count: {this.state.count}</h1>;
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
