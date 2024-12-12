import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "../Header"
import axios from 'axios'


import "./index.css"

const AddTaskPage = () => {
    const [values,setValues] = useState({
        user_id:'',
        title:'',
        description:'',
        status:''
    })

    const navigate = useNavigate()

    const addTaskHandler = e => {
        e.preventDefault()
        console.log("Values:",values)
        axios.post(`http://localhost:3009/api/tasks`,values)
        .then((response)=> {
            console.log(response)
            navigate("/")
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <>
    <Header/>
    <div className='update-page-container'>
        <h3>Add task</h3>
        <form onSubmit={addTaskHandler} className="form-container" >
        <div>
            <h4>User Id:</h4>
            <input type='number' name="user_id" placeholder='Enter user id...' className="input-form" onChange={e => setValues({...values,user_id:e.target.value})} required/>
        </div>
        <div>
            <h4>Task Title: </h4>
            <input type='text' name="title" placeholder='Enter title...' className="input-form" onChange={e => setValues({...values,title:e.target.value})} required/>
        </div>
        <div>
            <h4>Task Description:</h4>
            <input type='text' name="description" placeholder='Enter description...' className="input-form" onChange={e => setValues({...values,description:e.target.value})} required/>
        </div>
        <div>
            <h4>Task Status: </h4>
            <input type='text' name="status" placeholder='Enter status...' className="input-form" onChange={e => setValues({...values,status:e.target.value})} required/>
        </div>
            <br/><br/>
            <button type='submit' className="add-button">Add Task</button>
        </form>
    </div>
    </>
  )
}

export default AddTaskPage