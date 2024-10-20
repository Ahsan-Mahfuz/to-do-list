import React from 'react'

const Addlist = ({ addItemFunc }) => {
  return (
    <input
      onClick={addItemFunc}
      id="add"
      className="border-2  mb-2 p-2 hover:bg-green-500 cursor-pointer"
      type="button"
      value="Add"
    ></input>
  )
}

export default Addlist
