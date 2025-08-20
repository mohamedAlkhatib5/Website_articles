

import React, { useState, useEffect } from "react";
 import 'bootstrap/dist/css/bootstrap.min.css';
  import userImagePlaceholder from '../assets/img/userimg.jpg'; 
  import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
   import NavbarLink from '../Components/Navbar.jsx';
    import Footer from '../Components/Footer.jsx';
     import { FaCamera } from "react-icons/fa";
     import { Link } from "react-router";
 import { useAuth } from '../Contexts/UserContext';
import { Helmet } from 'react-helmet';
import Loader from '../Components/Loader.jsx';
import { API_MyAccount,API_Change_user ,API_img_user} from "../apis-fetch/Apis.js";
export default function MyAccount() { 

const { userData, setUserData, openLogoutModal } = useAuth();
const [imagePreview, setImagePreview] = useState(userImagePlaceholder);
 const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

  const username = 'mohamed-alkhatib';
 const password = '123456'; 
 const getBasicAuthHeader = () => { 
  const token = btoa(`${username}:${password}`);
   return `Basic ${token}`; };
// ****************fetch user information*****************
useEffect(() => { 
  const username = 'mohamed-alkhatib';
 const password = '123456'; 
 const getBasicAuthHeader = () => { 
  const token = btoa(`${username}:${password}`); return `Basic ${token}`; };
  const csrfToken = localStorage.getItem("csrf_token");

if (!csrfToken) {
  setError("CSRF Token is not available");
  return;
}
 setLoading(true);
fetch(API_MyAccount, {
  method: "GET",
  credentials: "include",
  headers: {
    "X-CSRF-Token": csrfToken,
    "Accept": "application/json",
    'Authorization': getBasicAuthHeader()
  }
})
  .then((res) => {
    if (!res.ok) throw new Error("Failed to load user information");
    return res.json();
  })
  .then((data) => {
    setUserData({
      firstName: data.field_name?.[0]?.value || "",
      lastName: data.field_surname?.[0]?.value || "",
      displayName: data.name?.[0]?.value || "",
      email: data.mail?.[0]?.value || "",
      phone: data.field_mobile?.[0]?.value || "",
      address: data.field_address?.[0]?.value || "",
             userImage: data.user_picture?.[0]?.url || '',
      
    });

    if (data.user_picture?.[0]?.url) {
      setImagePreview(data.user_picture[0].url);
       localStorage.setItem("userImage", data.user_picture[0].url); 
    }

    setError(null);
  })
  .catch((err) => {
    console.error("Error:", err);
    setError("Failed to load user information");
  })
   .finally(() => {
      setLoading(false);
    });


}, []);
  


// *************form data **************
const handleChange = (e) => {
   setUserData({ ...userData, [e.target.name]: e.target.value });
   };

const handleSubmit = (e) => { 
  e.preventDefault();

const formData = {
  field_name: [{ value: userData.firstName }],
  field_surname: [{ value: userData.lastName }],
  field_mobile: [{ value: userData.phone }],
  name: [{ value: userData.displayName }]

};

sendUpdate(formData);

};

// *******************Change user **********
const sendUpdate = (dataToSend) => { 
  const csrfToken = localStorage.getItem("csrf_token");

fetch(API_Change_user, {
  method: "PATCH",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-CSRF-Token": csrfToken,
       'Authorization': getBasicAuthHeader()
  },
  body: JSON.stringify(dataToSend)
})
  .then((res) => {
    if (!res.ok) throw new Error("Data saving error");
    return res.json();
  })
  .then(() => {
    alert("✅Data Saved ");
    setError(null);
  })
  .catch((err) => setError(err.message));
  

};


