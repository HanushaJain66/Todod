import React from 'react'
import './Todos.css'
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Features/todo/todoSlice';

const Todos = () => {
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();
  return (
   <>
   <h1 className='Todos'>Todos</h1>
   <div className='listtodo'>
   {todos.map((todo)=>(
    <li key={todo.id} className='listitems'>{todo.text}<button onClick={()=> dispatch(removeTodo(todo.id))} className='removebutton'> X</button></li>
   ))}
   </div>
   </>
  )
}

export default Todos
