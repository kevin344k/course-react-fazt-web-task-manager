import {useContext} from 'react'
import TaskCard from "./TaskCard";
import {TaskContext} from '../Context/TaskContext'

export default function TaskList() {

const {tasks}=useContext(TaskContext)


if (tasks.length===0) {
  return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aún</h1>
}




  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} ></TaskCard>
      ))}
    </div>
  );
}
