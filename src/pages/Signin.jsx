

import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/img/Saly-10.png';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router';
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { Bottons } from '../Components/Navbar';
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from '../Contexts/UserContext';
import { Helmet } from 'react-helmet';
import { API_Signin } from '../apis-fetch/Apis';
const Signin = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });


  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
        setIsLoading(true);
    if (!validateForm()) return;

    fetch(API_Signin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        pass: formData.password,
      })
    })
    
      .then(response => {
      
        if (!response.ok) {
          return response.json().then(errData => {
            throw new Error(errData.message || "Login failed");
          });
        }
        return response.json();
      })
      .then(data => {
  const basicAuth = 'Basic ' + btoa(formData.name + ':' + formData.password);

  
  localStorage.setItem('auth_header', basicAuth); 
  localStorage.setItem('csrf_token', data.csrf_token);
  localStorage.setItem('logout_token', data.logout_token);
  localStorage.setItem('uid', data.current_user.uid);
  localStorage.setItem('name', data.current_user.name);

  login(data);   
  setIsLoading(false);
  navigate('/');
})
     
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      });
   
  };

  return (
    <>
        <Helmet>
          <title>Signin| Articula </title>
          <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
          <meta name="keywords" content="online learning, articles, Articula , react website" />
         <meta charset="UTF-8" />
         {/* img in public href */}
         <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
         
         
        </Helmet>
      <Bottons />
      <section className='sign-in h-100'>
        <Row className="row w-100 form-respons mx-0 px-0">
          <Col xs={12} md={6} className='order-2 order-md-1 mt-lg-0 mt-5 p-0' style={{ background: '#EBEBFF' }}>
            <div className='h-100'>
              <img src={img} alt="" className='h-100 w-100' />
            </div>
          </Col>

          <Col xs={12} md={6} className='py-lg-0 form-respons order-1 order-lg-2 h-100'>
            <Container>
              <div className="py-lg-5">
                <div className="signup-form py-5 d-flex align-items-center justify-content-center">
                  <Form className="rounded py-2 w-100" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
                    <p className="text-center mb-4 fs-1 fw-semibold">Sign in to your account</p>

                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Username"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          
                        />
                        <span className=" password-toggle position-absolute" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <LiaEye /> : <LiaEyeSlash />}
                        </span>
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    {error && <p className="text-danger mt-2">{error}</p>}

                    <div className="d-flex flex-column flex-lg-row justify-content-centar align-items-center mt-4">
                      <Form.Group className="w-50 mb-5 mb-lg-0">
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <div className="w-50">
                        <Button className="w-100 mb-3 rounded-0" style={{ background: '#FF6636', border: '#FF6636' }} type="submit">
                             {isLoading ? "Loading..." : "Sign in →"}
                        
                        </Button>
                      </div>
                    </div>

                    <div className="text-center mt-2 mb-5  ">
                      <p style={{ color: '#4E5566' }}>Sign in with:</p>
                      <div className="d-flex justify-content-center gap-3 pt-4">
                        <Link to="/google" className="d-flex text-dark border">
                          <div className="border-end p-2"><FcGoogle /></div>
                          <div className="p-2">Google</div>
                        </Link>
                        <Link to="/facebook" className="d-flex text-dark border">
                          <div className="border-end p-2"><FaFacebookF /></div>
                          <div className="p-2">Facebook</div>
                        </Link>
                        <Link to="/apple" className="d-flex text-dark border">
                          <div className="border-end p-2"><FaApple /></div>
                          <div className="p-2">Apple</div>
                        </Link>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Signin;
