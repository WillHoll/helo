import React from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Auth/>
      <Dashboard/>
      <Form/>
      <Post/>
      <Nav/>
    </div>
  );
}

export default App;
