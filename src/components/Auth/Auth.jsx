import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from './../../ducks/reducer';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  };

  handleChange(key, input) {
    this.setState({
      [key]: input
    });
  };

  loginUser(body) {
    axios
      .post('/api/auth/login', body)
      .then(res => {
        const { id, username, profile_pic } = res.data.user
        this.props.updateUser(id, username, profile_pic)
        this.props.history.push('/dashboard')
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  }

  addUser(body) {
    axios
      .post('/api/auth/register', body)
      .then(res => {
        const { id, username, profile_pic } = res.data.user
        this.props.updateUser(id, username, profile_pic)
        this.props.history.push('/dashboard')
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  };

  render() {
    const { password, username } = this.state
    return (
      <div>
        <input onChange={e => this.handleChange('username', e.target.value)} value={username} className='username' type="text" />
        <input onChange={e => this.handleChange('password', e.target.value)} value={password} className='password' type="text" />
        <button onClick={() => this.loginUser(this.state)}>Login</button>
        <button onClick={() => this.addUser(this.state)}>Register</button>
      </div>
    );
  }
}

export default connect(null, { updateUser })(Auth);