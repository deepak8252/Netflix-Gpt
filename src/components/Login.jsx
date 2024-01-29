import React, { useRef, useState } from 'react'
import Header from './Header'
import Form from 'react-bootstrap/Form';
import { checkvalidata } from '../util/validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../util/firbase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const [issignupform,setissignupform]=useState(false);
  const [errormessage,seterrormessage]=useState("");
  const togglesignup=()=>{
    setissignupform(! issignupform)
  };

  const handlesubmit=()=>{
const message= checkvalidata(email.current.value,password.current.value);
seterrormessage(message);
 if(message)return;
 if(issignupform){

  createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      updateProfile(user, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        navigate("/browse")
        
      }).catch((error) => {
        // An error occurred
        seterrormessage(error.message)
      });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrormessage(errorCode, "=", errorMessage)
    });
  
 }
 else{
  signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });

 }
  }
  return (
  <>
    <div><Header/></div>
    <div className=' absolute bg-login ' >
    <img src="" alt="" />
  </div>
  <Form onSubmit={(e)=>e.preventDefault()} className=' text-center bg-black p-11 relative top-36 left-0 right-0  mx-auto shadow-lg rounded-2xl bg-opacity-80 w-80 text-white'>
     <h2 className='text-white font-bold text-2xl text-center'>{issignupform?"SIGN UP":"SIGN IN"}</h2>
      <Form.Group className="my-5 " controlId="exampleForm.ControlInput1">
        <Form.Control ref={email} type="email" placeholder="enter your email" className='p-3 w-full bg-gray-900' />
      </Form.Group>
      {issignupform? <Form.Group className="my-5 " controlId="exampleForm.ControlInput1">
        <Form.Control type="name" ref={name}  placeholder="full name" className='p-3 w-full bg-gray-900' />
      </Form.Group>:<></>}
       <Form.Group className="my-5 " controlId="exampleForm.ControlInput1">
        <Form.Control type="password" ref={password} placeholder="enter your password" className='p-3 w-full bg-gray-900' />
      </Form.Group>
      <p className='text-red-800 p-4 font-bold'>{errormessage}</p>
      <button className='text-white   capitalize border border-white bg-red-600 p-2 font-bold w-full rounded-2xl' onClick={handlesubmit}>
        {issignupform?"SIGN UP":"SIGN IN"}
      </button>
      <p className='py-2 text-white capitalize my-2 cursor-pointer' onClick={togglesignup}>
      {issignupform?" are you new netflix ? sign up ":"registerd user sign in ..."}
        </p>
    </Form>
  
  </>
  )
}

export default Login