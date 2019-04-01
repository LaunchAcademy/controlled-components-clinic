import React from "react"

const TextField = (props) => {

  return(
    <div>
      <label>{props.labelName}:</label>
      <input
        type="text"
        onChange={props.handleChangeMethod}
        value={props.content}
      />
    </div>
  )
}

export default TextField
