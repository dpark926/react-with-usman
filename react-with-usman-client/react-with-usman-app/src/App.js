import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import StudentList from './StudentList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    console.log("FETCHING")
    fetch('http://localhost:3000/v1/api/users')
    .then((response) => response.json())
    .then((jsonResponse) => this.setState({
      users: jsonResponse
    }))
  }

  studentCreateButtonClicked(name, dob) {
    console.log("TEST", name, dob)

    fetch("http://localhost:3000/v1/api/users", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify( {user: {name: name, dob: dob}} )
    }).then((response) => response.json())
    .then((jsonResponse) => this.setState(
      presentState => ({users: [...presentState.users, jsonResponse]})
    ))
  }

  render() {
    return (
      <div>
        <StudentList studentList={this.state.users} studentCreateButton={this.studentCreateButtonClicked.bind(this)}/>
      </div>
    );
  }
}

export default App;
