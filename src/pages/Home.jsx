import React from 'react';
import Sidebar from "../components/Instructions/sideBar";
import ToDo from "../components/toDoList/toDo";

const Home = () => (
  <div className="main-container">
    <Sidebar />
    <ToDo />
  </div>
);

export default Home;
