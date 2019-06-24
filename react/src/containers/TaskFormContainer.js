import React from "react"

class TaskFormContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      taskName: "",
      priority: ""
    }

    this.handleTaskNameChange = this.handleTaskNameChange.bind(this)
    this.handlePriorityChange = this.handlePriorityChange.bind(this)
    this.handleTaskFormSubmit = this.handleTaskFormSubmit.bind(this)
    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleTaskNameChange(event){
    this.setState({ taskName: event.target.value})
  }

  handlePriorityChange(event){
    this.setState({ priority: event.target.value})
  }

  // handleInputChange(event){
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  handleTaskFormSubmit(event){
    event.preventDefault()

    let newTaskObject = {
      taskName: this.state.taskName,
      priority: this.state.priority
    }

    this.props.addNewTask(newTaskObject)
  }

  render(){

    return(
      <div className="form">

        <form onSubmit={this.handleTaskFormSubmit}>
          <label> Name: </label>
          <input
            type="text"
            name="taskName"
            value={this.state.taskName}
            onChange={this.handleTaskNameChange}
          />

          <label> Priority: </label>
          <input
            type="text"
            name="priority"
            value={this.state.priority}
            onChange={this.handlePriorityChange}
          />

          <input type="submit"/>

        </form>
      </div>
    )
  }
}

export default TaskFormContainer
