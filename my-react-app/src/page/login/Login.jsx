import React, {useState} from 'react'
import '../login/Login.css'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
 
const Login = () => {
 
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const navigate = useNavigate()
  const user = [
    {
      id: 1, username: "johnd" , password: "m38rmF$"
    },

   {
      id: 2, username: "mor_2314", password: "83r5^_"
   },

   {
      id: 3, username: "evinryan", password: "kev02937@"
   },

   {
      id: 4, username: "donero", password: "ewedon"
   },
  
   {
      id: 5, username: "derek", password: "jklg*_56"
   },
   {
      id: 6, username: "david_r" , password: "3478*#54"
   },

   {
      id: 7, username: "snyder", password: "f238&@*$"
   },

   {
      id: 8, username: "hopkins", password: "William56$hj"
   },

   {
      id: 9, username: "kate_h", password: "kfejk@*_"
   },

   {
    id: 10, username: "jimmie_k", password: "klein*#%*"
   }
  ]

  const changeUsername = (e) =>{
     setUsername(e.target.value)
  }
  const changePassword = (e) =>{
     setPassword(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newObj = user.find(element => element.password === password && element.username ===username)
    if(newObj){
      navigate('/')
      swal({
        title: "Welcome!",
        text: "You clicked the button!",
        icon: "success"
      });
    }else{
      swal({
        title: "Wrong password or username!",
        text: "Please try again!",
        icon: "error"
      });
    }
  }

  return (
    <div>
        <div className='loginPage'>
        <h1 className='register'>Please register</h1>
         <div className='formBox'>
            <form>
                <div className='loginCard'>
                    <div className='inputHolder'>
                        <label htmlFor="username">Username</label>
                        <input type="text"
                         id='username'
                         placeholder='Username'
                        onChange={changeUsername}
                        />
                    </div>
                    <div className='inputHolder'>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                         id='password'
                         placeholder='Password'
                         onChange={changePassword}
                         />
                    </div>
                </div>
                <div className='buttonBox'>
                    <button className='loginButton' onClick={handleSubmit}>Login</button>
                </div>
            </form>
         </div>
        
    </div>
    </div>
  )
}

export default Login