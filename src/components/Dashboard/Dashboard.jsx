import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
      userposts: true
    }
  }
  checkBoxHandle(e) {
    console.log(e.target.value);
    this.setState((prevState) => {
      return {userposts: !prevState.userposts}
    })
  }
  
  render() {
    const listView = this.state.posts.map(post => (
      <div key={post.id}>
  <h2>{post.title}</h2>
    <h2>{post.author}</h2>
  <img src={post.authorPicture} alt="author picture"/>
      </div>
    ))
    return (
      <div>
        <input onChange={e => this.setState({search: e.target.value})} type="text"/>
        <button>Search</button>
        <button>Reset</button>
        <input onChange={e => this.checkBoxHandle(e)} type="checkbox" id='My Posts' name="Show posts" value='posts' defaultChecked/>
        <label htmlFor="My Posts">My Posts</label>

      </div>
    );
  }
}

export default Dashboard;