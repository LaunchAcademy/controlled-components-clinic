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

  addNewTask(newTaskObject){
    // let oldTasks = this.state.tasks
    // let newTasks = oldTasks.concat(newTaskObject)
    //
    // this.setState(tasks: newTasks)

    this.setState({ tasks: this.state.tasks.concat(newTaskObject) })
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
