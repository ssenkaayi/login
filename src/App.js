import React, { useState } from 'react';
import axios from 'axios';
import { Header } from './componets/header';
import { Footer } from './componets/footer';
import { LoginPage } from './pages/login';
import {Home} from './pages/home';
import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
// import {BrowserRouter as Router} from react-router-dom


export default function App () {


  return (
    <> 
    <BrowserRouter>

      <Header/>

      <Routes>
                
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}

      </Routes>

      <Footer/>

    </BrowserRouter>

     
    </>
  

  );
}

export const Register = ()=>{

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  

  const onSubmit = async (event)=>
  {
    event.preventDefault();

    try{
      await axios.post("http://localhost:4000/register/register",
      {username,password});
      alert('registration completed, now you can login')
     
    }catch(err)
    {
      console.error(err);
      alert("username exists, login or try another username")
    }

  }

  return(
    <Form
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword ={setPassword}
      label="Register"
      onSubmit = {onSubmit}
   />
  )
}

export const Login = ()=>{

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const onSubmit = async (event)=>
  {
    event.preventDefault();

    try{
      const response = await axios.post("http://localhost:4000/register/login",
      {username,password});
      console.log(response)
      alert('logged in successfully')
     
    }
    catch(err)
    {
      console.error(err);
      alert("username exists, login or try another username")
    }

  }

  return(

    <Form

      username={username}
      password={password}
      setUsername={setUsername}
      setPassword ={setPassword}
      label="login"
      onSubmit={onSubmit}

    />
  )
}

const Form = (props)=>
{
  const {username,setUsername,password,setPassword,label,onSubmit} = props;
  const updateUsername = (event)=>setUsername(event.target.value);
  const updatePassword = (event)=>setPassword(event.target.value);

  return(

    <div className="App">

      <form onSubmit={onSubmit}>

        <h1>{label}</h1>

        <div>
            
          <label htmlFor='username'>username</label>

          <input
          type='text'
          id='username'
          value={username} 

          onChange={updateUsername}/>

        </div>

        <div>

          <label htmlFor='password'>password</label>

          <input 
          type='password'
          id='password' 
          value={password}
          onChange = {updatePassword}/>
        </div>
        
        <button type='submit'>{label}</button>

      </form>

    </div>
  )

}

  