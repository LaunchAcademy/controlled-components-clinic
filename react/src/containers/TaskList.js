import React from "react"

import TaskTile from "../components/TaskTile"

const TaskList = (props) => {
  let taskTileComponents = props.tasks.map((task) => {
    return(
      <TaskTile
        key={task.taskName}
        taskInfo={task}
      />
    )
  })

  return(
    <div className="list">
      <h1> Task List </h1>

      {taskTileComponents}

    </div>
  )
}


export default TaskList
