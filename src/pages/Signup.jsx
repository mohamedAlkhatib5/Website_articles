
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/img/Saly-1.png';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router'; 
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import imguser from '../assets/img/Group 1.png';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { Bottons } from '../Components/Navbar';
import { useAuth } from '../Contexts/UserContext';

import { Helmet } from 'react-helmet';
import { API_Signup } from '../apis-fetch/Apis';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState('male');
  const navigate = useNavigate();

  const { login, setUserData } = useAuth();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const payload = {
      name: { value: formData.username + "_" + Date.now() },
      mail: { value: formData.email },
      pass: { value: formData.password },
      field_name: { value: formData.firstName },
      field_surname: { value: formData.lastName },
      field_mobile: { value: formData.mobile },
      field_gender: { target_id: gender === 'male' ? 9 : 10 },
    };

    fetch(API_Signup, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Registration failed");
        return res.json();
      })
      .then((data) => {
        const user = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.mobile,
          displayName: payload.name.value,
        };
  navigate('/'); 
   
        setUserData(user);
        login();

     
        localStorage.setItem('uid', data.current_user?.uid || '');
        localStorage.setItem('name', data.current_user?.name || user.displayName);
        localStorage.setItem('auth_header', data.auth_header || '');
        localStorage.setItem('csrf_token', data.csrf_token || '');
        localStorage.setItem('logout_token', data.logout_token || '');
        localStorage.setItem('user_data', JSON.stringify(user));

        alert("Account created successfully!");
      
      })
      .catch((err) => {
        console.error("Signup error:", err);
        alert("Something went wrong during registration.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
          <Helmet>
          <title>Signup | Articula </title>
          <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
          <meta name="keywords" content="online learning, articles, Articula , react website" />
         <meta charset="UTF-8" />
         {/* img in public href */}
         <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
         
         
        </Helmet>
      <Bottons />
      <Row className="w-100 p-lg-0 mx-0 h-100">
        <Col xs={12} md={6} className="p-0 order-2 order-lg-1" style={{ background: '#EBEBFF', height: '100vh' }}>
          <div className="h-100 form-respons">
            <img src={img} alt="" className='h-100' />
          </div>
        </Col>

        <Col xs={12} md={6} className="py-0 h-100 pe-0 form-respons order-1 order-lg-2">
          <Container>
            <div className="signup-form d-flex align-items-center justify-content-center py-0 h-100">
              <Form className="w-100" style={{ maxWidth: '500px' }} onSubmit={handleSignup}>
                <p className="text-center fs-1 mb-1 fw-semibold">Create your account</p>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>First name</Form.Label>
                      <Form.Control type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group>
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="tel" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control type="file" accept="image/*" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </Form.Group>

                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <span className="position-absolute top-50 end-0 translate-middle-y me-3" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <LiaEye /> : <LiaEyeSlash />}
                        </span>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword2 ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                        <span className="position-absolute top-50 end-0 translate-middle-y me-3" onClick={() => setShowPassword2(!showPassword2)}>
                          {showPassword2 ? <LiaEye /> : <LiaEyeSlash />}
                        </span>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                
                <div className="d-flex flex-column flex-lg-row justify-content-center w-100 mt-lg-2 ">
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      label={<>I Agree with all of your <Link to="/terms" className="text-primary-emphasis">Terms & Conditions</Link></>}
                      required
                    />
                  </Form.Group>
                  <div className="w-50 mx-auto">
                    <Button className="w-100 mb-3 hbtn hb-fill-right border-0 rounded-0" type="submit" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Create Account →"}
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <div className="border-bottom">
                    <p style={{ color: '#4E5566' }}>Sign up with:</p>
                  </div>
                  <div className="d-flex justify-content-center gap-3 Sign-with mt-3">
                    <Link to="/google" className="d-flex text-dark">
                      <div className="border-end h-100 p-2"><FcGoogle /></div>
                      <div className="p-2">Google</div>
                    </Link>
                    <Link to="/facebook" className="d-flex text-dark">
                      <div className="border-end p-2"><FaFacebookF /></div>
                      <div className="p-2">Facebook</div>
                    </Link>
                    <Link to="/apple" className="d-flex text-dark">
                      <div className="border-end p-2"><FaApple /></div>
                      <div className="p-2">Apple</div>
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Signup;
