import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate=useNavigate();
  const user =useSelector((store)=>store.user)
  const handleSignout=()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
});

  }
  return (
    <div className=' sticky top-0 z-50'>
      <div className=' relative w-full px-8 py-3 bg-gradient-to-b from-black z-50 flex justify-between items-center '>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className=' w-48'/>
       { user &&
         <div className='flex gap-6'>
          <h2 className="text-white">{user?.displayName}</h2>
         <select name="" id=""  className=' cursor-pointer bg-gray-800 text-white p-3 rounded-lg '>
           <option value="english">English</option>
           <option value="hindi">Hindi</option>
         </select>
       <button className='bg-red-600 text-white p-3 capitalize '
       onClick={handleSignout}
       >Signout</button>
     </div>
       }


      </div>
  
    </div>
  )
}

export default Header