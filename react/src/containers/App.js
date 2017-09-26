import React, { Component } from 'react';
import TaskList from '../components/task_list'
import TaskForm from '../components/task_form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    let that = this
    fetch('/api/v1/tasks')
      .then(response => {
        return response.json()
      })
      .then(json => {
        if(json.tasks){
          this.setState({
            tasks: json.tasks
          })
        }
      })
    this.setState({
      taskDescription: '',
      submissionError: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if(!this.state.taskDescription) {
      this.setState({
        submissionError: 'Please specify a description'
      })
    }
    else {
      fetch('/api/v1/tasks', { method: 'post', body:
        JSON.stringify({task: {description: this.state.taskDescription}})})
      this.setState({
        submissionError: '',
        taskDescription: ''
      })
    }
  }

  handleDescriptionChange(e) {
    e.preventDefault()
    this.setState({
      taskDescription: e.target.value
    })
  }
  render() {
    return (
      <div>
        <TaskList tasks={this.state.tasks } />
        <TaskForm taskDescription={this.state.taskDescription }
          submissionError={ this.state.submissionError }
          handleSubmit={ this.handleSubmit }
          handleDescriptionChange={ this.handleDescriptionChange } />
      </div>
    )
  }
}

export default App;
