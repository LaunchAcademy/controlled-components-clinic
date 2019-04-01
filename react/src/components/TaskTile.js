import React from "react"

const TaskTile = (props) => {

  return(
    <li className="item">
      Task: {props.taskName} | Priority: {props.priority} | Deadline: {props.deadline}
    </li>
  )
}

export default TaskTile
