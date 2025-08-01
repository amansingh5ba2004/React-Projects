import { useState } from "react"
import {useTodo} from "../context/Todocontext"

function TodoForm() {

  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()
  
  const add = (e) => {
    e.preventDefault()
    if(!todo) return
    addTodo({todo , completed: false })
    setTodo("")
  }
  return (
    <form onSubmit={add} className="flex">
      <input type="text"
        placeholder="Write Todo..."
        className="w-full px-3 duration-150 border rounded-l-lg outline-none bg-white/20 py-1.5 border-black/10"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"
      className="px-3 py-1 text-white bg-green-600 rounded-r-lg shrink-0"
      >Add</button>
    </form>
  )
}

export default TodoForm
