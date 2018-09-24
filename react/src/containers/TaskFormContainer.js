import React, { Component }  from "react"

import TaskField from "../components/TaskField"

class TaskFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({name: event.target.value })
  }

  handleClearForm(event){
    event.preventDefault()
    this.setState({
      name: ""
    })
  }

  handleFormSubmit(event){
    event.preventDefault()

    let poohPayload = {
      name: this.state.name
    }

    this.props.addNewTask(poohPayload)
  }


  render(){

    return(
      <div className="form">

        <form onSubmit={this.handleFormSubmit}>

          <TaskField
            name={this.state.name}
            handleNameChange={this.handleNameChange}
          />

          <input type="submit"/>
          <br/>
          <button
            onClick={this.handleClearForm}
            className="button">Clear
          </button>

        </form>
      </div>
    )
  }
}


export default TaskFormContainer
