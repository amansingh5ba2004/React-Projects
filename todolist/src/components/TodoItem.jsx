import { useState } from "react"
import {useTodo} from '../context/Todocontext'

function TodoItem({todo}) {
  const  [isTodoEditable , setIsTodoEditable ] = useState(false)
  const [todoMsg , setTodoMsg ] = useState(todo.todo)
  
  const {updateTodo , deleteTodo , toggleComplete } = useTodo() 
  

  const editTodo = () => {
    updateTodo(todo.id ,  {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
            toggleComplete(todo.id)
  }


  return (
    <div
      className={`flex border border-black/10 rouded-lg px-3 py-1.5 shadow-sm shadow-white/50 duration-300 text-black ${todo.todo.completed ? "bg-[#c6e9a7]" : "bg-[ccbed7]"}`}
    >
      <input type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleComplete}
      /> 
      <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`} 
      value={todoMsg}
      onChange={(e) => setTodoMsg(e.target.value)}
      readOnly={!isTodoEditable}
      />  
      <button className="inline-flex items-center justify-center w-8 h-8 text-sm border border-black rounded-lg/10 disabled:opacity-50"
      onClick={() => {
        if (todo.completed) return
        if (isTodoEditable){
          editTodo()
        }else setIsTodoEditable((prev) => !prev)
        
      }}
      disabled = {todo.completed}
      >
        {isTodoEditable ? "SAVE" : "EDIT" }
        </button>
         <button className="inline-flex justify-center w-8 h-8 text-sm border rounded-lg border-black/10 itmes-center bg-gray-50 hover:bg-gray-100 shrink-0"
         onClick={() => deleteTodo(todo.id)}
         > DELETE </button>
        
       </div>
  )
}

export default TodoItem
