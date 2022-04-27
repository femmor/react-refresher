import React, { Component } from 'react';
import Button from '../Button';
import { CounterProps, CounterState } from "./interface"
import axios from "axios";
import "./style.css"

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)

    this.state = {
      count: 0,
      users: []
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

  static getDerivedStateFromProps(nextProps: CounterProps, prevState: CounterState) {

    return null
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users")
      .then(res => {

        const data = res.data 
        const users = data.data.map((user: any) => user.first_name)
        this.setState({
          users
        })
      })


  }
    
  render() {
      const {ownerName} = this.props
      const {count, users} = this.state

      return (
        <div className="count-manager">
          <h1>Counter Manager</h1>
          <h3>Owner: {ownerName}</h3>
          <h3>Count: {count}</h3>
          <h3>Users:</h3>
          <ul>
            {users.map((user: string) => <li key={user}>{user}</li>)}
          </ul>
          <div className="action-buttons">
            <Button onClick={this.handleIncrement} type="success">Increment</Button>
            <Button onClick={this.handleDecrement} type="danger">Decrement</Button>
          </div>
        </div>
      );
  }
}
export default Counter;