import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrease() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h3> Counter value is: {this.state.counter}</h3>
        <button onClick={() => this.increment()}>Zgolemi vrednost</button>
        <button onClick={() => this.decrease()}>Namali vrednost</button>
      </div>
    );
  }
}
export default Counter;
