import React from "react";
import { useState } from "react";
import "./toDo.css"

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = { id: Date.now(), text: input };
    setTasks([newTask, ...tasks]);
    setInput('');
  };

  const completeTask = (id) => {
    const taskToComplete = tasks.find(task => task.id === id);
    setTasks(tasks.filter(task => task.id !== id));
    setCompletedTasks([taskToComplete, ...completedTasks]);
  };

  const deleteTask = (id, fromCompleted = false) => {
    if (fromCompleted) {
      setCompletedTasks(completedTasks.filter(task => task.id !== id));
    } else {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };
  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <div className="group">
        <input
          type="text"
          placeholder="Agregar tarea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && addTask()}
        />
        <button className="add" onClick={addTask}>Agregar</button>
      </div>
      <div className="task-list">
      <h2>Tareas Pendientes</h2>
      <ul>
        {tasks.map(task => (
          <li  key={task.id}>
            <span>{task.text}</span>
            <div>
              <button className="check" onClick={() => completeTask(task.id)}>✔</button>
              <button className="delete" onClick={() => deleteTask(task.id)}>✕</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
      {completedTasks.length > 0 && (
        <>
          <div className="task-list">
          <h2>Tareas Completadas</h2>
          <ul className="completed-list">
            {completedTasks.map(task => (
              <li key={task.id}>
                <span>{task.text}</span>
                <button className="delete" onClick={() => deleteTask(task.id, true)}>Eliminar</button>
              </li>
            ))}
          </ul>
            </div>
        </>
      )}
    </div>
  );
}

export default ToDo