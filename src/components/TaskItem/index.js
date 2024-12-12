import React from 'react'
import { Link } from 'react-router-dom'

import "./index.css"

const TaskItem = (props) => {
    const {taskDetails,clickOnDelete} = props
    const {id,user_id,title,description,status} = taskDetails

    const onDeleteTask = () => {
        clickOnDelete(id)
    }
  return (
    <li className='task-list-details-container'>
        <p className='id'>{id}</p>
        <p className='user-id'>{user_id}</p>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
        <p className='status'>{status}</p>
        <p className='update'>
            <Link to={`/update-task/${id}`}>
                <button type='button' className='update-button'>Update</button>
            </Link>
        </p>      
                
        <p className='delete'>
            <button type='button' className='delete-button update-button' onClick={onDeleteTask}>Delete</button>
        </p>
            
    </li>
  )
}

export default TaskItem