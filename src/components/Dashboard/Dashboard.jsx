import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
      userposts: true
    }
  }

  componentDidMount() {
    this.theGetter()
  }

  checkBoxHandle() {
    this.setState((prevState) => {
      return { userposts: !prevState.userposts }
    })
  }
  resetGetter() {
    this.setState({
      search: ''
    })
    this.theGetter()
  }

  theGetter() {
    const {id} = this.props
    const {userposts, search} = this.state
    axios
      .get(`/api/posts/${id}?userposts=${userposts}&search=%${search}%`)
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
  }

  render() {
    console.log(this.state.posts)
    const listView = this.state.posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <h2>{post.username}</h2>
        <img src={post.profile_pic} alt="author" />
      </div>
    ))
    return (
      <div>
        <input onChange={e => this.setState({ search: e.target.value })} value={this.state.search} type="text" />
        <button onClick={() => this.theGetter()}>Search</button>
        <button onClick={() => this.resetGetter()}>Reset</button>
        <input onChange={() => this.checkBoxHandle()} type="checkbox" id='My Posts' name="Show posts" value='posts' defaultChecked />
        <label htmlFor="My Posts">My Posts</label>
        {listView}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const {id} = reduxState
  return {
    id
  }
}

export default connect(mapStateToProps)(Dashboard);