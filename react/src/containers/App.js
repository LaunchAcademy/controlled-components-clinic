import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {task: "Sing Cottlestone Pie", who: "Winnie the Pooh"},
        {task: "Hug Eeyore", who: "Piglet"}
      ]
    }
  }

  componentDidMount(){
    console.log("App.js has mounted!")
  }

  render() {
    console.log("App.js has rendered!")
    return (
      <div>
        <h1>Pooh Tasks List</h1>
      </div>
    )
  }
}

export default App;
