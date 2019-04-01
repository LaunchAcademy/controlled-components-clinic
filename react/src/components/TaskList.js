import React from "react"

import TaskTile from "./TaskTile"

const TaskList = (props) => {

  const taskTiles = props.tasks.map((task) => {

    return(
      <TaskTile
        key={task.taskName}
        taskName={task.taskName}
        priority={task.priority}
        deadline={task.deadline}
      />
    )
  })

  return(
    <ul className="list">
      {taskTiles}
    </ul>
  )
}

export default TaskList
