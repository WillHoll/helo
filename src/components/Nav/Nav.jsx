import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateUser, clearUser } from './../../ducks/reducer';
import axios from 'axios';
import { connect } from 'react-redux';

class Nav extends Component {
  componentDidMount() {
    this.getUserInfo()
  }

  getUserInfo() {
    axios
      .get('/api/auth/me')
      .then(res => {
        const {username, profile_pic} = res.data
        this.props.updateUser(username, profile_pic)
      })
  }

  userLogout() {
    axios.post('/api/auth/logout')
    .then(() => {
      this.props.clearUser();
    });
  };

  render() {
    console.log(this.props)
    return (
      <div className='Nav'>
        <h2>{this.props.username}</h2>
        <img src={this.props.profile_pic} alt="profile_pic" />
        <Link to='/dashboard'>
          <button>Home</button>
        </Link>
        <Link to='/new'>
          <button>New Post</button>
        </Link>
        <Link to='/'>
          <button onClick={() => this.userLogout()}>Logout</button>
        </Link>
      </div>
    );
  };
};

function mapStateToProps(reduxState) {
  const { username, profile_pic } = reduxState
  return {
    username,
    profile_pic
  }
}

export default connect(mapStateToProps, {updateUser, clearUser})(Nav);