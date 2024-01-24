import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo } from '../Features/todo/todoSlice';
import './AddTodo.css'

const AddTodo = () => {
    const[input,setInput]=useState("");
    const dispatch=useDispatch();

    const HandleinputChange=(e)=>{
        setInput(e.target.value)
    }

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
  return (
    <div className='inputtodoform'>
   <form onSubmit={addTodoHandler} className='todoform'>
    <input type='text' placeholder='enter a todo' value={input} onChange={HandleinputChange} className='inputtodo'></input>

    <button type="submit" className='inputtodobutton'>Add Todo</button>
   </form>
   </div>
  )
}

export default AddTodo
