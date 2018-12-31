import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {id: 1, name: "Sing Cottlestone Pie", assignee: "Winnie the Pooh"},
        {id: 2, name: "Hug Eeyore", assignee: "Piglet"}
      ]
    }
  }

  componentDidMount(){
    console.log("App.js has mounted!")
  }

  render() {
    console.log("App.js has rendered!")

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
        {taskList}
      </div>
    )
  }
}

export default App;
