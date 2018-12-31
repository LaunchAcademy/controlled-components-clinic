import React from 'react'

const InputField = props => {

  return(
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        name={props.name}
        onChange={props.handleChange}
        value={props.value}
      />
    </div>
  )
}

export default InputField
