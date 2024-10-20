import React from 'react'

const ListItem = ({ text, hasCompleted, onclick, delFunc }) => {
  return (
    <div className="flex justify-between items-center mb-7">
      <div
        className={`mr-3 cursor-pointer ${hasCompleted ? 'line-through' : ''}`}
        onClick={onclick}
      >
        {text}
      </div>
      <input
        className="border-2 p-2 hover:bg-green-500 cursor-pointer"
        type="button"
        value="Delete"
        onClick={delFunc}
      ></input>
    </div>
  )
}

export default ListItem
