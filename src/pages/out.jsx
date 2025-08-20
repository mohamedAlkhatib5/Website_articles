
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router';
import  { useState } from 'react';
import { IoLogOut } from "react-icons/io5";
import { useAuth } from '../Contexts/UserContext';


export default function LogOut() {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
  };
const { logout,setShowLogoutModal } = useAuth();
  return (


      <>
      {!confirmed ? (
        <div className="text-center p-5 shadow rounded bg-light m-0">
                <div className=" " 
                 style={{fontSize:'80px'}}>
            <IoLogOut />

        </div>
          <h4 className="mb-4">Are you sure you want to log out?</h4>
       
          <Link  className='btn btn-danger me-3 px-4'  onClick={() => (handleConfirm(),logout())} >
      Ok
        </Link>
 
           
        </div>
      ) : <div className="text-center p-5 shadow rounded bg-light w-100 ">

        <div className=" "  style={{fontSize:'80px'}}>
            <IoLogOut />

        </div>
        <h2 className="text-danger mb-3">You have been logged out</h2>
        <p className="mb-4">Thank you for visiting. We hope to see you again soon!</p>
        <Link to='/Signin' className='btn text-white' style={{background:'#FF6636'}}>
          Login Again
        </Link>
      </div>}
{/* //  </div> */}
</>
  );
}



// ******************************************************************



