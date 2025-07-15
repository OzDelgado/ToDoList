import React from 'react';
import logo from "../../assets/logo.png";
import "./sideBar.css"

const Sidebar = () => (
  <div className="sidebar">
    <img src={logo} alt="Grupo Salinas" className="logo" />
    <h3>Instrucciones</h3>
    <ul>
      <li className='Instructions'>Agrega una nueva tarea con el campo de texto.</li>
      <li className='Instructions'>Haz clic en ✔ para marcarla como completada.</li>
      <li className='Instructions'>Puedes eliminar tareas completadas si ya no las necesitas.</li>
    </ul>
  </div>
);

export default Sidebar;
