
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages.css/Form.css';
import img from '../assets/img/footer-pic.png';
import Dashboard from './Dashboard';
import { LiaEye } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";
import { Container ,Row, Col } from "react-bootstrap";
 import { Form, Button } from 'react-bootstrap'; 

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });




const [isIntializing, setIsIntializing] = useState(true)
const [isAuthenticated, setIsAuthenticated] = useState(false)
const [curr_id, setCurr_id] = useState('')
const [curr_username, setCurr_username] = useState('')


const [error, setError] = useState(false)

  const [errors, setErrors] = useState({});
  const [logincomoplet,setlogincomoplet ] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

    
 

useEffect(()=>{

  fetch( `https://tamkeen-dev.com/api/user/login?_format=json`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        "name": "mohamed-alkhatib",
        "pass": "123456"
    }
    
    )
} )
.then(response=>{
    if(!response.ok) {
        return response.json()
                .then((errData)=>{
                    throw new Error(errData.message || "LOGIN FAILED")
                }) 
                
      
    }
    return response.json()
})
.then(data=>{
    console.log(data)

    localStorage.setItem('csrf_token', data.csrf_token)
    localStorage.setItem('logout_token', data.logout_token)

    localStorage.setItem('uid', data.current_user.uid)
    setCurr_id(data.current_user.uid)
    
    localStorage.setItem('name', data.current_user.name)
    curr_username(data.current_user.name)


    setIsAuthenticated(true)
})
.catch(err=>{
    console.log(err.message)
    setError(err.message)
})
.finally(()=>{
    console.log('finally')

})
    const getCsrfToken = localStorage.getItem('csrf_token')
    const getLogoutToken = localStorage.getItem('logout_token')
    const getUid = localStorage.getItem('uid')
    const getName = localStorage.getItem('name')

    if(getCsrfToken && getLogoutToken) {
      setIsAuthenticated(true)

      setCurr_id(getUid)
        setCurr_username(getName)
    }

    setIsIntializing(false)

}, [])



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log('Form submitted:', formData);
      setlogincomoplet(true)
     
     
    }
  };

  return (
    !logincomoplet && !isAuthenticated ?

    <section  className='sign-in '>
 <Row className="row w-100  position-relative form-respons " style={{height:'100vh'}}>
              <Col  xs={12} sm={12} md={6} lg={6} className=' height-respons order-2 order-lg-1  '  style={{background:' #EBEBFF'}}>


    <div className='h-100 w-100' >
      <img src={img} alt=""  className='h-100 w-100'/>
    </div>
</Col>
 <Col  xs={12} sm={12} md={6} lg={6} className='py-lg-5 form-respons  order-1 order-lg-2  ' >
<Container className=" ">
    <div className=" form-respons  w-100">
    
 <div  className="signup-form  py-5 d-flex align-items-center  justify-content-center form-respons"> 
  <Form className="  rounded   form-respons py-2 w-100" style={{ maxWidth: '500px' }}  onSubmit={handleSubmit}>
    
    <div className="card-header w-100 ">
           <p className="text-center mb-4 fs-1  mb-1 fw-semibold">Sign in</p>
            </div>
          
            
                <div className="mb-3">
                 <label htmlFor="name" className="form-label">Name</label>
                  <input
                      type="text"
                      className={`form-control ${errors.name && 'is-invalid'}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email && 'is-invalid'}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="mb-3   position-relative">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`form-control ${errors.password && 'is-invalid'}`}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      
                    />
                         <span className="password-toggle eyeform position-absolute" onClick={() => setShowPassword(!showPassword)}>
                                  {showPassword ? <LiaEye /> : <LiaEyeSlash />
                    }
                                </span>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}


                   
                  </div>

                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary    glow-btn-orange">Submit</button>
                  </div>

       
  </Form>
</div>


     </div>
     </Container>
</Col>

</Row>
</section>
:<Dashboard/>
  );

}
export default LoginForm;





