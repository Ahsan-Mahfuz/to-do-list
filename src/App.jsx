import Addlist from './components/Addlist'
import InputTaken from './components/InputTaken'
import { useEffect, useState } from 'react'
import ListItem from './components/ListItem'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [add, setAdd] = useState(() => {
    const storedItems = localStorage.getItem('datalist')
    return storedItems ? JSON.parse(storedItems) : []
  })

  const inputTaken = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('datalist', JSON.stringify(add))
  }, [add])

  const addItem = () => {
    if (input.trim() !== '') {
      const listArray = { text: input, completed: false }
      setAdd([...add, listArray])
      setInput('')
    }
  }

  const lineThrough = (i) => {
    const newItems = add.map((item, index) => {
      if (index === i) {
        return {
          text: item.text,
          completed: !item.completed,
        }
      }
      return item
    })
    setAdd(newItems)
  }
  const del = (i) => {
    const newItems = add.filter((item, index) => {
      if (index !== i) {
        return {
          text: item.text,
          completed: item.completed,
        }
      }
    })
    setAdd(newItems)
  }

  return (
    <div className="flex justify-center ">
      <div className="border-2 min-h-60 w-96 flex flex-col p-4">
        <InputTaken inputFunc={inputTaken} value={input} />
        <Addlist addItemFunc={addItem} />
        <div>
          {add.map((a, i) => {
            return (
              <ListItem
                key={i}
                text={a.text}
                hasCompleted={a.completed}
                onclick={() => lineThrough(i)}
                delFunc={() => del(i)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
