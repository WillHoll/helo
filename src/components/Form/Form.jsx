import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      content: ''
    };
  };

  stateHandle(key, value) {
    this.setState({
      [key]: value
    })
  }
  
  makeTheThing() {
    axios
      .post(`/api/posts`, this.state)
      .then(() => {
        this.props.history.push('/dashboard')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <input onChange={e => this.stateHandle('title', e.target.value)} type="text"/>
        <img src={this.state.img} alt="preview"/>
        <input onChange={e => this.stateHandle('img', e.target.value)} type="text"/>
        <textarea onChange={e => this.stateHandle('content', e.target.value)} type="text"/>
        <button onClick={() => this.makeTheThing()}>Post</button>
      </div>
    );
  };
};



export default Form;