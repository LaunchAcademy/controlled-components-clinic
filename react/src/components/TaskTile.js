import React from "react"

const TaskTile = (props) => {

  return(
    <div className="item">
      Task: {props.taskInfo.taskName} | Priority: {props.taskInfo.priority}
    </div>
  )
}


export default TaskTile
