
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Todo from './Todo';
import {
  Card, CardBody,
  CardTitle
} from 'reactstrap';

export const Home = () => {

  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
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
  }

  // const deleteTodo = () => {

  //   setTodos(todos.filter((item) => {
  //     const lastTodo = todos.at(-1);
  //     return item.id !== lastTodo.id
  //   }));
  //   dispatch({type: "addTodo", todos: todos})
  //   console.log('state', state)
  // }

  const deleteSpecificTodo = (id)=>{
     
    dispatch({type: "deleteTodo", id:id, todos:todos});

    setTodos((prevState)=>{
      let filteredTodos = prevState.filter( ( item ) => {
        console.log(item)
        const itemToDelete = (item) => {
          if(item.id == id) return item
        }
        console.log("itemToDelete", itemToDelete(item));
      
      });

      return filteredTodos
    });
    console.log('todos after delete', todos)
    setTodo({});
  }

  useEffect(()=>{
    setTodos(state)
  },[])


  return (
    <>
      <section className="display row">
        {

          state.length > 0 && state.map((todo, i) => { 
             return <Todo key={i + 1} todo={todo} deleteSpecificTodo={deleteSpecificTodo}/>
          })
        }
      </section>
      <Card className="col-6 p-3">
        <CardBody>
          <CardTitle>Create a To Do</CardTitle>
      <Form className="row">
        <div className="display" />
        <FormGroup className="row">
          <label htmlFor="title" >Title</label>
          <Input id={"title"} className="mb-3" type="text" onChange={(e) => {
            e.persist();
            handleTitleChange(e)
          }} />
          <label htmlFor="text">Text</label>
          <textarea id={"text"} rows="10" className="mb-3" type="text" onChange={(e) => {
            e.persist();
            handleTextChange(e)
          }} />
          <div className="col-6">
            <Button color="primary" onClick={() => { addTodo() }} className="d-block m-auto btn-block btn-lg">Add</Button>
          </div>
          {/* <div className="col-6">
            <Button color="danger" onClick={() => { deleteTodo() }} className="d-block m-auto btn-block btn-lg">Delete</Button>
          </div> */}
        </FormGroup>
      </Form>
      </CardBody>
      </Card>
    </>
  );

}
