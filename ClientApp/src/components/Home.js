
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Todo from './Todo';

export const Home = () => {

  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const [todo, setTodo] = useState([{}]);
  const [todos, setTodos] = useState([]);
  const input = document.querySelectorAll('input');

  useEffect(() => {
  
    return () => {
      //cleanup
    }
  }, [todos])

  let handleTitleChange = (e) => {
    let newtodo = {
      ...todo,
      id: todos.length,
      title: e.currentTarget.value || "",
      completed: false
    }
    // console.log('todo header', newtodo)
    setTodo(newtodo);
  }

  let handleTextChange = (e) => {
    let newtodo = {
      ...todo,
      id: todos.length,
      text: e.currentTarget.value || "",
      completed: false
    }
    setTodo(newtodo);
  }

  const addTodo = () => {

    setTodo(() => {
      return {
        ...todo,
        id: todos.length
      }
    });

    const newTodos = [
      ...todos,
      todo
    ]

    setTodos(() => {
      return [...newTodos]
    });

    dispatch({ type: "addTodo", todos: newTodos });

    input.forEach((input) => {
      input.value = "";
    })

  }

  const deleteTodo = () => {
    setTodos(todos.filter((item) => {
      const lastTodo = todos.at(-1);
      return item.id !== lastTodo.id
    }))

    dispatch({type: "addTodo", todos: todos})
    console.log('delete todos', todos)
  }

  return (
    <>
      <section className="display row">
        {
          console.log("state at render", state)
        }
        {

          state.length > 0 && state.map((todo, i) => {
            //console.log(todo)
            if (todo.text !== undefined)
              return <Todo key={i + 1} todo={todo} />
          })
        }
      </section>
      <Form className="row">
        <div className="display" />
        <FormGroup className="row">
          <label htmlFor="title" >title</label>
          <Input id={"title"} className="mb-3" type="text" onChange={(e) => {
            e.persist();
            handleTitleChange(e)
          }} />
          <label htmlFor="text">Text</label>
          <Input id={"text"} className="mb-3" type="text" onChange={(e) => {
            e.persist();
            handleTextChange(e)
          }} />
          <div className="col-3">
            <Button color="primary" onClick={() => { addTodo() }} className="d-block m-auto btn-block btn-lg">Add</Button>
          </div>
          <div className="col-3">
            <Button color="danger" onClick={() => { deleteTodo() }} className="d-block m-auto btn-block btn-lg">Delete</Button>
          </div>
        </FormGroup>
      </Form>
    </>
  );

}
