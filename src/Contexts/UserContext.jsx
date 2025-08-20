

// ************************

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router';

import { Modal } from 'react-bootstrap';
import LogOut from '../pages/out';


// ************************
import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

 
const login = (data) => {
  localStorage.setItem('isLoggedIn', 'true');
  setIsLoggedIn(true);

  const user = {
    firstName: data.current_user.first_name || '',
    lastName: data.current_user.last_name || '',
    displayName: data.current_user.name || '',
    email: data.current_user.mail || '',
    phone: data.current_user.field_phone || '',
    address: data.current_user.field_address || '',
       userImage: data.user_picture?.[0]?.url || '',

  };

  setUserData(user);
  localStorage.setItem('user_data', JSON.stringify(user));
};
  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
      localStorage.removeItem('csrf_token');   
      
     localStorage.removeItem('name');   
   
  };
  


  // *****************************************************************

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const openLogoutModal = () => setShowLogoutModal(true);
  const closeLogoutModal = () => setShowLogoutModal(false);
// *****************************************************************

const [userData, setUserData] = useState(() => {
  const storedUser = localStorage.getItem("user_data");
  return storedUser
    ? JSON.parse(storedUser)
    : {
        firstName: "",
        lastName: "",
        displayName: "",
        email: "",
        phone: "",
        address: "",
         userImage:'',
      };
});





     // *****************************************************************

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout , openLogoutModal, closeLogoutModal,userData,setUserData}}>
      {children}
            <Modal show={showLogoutModal} onHide={closeLogoutModal} centered  className='p-0 '>
    
       
        
        <Modal.Body  className='p-0'  >
          <LogOut/>
   
        </Modal.Body>
        
      </Modal>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

