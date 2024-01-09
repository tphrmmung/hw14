
import TodoItem from "./TodoItem"

function TodoContainer(props) {
  const { todos, hdlDel, hdlUpdate, hdlStatus , isLoading} = props

  if (!todos) {
    return null;
  }

  return (
    <div className="todo-con">
      {todos.map(el => (
        <TodoItem key={el.id} job={el} hdlDel={hdlDel} hdlUpdate={hdlUpdate} hdlStatus={hdlStatus} isLoading={isLoading}/>
      ))
      }
      
    </div>
  )
}

export default TodoContainer