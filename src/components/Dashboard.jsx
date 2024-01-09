
function Dashboard(props) {
  const {task} = props
  const taskCount = task ? task.length : 0;
  return (
    <div className="dashboard flex justify-between shadow-light bg-peach-b h-[6rem] items-center p-5 rounded-lg my-2 border-[3px] border-white">
      <h3 className="text-2xl font-bold">{ new Date().toDateString() }</h3>
      <p>{taskCount} Tasks</p>
    </div>
  )
}

export default Dashboard