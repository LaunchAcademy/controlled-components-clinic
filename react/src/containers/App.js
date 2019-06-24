import React, { Component } from 'react';

import TaskList from "./TaskList"
import TaskFormContainer from "./TaskFormContainer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
      // This will eventually be an array of objects e.g. {taskName: sing cottlestone pie}
    }
    this.addNewTask = this.addNewTask.bind(this)
  }

    componentDidMount(){
      fetch('/api/v1/tasks')
      .then(response => {
        return response.json()
      })
      .then((tasksJson) => {
        // debugger
        this.setState({ tasks: tasksJson.tasks })

      })
    }

  addNewTask(newTaskObject){
    // let oldTasks = this.state.tasks
    // let newTasks = oldTasks.concat(newTaskObject)
    //
    // this.setState(tasks: newTasks)
    fetch("/api/v1/tasks", {
      method: "POST",
      body: JSON.stringify(newTaskObject)
    })
    .then((response) => {
      return response.json()
    })
    .then((newTaskFromBackend) => {
      debugger
      this.setState({ tasks: this.state.tasks.concat(newTaskFromBackend) })
    })


    // this.setState({ tasks: this.state.tasks.concat(newTaskObject) })
  }

  render() {
    return (
      <div>
        <h1>
          Pooh Tasks List
        </h1>

        <TaskFormContainer
          addNewTask={this.addNewTask}
        />

        <TaskList
          tasks={this.state.tasks}
        />

      </div>
    )
  }
}

export default App;
