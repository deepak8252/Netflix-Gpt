import React, { useState } from 'react'
import Header from './Header'
import Form from 'react-bootstrap/Form';
const Login = () => {
  const [issignupform,setissignupform]=useState(true)
  const togglesignup=()=>{
    setissignupform(! issignupform)
  }
  return (
  <>
    <div><Header/></div>
    <div className=' absolute bg-login ' >
    <img src="" alt="" />
  </div>
  <Form className=' text-center bg-black p-11 relative top-36 left-0 right-0  mx-auto shadow-lg rounded-2xl bg-opacity-80 w-80'>
     <h2 className='text-white font-bold text-2xl text-center'>{issignupform?"SIGN UP":"SIGN IN"}</h2>
      <Form.Group className="my-5 " controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="enter your email" className='p-3 w-full bg-gray-900' />
      </Form.Group>
      {issignupform? <Form.Group className="my-5 " controlId="exampleForm.ControlInput1">
        <Form.Control type="name" placeholder="full name" className='p-3 w-full bg-gray-900' />
      </Form.Group>:<></>}
      {issignupform? <Form.Group className="my-5 " controlId="exampleForm.ControlInput1">
        <Form.Control type="password" placeholder="enter your password" className='p-3 w-full bg-gray-900' />
      </Form.Group>:<></>}
      <Form.Group className=" my-5 " >
      <Form.Control
      className='w-full p-3 bg-gray-900'
        type="password your confirm password"
        id="inputPassword5"
        placeholder='enter your password'
      />
      </Form.Group>
      <button className='text-white   capitalize border border-white bg-red-600 p-2 font-bold w-full rounded-2xl'>
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