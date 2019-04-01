import React, { Component } from 'react';

import TaskList from "../components/TaskList"
import TaskForm from "./TaskForm"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
         // { taskName: "sing cottlestone pie", deadline: "Alwayss....", priority: "High" },
         // { taskName: "Vist Eeyore", deadline: "Yesterday", priority: "Low" },
         // { taskName: "Eat Honey", deadline: "Now", priority: "EXTREME" }
      ]
    }

    this.trackNewTask = this.trackNewTask.bind(this)
  }

  componentDidMount(){
    // For if we wish to do some fetching.
    fetch('/api/v1/tasks')
    .then(response => {
      return response.json()
    })
    .then(body => {
      // debugger;
      this.setState({tasks: body.tasks})
    })
  }

  trackNewTask(newTask){
    this.setState({ tasks: this.state.tasks.concat(newTask) })
  }

  render() {
    return (
      <div className="app">
        <h1>Pooh Tasks List</h1>
        <TaskForm
          trackNewTask={this.trackNewTask}
        />

        <TaskList
          tasks={this.state.tasks}
        />
      </div>
    )
  }
}

export default App;
