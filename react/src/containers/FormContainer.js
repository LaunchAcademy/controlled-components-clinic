import React, {Component} from 'react'
import InputField from '../components/InputField'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      assignee: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAssigneeChange = this.handleAssigneeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleAssigneeChange(event) {
    this.setState({assignee: event.target.value})
  }

  handleClear() {
    this.setState({name: "", assignee: ""})
  }

  handleSubmit(event) {
    event.preventDefault()
    let payload = {
      name: this.state.name,
      assignee: this.state.assignee
    }
    this.props.addTask(payload)
    this.handleClear()
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="form">
        <InputField
          label="Task Name"
          name="name"
          handleChange={this.handleNameChange}
          value={this.state.name}
        />
        <InputField
          label="Who Should Do It"
          name="assignee"
          handleChange={this.handleAssigneeChange}
          value={this.state.assignee}
        />
        <input type="submit"/>
      </form>
    )
  }

}

export default FormContainer
