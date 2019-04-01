import React, { Component }from "react"

import TextField from "../components/TextField"

class TaskForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskName: "",
      priority: "",
      deadline: ""
    }

    this.handleTaskNameChange = this.handleTaskNameChange.bind(this)
    this.handlePriorityChange = this.handlePriorityChange.bind(this)
    this.handleDeadlineChange = this.handleDeadlineChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleTaskNameChange(event){
    let inputValue = event.target.value
    this.setState({ taskName: inputValue })
  }

  handlePriorityChange(event){
    let inputValue = event.target.value
    this.setState({ priority: inputValue })
  }

  handleDeadlineChange(event){
    let inputValue = event.target.value
    this.setState({ deadline: inputValue })
  }

  handleFormSubmit(event){
    event.preventDefault()

    let newTaskInfo = {
      taskName: this.state.taskName,
      priority: this.state.priority,
      deadline: this.state.deadline
    }

    this.props.trackNewTask(newTaskInfo)
  }

  render(){

    return(
      <div className="form">
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            labelName="Task Name"
            handleChangeMethod={this.handleTaskNameChange}
            content={this.state.taskName}
          />

          <TextField
            labelName="Priority"
            handleChangeMethod={this.handlePriorityChange}
            content={this.state.priority}
          />

          <TextField
            labelName="Deadline"
            handleChangeMethod={this.handleDeadlineChange}
            content={this.state.deadline}
          />

          <input type="submit" value="Submit New Task"/>
        </form>
      </div>
    )
  }
}

export default TaskForm
