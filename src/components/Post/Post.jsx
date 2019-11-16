import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      content: '',
      username: '',
      profile_pic: ''
    }
  }

  componentDidMount() {
    this.getPost()
  }

  getPost() {
    axios
      .get(`/api/post/${this.props.match.params.postid}`)
      .then(res => {
        console.log(res.data)
        this.setState({...res.data})
      })
  }

  render() {
    const { title, img, content, username, profile_pic } = this.state
    return (
      <div>
        <h1>{title}</h1>
        <img src={profile_pic} alt='author' />
        <div>{username}</div>
        <img src={img} alt={title} />
        <p>{content}</p>
      </div>
    );
  }
}

export default Post;