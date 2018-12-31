import React, { Component } from 'react';
import FormContainer from './FormContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this)
  }

  addTask(payload) {
    let newId = this.state.tasks.length + 1
    payload["id"] = newId

    // this.setState({tasks: this.state.tasks.concat(payload)})

    // Above is w/o fetch, below is with fetch. Server happens to expect data
    // in a slightly different format, hence formattedPayload

    let formattedPayload = {task: payload}
    // Put a debugger here to make sure that whatever you're putting into
    // JSON.stringify
    fetch('/api/v1/tasks', {
        method: 'POST',
        body: JSON.stringify(formattedPayload)
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        // Put a debugger here to see if you're getting the expected data back from the server
        // and that it's structured the way you expect
        this.setState({tasks: body.tasks})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    // Put a debugger or console.log here to make sure you're making it this far!
    fetch('/api/v1/tasks')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
           error = new Error(errorMessage);
          throw(error);
        }
      })
     .then(response => response.json())
     .then(body => {
       // Put a debugger here to see if you're getting the expected data back from the server
       // and that it's structured the way you expect
        this.setState({tasks: body.tasks})
      })
     .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let taskList = this.state.tasks.map(task => {
      return(
        <li key={task.id}>
          {task.name}, <i>{task.assignee}</i>
        </li>
      )
    })

    return (
      <div className="column row app">
        <h1>Hundred Acre Woods Task List</h1>
        <ul>
          {taskList}
        </ul>
        <br/>
        <FormContainer
          addTask={this.addTask}
        />
      </div>
    )
  }
}

export default App;
