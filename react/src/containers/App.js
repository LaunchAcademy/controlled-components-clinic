import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
      // This will eventually be an array of objects e.g. {taskName: sing cottlestone pie}
    }
  }

  componentDidMount(){
    // For if we wish to do some fetching.
    // fetch('/SOME-ENDPOINT')
    // .then(response => {
    //   return response.json()
    // })
    // .then(json => {
    //   ...
    // })
  }

  render() {
    return (
      <div>
        <h1>Pooh Tasks List</h1>
      </div>
    )
  }
}

export default App;
