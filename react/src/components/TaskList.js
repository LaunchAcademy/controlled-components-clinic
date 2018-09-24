import React from "react"

const TaskList = (props) => {

  let taskElements = props.tasks.map((task) => {
    return(
      <li key={task.name}>
        {task.name}
      </li>
    )
  })

  return(
    <div className="list">
      {taskElements}
    </div>
  )
}


export default TaskList
