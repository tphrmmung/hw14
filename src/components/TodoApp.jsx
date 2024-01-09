
import { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import FormAddTodo from './FormAddTodo';
import TodoContainer from './TodoContainer'
import axios from 'axios';

function TodoApp() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  const apiUrl = 'https://snru-react-tdl-demo.onrender.com/todos/'
  // console.log(data)

  useEffect( ()=>{
    setIsLoading(true)
    axios.get(apiUrl).then( res=>{
      setData(res.data)
      setIsLoading(false)
    })
  }, [trigger] )

  const hdlAdd = (newJob) => {
    axios.post(apiUrl,newJob).then( () => {
      setTrigger(prv=>!prv)
    });
  }

  const hdlDel = (id) => {
    confirm('Remove Job?') === true ? axios.delete(apiUrl+id).then(() => setTrigger((prev) => !prev)) && alert('Delete Success!') : alert('You undelete the job!')
  }

  const hdlUpdate = (id, completed, editValue) => {
    let upJob = { todo: editValue, completed: completed, userId: 1 }
    axios.put(apiUrl+id, upJob).then(() => setTrigger((prev) => !prev))
  }

  const hdlStatus = (id, editValue, completed) => {
    if (completed === true) {
      let upStarus = { todo: editValue, completed: false, userId: 1 }
      axios.put(apiUrl+id, upStarus).then((res) => setTrigger((prev) => !prev))
    } else {
      let upStarus = { todo: editValue, completed: true, userId: 1 }
      axios.put(apiUrl+id, upStarus).then(() => setTrigger((prev) => !prev))
    }
  }

  return (
    <div className='todo-app bg-fuchsia-300 p-3 px-5 max-sm:px-3 flex-col rounded-[10px] border-4 border-white shadow-light'>
      <Dashboard task={data} />
      <FormAddTodo hdlAdd={hdlAdd} />
      <TodoContainer todos={data} apiUrl={apiUrl} hdlDel={hdlDel} hdlUpdate={hdlUpdate} hdlStatus={hdlStatus} isLoading={isLoading}/>
    </div>
  )
}

export default TodoApp;