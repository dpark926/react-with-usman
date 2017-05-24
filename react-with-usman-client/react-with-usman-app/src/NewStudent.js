import React from 'react'

class NewStudent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      dob: ""
    }
  }

  nameInputChanged(event) {
    console.log(event.target)
    this.setState({
      name: event.target.value
    })
  }

  dobInputChanged(event) {
    console.log(event.target.value)
    this.setState({
      dob: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Add New Students Here</h1>
        <input type="text" placeholder="Student Name" onChange={this.nameInputChanged.bind(this)}/><br/>
        <input type="text" placeholder="Put DOB in quotes '01/01/2017'" onChange={this.dobInputChanged.bind(this)}/><br/><br/>
        <button onClick={this.props.studentCreateButton(this.state.name, this.state}>Create Student</button>
      </div>
    )
  }
}

export default NewStudent
