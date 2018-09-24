import React, { Component } from 'react';

import TaskList from "../components/TaskList"
import TaskFormContainer from "./TaskFormContainer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {name: "Hug Eeyore"},
        {name: "Giggle with Piglet"}
      ]
    }
    this.addNewTask = this.addNewTask.bind(this)
  }

  componentDidMount(){
    // For if we wish to do some fetching.
    fetch('/api/v1/tasks')
    .then(response => {
      return response.json()
    })
    .then(json => {
      debugger;
      this.setState({
        tasks: json.tasks
      })
    })
  }

  addNewTask(poohPayload){
    let oldTasks = this.state.tasks
    this.setState({tasks: oldTasks.concat(poohPayload) })

    // As an alternative, post to the backend, and then on the .then of the fetch POST, take the newly created tasks and add it to state
  }

  render() {

    return (
      <div className="app">
        <h3>Pooh Tasks List</h3>

        <TaskList
          tasks={this.state.tasks}
        />

        <TaskFormContainer
          addNewTask={this.addNewTask}
        />

      </div>
    )
  }
}

export default App;
