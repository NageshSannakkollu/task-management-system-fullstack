import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';

import "./index.css"
import Header from "../Header";

const UpdatePage = () => {
    const {id} = useParams()
    console.log(id)
    const [values,setValues] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async() => {
            axios.get(`http://localhost:3009/api/tasks/${id}`)
            .then((response) => {
                console.log(response.data)
                setValues([response.data])
            }).catch(error => {
                console.log(error)
            })
        }
        getData()
    },[id])

    const updateTaskHandler = event=> {
        event.preventDefault()
        axios.put(`http://localhost:3009/api/tasks/${id}`,values[0])
        .then(response => {
            navigate("/")
            console.log("Response:",response)
        }).catch(error => {
            console.log("Error:",error)
        })

    }

  return (
    <>
    <Header/>
    <div className="update-page-container">
        <h2>Update Form</h2>
        {values.map(eachItem => {
            return(
                <form onSubmit={updateTaskHandler} className="form-container" key={eachItem.id}>
                    <div>
                        <h4>User Id:</h4>
                        <input type='number' value={eachItem.user_id} placeholder='Enter user id...' className="input-form" onChange={e => setValues([{...values[0],user_id:e.target.value}])} />
                    </div>
                    <div>
                        <h4>Task Title: </h4>
                        <input type='text' value={eachItem.title} placeholder='Enter title...' className="input-form" onChange={e => setValues([{...values[0],title:e.target.value}])} />
                    </div>
                    <div>
                        <h4>Task Description:</h4>
                        <input type='text' value={eachItem.description} placeholder='Enter description...' className="input-form" onChange={e => setValues([{...values[0],description:e.target.value}])}/>
                    </div>
                    <div>
                        <h4>Task Status: </h4>
                    <input type='text' value={eachItem.status} placeholder='Enter status...' className="input-form" onChange={e => setValues([{...values[0],status:e.target.value}])}/>
                    </div>
                    <br/><br/>
                        <button type="submit" className="update-button update-page">Update</button>
                </form>
            )
        })}
          
    </div>
     </>
  )
}

export default UpdatePage