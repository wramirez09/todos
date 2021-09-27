import React from 'react'
import { Form, FormGroup } from 'reactstrap';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const TodoForm =({ addTodo, handleTextChange, handleTitleChange }) => {
    return (
        <div className="container">
        
            <Form className="row">
                <div className="display my-3" />
                <FormGroup className="row">

                    <TextField placeholder="thing to do" id="standard-basic" label="Title" variant="standard" onChange={(e) => {
                        e.persist();
                        handleTitleChange(e)
                    }}/>
                
                    <TextField placeholder="todo description..." id="standard-basic" label="Description" variant="standard" className="mt-3" minRows={7} multiline onChange={(e) => {
                        e.persist();
                        handleTextChange(e)
                    }} />
                    <div className="col-6">
                        <Button variant="contained" onClick={() => { addTodo() }} className="mt-3">Add</Button>
                    </div>
                </FormGroup>
            </Form>

        </div>
    )
}


export default TodoForm