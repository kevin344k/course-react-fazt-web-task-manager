import React, { useContext, useState } from "react";
import {TaskContext} from '../Context/TaskContext'



export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");







 const {createTask}= useContext(TaskContext)




 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);

    createTask({ title, description });

    setTitle("");
    setDescription("");
  };





  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
        autoFocus
          value={title}
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
    className="bg-slate-300 p-3 w-full mb-2"

        ></input>
        <textarea
          value={description}
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}
