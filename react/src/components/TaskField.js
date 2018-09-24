import React from "react"

const TaskField = (props) => {

  return(
    <input onChange={props.handleNameChange}
      type="text"
      value={props.name}
    />
  )
}


export default TaskField
