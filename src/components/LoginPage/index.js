import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header'
import "./index.css"

const LoginPage = () => {
    const [values,setValues] = useState({
        username:'',
        password:''
    })
    const [passwordType,setPasswordType] = useState(false)

    const navigate = useNavigate()
    const loginHandler = async(e) => {
        e.preventDefault()
        console.log("Login:",values)
        try {
            const userResponse = await axios.post(`http://localhost:3009/api/auth/login`,values)
            localStorage.setItem("jwtToken",userResponse.data.jwtToken)
            navigate("/")
        } catch (error) {
            console.log("Login failed.")
        }
    }

    const changePasswordType = () => {
        setPasswordType(!passwordType)
    }

    const passwordModel = passwordType?"text":"password"

  return (
    <>  
    <Header/>
    <div className='update-page-container signup-container'>
        <h3>Login Form</h3>
        <form onSubmit={loginHandler} className="form-container" >
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
            <button type='submit' className="add-button">Login</button>
            <p className='click-here-links'>Not Registered? <Link to="/signup"><span>Click here..</span></Link></p>
        </form>
    </div>
    </>
  )
}

export default LoginPage