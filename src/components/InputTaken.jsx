import React from 'react'

const InputTaken = ({ inputFunc, value }) => {
  return (
    <input
      onChange={inputFunc}
      className="block max-w-full shadow mb-2 p-5"
      type="text"
      value={value}
      name="text-field"
      placeholder="text here ...."
    ></input>
  )
}

export default InputTaken
