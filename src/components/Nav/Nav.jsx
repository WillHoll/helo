import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
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
          <button>Logout</button>
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

export default connect(mapStateToProps)(Nav);