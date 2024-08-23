import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'

const Todolist = () => {
    const [newtask, setNewtask] = useState('')
    const [tasks, setTasks] = useState([])

    function addtask(){
        setTasks([...tasks, newtask]);
        setNewtask('');
    }

    function deletetask(index){  
        setTasks(tasks.filter((task, index) => index !== index));
    }


    return (
    <>
     <div className='input-container'>
        <input type="text" className="input-todo"placeholder='Add new todo...' value = {newtask} onChange={(e) => setNewtask(e.target.value)}/>
        <button onClick = {addtask} className='add-button'>Add</button>
     </div>
        <ul className='todo-list-container'>
        {tasks.map((task) => 
        <li key={task} className='list'>
            <span className='input-task'>{task}</span>
            <button className='delete-button'>Delete</button>
        </li>)}
        </ul>
    </>
      
  );
}

export default Todolist;
