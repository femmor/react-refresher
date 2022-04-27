import { Component } from 'react';
import axios from 'axios';
import Button from '../Button';
import { UserApiData, UserProps, UserState } from './interface';
import "./style.css";
import { hasUserAlreadyFetched } from './utils';

class index extends Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      currentUserId: 1,
      users: []
    }
  }

  fetchUser = async () => {
    const {currentUserId, users} = this.state;
    const response = await axios.get(`https://reqres.in/api/users/${currentUserId}`);
    const { data } = response.data as UserApiData;
    this.setState({
      users: [...users, data]
    })
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps: UserProps, prevState: UserState) {
    const { currentUserId, users } = this.state;
    if (prevState.currentUserId !== this.state.currentUserId && !hasUserAlreadyFetched(users, currentUserId)) {
      this.fetchUser();
    }
  }

  addUser = () => {
    const {currentUserId} = this.state;
    currentUserId < 10 && this.setState({
      currentUserId: currentUserId + 1
    })
  }

  removeUser = () => {
    const {currentUserId} = this.state;
    currentUserId > 1 && this.setState({
      currentUserId: currentUserId - 1
    })
  }

  renderUsers = () => {
    const {users, currentUserId} = this.state;
    return users.filter(user => user.id <= currentUserId).map(item => {
      const { id, avatar, first_name, last_name, email } = item
      return (
        <div key={id} className="user-container">
          <div className="user-item">
            <img src={avatar} alt={first_name} className="user-avatar" />
            <div className="user-info">
              <h3>{first_name} {last_name}</h3>
            </div>
          </div>
          <div className="user-email">
            <p>{email}</p>
          </div>
        </div>
      )
    })
  }


  render() {
    const { currentUserId } = this.state;

    return (
      <div className="user-manager">
        <h1>User Manager</h1>
        {this.renderUsers()}
        <h3>Number of Users: {currentUserId}</h3>
        <div className="action-buttons">
          <Button type="primary" onClick={this.addUser}>Add User</Button>
          <Button type="danger" onClick={this.removeUser}>Remove User</Button>
        </div>
      </div>
    );
  }
}


export default index;