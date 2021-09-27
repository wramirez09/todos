
import { Drawer } from '@mui/material';
import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Todo from './Todo';
import TodoForm from './TodoForm';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TodoModal from './TodoModal';


export const Home = () => {

  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const input = document.querySelectorAll('input');

  const handleTitleChange = (e) => {
    let newtodo = {
      ...todo,
      id: todos.length,
      title: e.currentTarget.value || "",
      completed: false
    }
    setTodo(newtodo);
  }

  const handleTextChange = (e) => {
    let newtodo = {
      ...todo,
      id: todos.length,
      text: e.currentTarget.value || "",
      completed: false
    }
    setTodo(newtodo);
  
  }

  const addTodo = () => {
    console.log('current todos', todos)
    setTodos(()=>{
      const newArr = [...todos, todo];
      dispatch({"type":"addTodo", todos: newArr});
      return newArr
    })

    setTodo({});
    
    input.forEach((input) => {
      input.value = "";
    })
    document.querySelector("textarea").value = "";
    setOpenDrawer(false)
  }
  
  const deleteSpecificTodo = (id)=>{
     
    dispatch({type: "deleteTodo", id:id, todos:todos});

    setTodos((prevState)=>{
      let filteredTodos = prevState.filter( ( item ) => {
          if(item.id == id) return item
      });

      return filteredTodos
    });
    
    setTodo({});
  }


  const [openModal, setOpenModal] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)

  useEffect(()=>{
    setTodos(state)
  },[])


  return (
    <Fragment>
      <section className="row">
        {

          state.length > 0 && state.map((todo, i) => { 
             return <Todo key={i + 1} todo={todo} deleteSpecificTodo={deleteSpecificTodo}/>
          })
        }
      </section>
     
      <Fab color="primary" aria-label="add" onClick={()=>{setOpenDrawer(true)}}>
        <AddIcon  />
      </Fab>
      <Drawer open={openDrawer} anchor="bottom" classes="p-3" variant="temporary">
        
        <TodoForm addTodo={addTodo} handleTextChange={handleTextChange} handleTitleChange={handleTitleChange}/>
      </Drawer>
      <TodoModal open={openModal}/>
    </Fragment>
  );

}
