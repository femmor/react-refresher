import React, { Component } from 'react';
import Button from '../Button';
import { CounterProps, CounterState } from "./interface"
import "./style.css"

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)

    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
    
  render() {
      const {ownerName} = this.props
      const {count} = this.state

      return (
        <div className="count-manager">
          <h1>Counter Manager</h1>
          <h3>Owner: {ownerName}</h3>
          <h3>Count: {count}</h3>
          <div className="action-buttons">
            <Button onClick={this.handleIncrement} type="success">Increment</Button>
            <Button onClick={this.handleDecrement} type="danger">Decrement</Button>
          </div>
        </div>
      );
  }
}
export default Counter;