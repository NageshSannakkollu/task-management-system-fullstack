import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header'
import "./index.css"

const Signup = () => {
    const [values,setValues] = useState({
        username:'',
        password:''
    })
    const [passwordType,setPasswordType] = useState(false)

    const navigate = useNavigate()
    const registerHandler = async(e) => {
        e.preventDefault()
        // console.log("Registration:",values)
        await axios.post(`http://localhost:3009/api/auth/register`,values)
        .then((response)=> {
            console.log(response.data)
            navigate("/login")
        }).catch(error => {
            console.log(error.response.data)
            
        })
    }

    const changePasswordType = () => {
        setPasswordType(!passwordType)
    }

    const passwordModel = passwordType?"text":"password"

  return (
    <>  
    <Header/>
    <div className='update-page-container signup-container'>
        <h3>Signup/Registration Form</h3>
        <form onSubmit={registerHandler} className="form-container" >
        <div className=''>
            <h4>Username:</h4>
            <input type='text' name="username" placeholder='Enter username...' className="input-form" onChange={e => setValues({...values,username:e.target.value})} required/>
        </div>
        <div>
            <h4>Password: </h4>
            <input type={`${passwordModel}`} name="password" placeholder='Enter password...' className="input-form" onChange={e => setValues({...values,password:e.target.value})} required/>
        </div>
        <br/> 
        <div className='show-password-container'>
            <label htmlFor="checkbox" className='label-title'>Show Password </label>
            <input type='checkbox' id="checkbox" className='checkbox-input' onClick={changePasswordType}/>
        </div>
            <br/><br/>
            <button type='submit' className="add-button">Signup</button>
            <p className='click-here-links'>Already Registered? <Link to="/login"><span>Login</span></Link></p>
        </form>
    </div>
    </>
  )
}

export default Signup