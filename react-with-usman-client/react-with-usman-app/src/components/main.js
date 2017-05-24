import React from 'react'
import logo from '../logo.svg';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

function Main() {
  return (<div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <Link to='/'>Home</Link>
      <Link to='/students'> Student List</Link>
      <Link to="/students/new"> Add a new Student ></Link>
    </div>
  </div>
  )
}

export default Main
