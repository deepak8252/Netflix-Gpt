import React, { useEffect } from 'react'
import Login from "./Login"
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Browse from "./Browse"
import { auth } from '../util/firbase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../util/userSlice';
const Body = () => {
  const dispatch=useDispatch();
  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ]);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties

        const {uid,email,displayName,photoURL }= user;
        dispatch(addUser({
          uid:uid,email:email,displayName:displayName,photoURL:photoURL
        }));
              
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      
      }
    });
    
  });
  return (
    <div>
      <RouterProvider router={approuter}>
     
      </RouterProvider>
    </div>
  )
}

export default Body