// *********************img*******************
const handleImageChange = async (event) => {
    setLoading(true); 
  const file = event.target.files[0];
  if (!file) return;


  try {
    const fileData = await file.arrayBuffer();
    const csrfToken = localStorage.getItem("csrf_token");

    const response = await fetch(API_img_user,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          'X-CSRF-Token': csrfToken,
          'Content-Disposition': `file; filename="${file.name}"`,
             'Authorization': getBasicAuthHeader()
        },
        body: fileData,
        credentials: 'include'
      }
    );

    if (!response.ok) throw new Error('Image change failed');

    const data = await response.json();

   
    await fetch(API_MyAccount, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-CSRF-Token": csrfToken,
           'Authorization': getBasicAuthHeader()
      },
      body: JSON.stringify({
        user_picture: [
          {
            target_id: data.fid[0].value
          }
        ]
      })
    });

   
    if (data.uri?.[0]?.url) {
      setImagePreview(data.uri[0].url);
      localStorage.setItem("userImage", data.uri[0].url);
    }
    if (data.uri?.[0]?.url) {
  const newImageUrl = data.uri[0].url + '?t=' + new Date().getTime();
  setImagePreview(newImageUrl);
  setUserData(prev => ({ ...prev, userImage: newImageUrl }));
}

    setError(null);
    alert("✅ Image uploaded successfully");
  } catch (error) {
    console.error(error);
    setError('Image change failed');
  }finally {
    setLoading(false); 
  }

};


return ( 

<> 
         <Helmet>
      <title>MyAccount | Articula </title>
      <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
      <meta name="keywords" content="online learning, articles, Articula , react website" />
     <meta charset="UTF-8" />
     {/* img in public href */}
     <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
     
     
    </Helmet>
<NavbarLink /> 
<Container className="px-lg-0 py-5">
   <h2 className="mb-4 text-center mt-lg-1 mt-5">My Account</h2> 
   <Tab.Container defaultActiveKey="account">
     <Row className="w-100 px-0 mx-0"> 
      <Col md={3} className="mb-4 p-3" style={{ background: '#F5F7FA' }}> <div className="text-center">
         <div className="position-relative w-100"> 
          {loading ? (
  <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<Loader/>
  </div>
) : (
  <img src={imagePreview} alt="User" className="rounded-circle mb-2" style={{ width: '150px', height: '150px' }} />
)}
          <label htmlFor="imageUpload" className="btn bg-white position-absolute rounded-circle p-2  py-1 " style={{ insetInlineEnd: '30%', bottom: '10px' }}> <FaCamera /> </label> 
          <input type="file" id="imageUpload" accept="image/*" hidden onChange={handleImageChange} />
          </div>
           <h5 className="mt-2">{userData.displayName || "User"}</h5>
            </div>

<Nav variant="pills" className="flex-column mt-4 text-center">
            <Nav.Item><Nav.Link eventKey="account">Account</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="address">Address</Nav.Link></Nav.Item>
            {/* <Nav.Item><Nav.Link eventKey="orders">Orders</Nav.Link></Nav.Item> */}
            <Nav.Item><Nav.Link eventKey="wishlist">Wish list</Nav.Link></Nav.Item>
            <Nav.Item>
              <Link to='/MyAccount' onClick={openLogoutModal} className='btn w-100 border rounded-0'>Log Out</Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col md={9} className="pe-0">
          <Tab.Content className="card p-4 shadow-sm rounded">
            <Tab.Pane eventKey="account">
              <form onSubmit={handleSubmit}>
                <h4>Account Details</h4>
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>First Name</label>
                    <input type="text" className="form-control" name="firstName" defaultValue={userData.firstName} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="lastName" defaultValue={userData.lastName} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Display Name</label>
                    <input type="text" className="form-control" name="displayName" defaultValue={userData.displayName} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" defaultValue={userData.email} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Phone</label>
                    <input type="text" className="form-control" name="phone" defaultValue={userData.phone} onChange={handleChange} />
                  </div>
                
                  <div className="col-12">
                    <button type="submit" className="btnSave button-style border-0 rounded-0 hbtn hb-fill-right">
                      Save changes
                      
                      </button>
                  </div>
                </div>
              </form>
            </Tab.Pane>

            <Tab.Pane eventKey="address">
              <h4>Address</h4>
              <input
                type="text"
                className="form-control mb-3"
                name="address"
                value={userData.address}
                onChange={handleChange}
              />
              <button className="btn btn-primary">Update Address</button>
            </Tab.Pane>
{/* 
            <Tab.Pane eventKey="orders">
              <h4>Your Orders list is empty.</h4>
            </Tab.Pane> */}

            <Tab.Pane eventKey="wishlist">
              <h4>Your Wish list is empty.</h4>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Container>
  <Footer />
</>

); }
