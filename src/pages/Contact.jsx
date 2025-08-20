import 'bootstrap/dist/css/bootstrap.min.css';

import'../pages.css/contact.css';
import NavbarLink from '../Components/Navbar.jsx';

import {  Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import { MdOutlineEmail } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import Footer from '../Components/Footer.jsx';


// img
import map from '../assets/img/google-placeholder.png'
import imghero from '../assets/img/Fit.png'
import card1 from '../assets/img/card.jpg'
import card2 from '../assets/img/card (1).jpg'
import card3 from '../assets/img/card (4).jpg'
import card4 from '../assets/img/card (5).jpg'
import { Container ,Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';


const Contact = () => {
 const [mapLoaded, setMapLoaded] = useState(false);
const [showFallback, setShowFallback] = useState(false);
// ************Google Map*********
useEffect(() => {
  const timer = setTimeout(() => {
    if (!mapLoaded) {
      setShowFallback(true); 
    }
  }, 2000);

  return () => clearTimeout(timer);
}, [mapLoaded]);
// ******************************
  return (
    <>
         <Helmet>
          <title>Contact | Articula  </title>
          <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
          <meta name="keywords" content="online learning, articles, Articula , react website" />
         <meta charset="UTF-8" />
         {/* img in public href */}
         <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
         
         
        </Helmet>
     <NavbarLink/>
     <div className="d-flex justify-content-center flex-column  bg-Border  w-100  py-3  mt-lg-0 mt-5  text-center lh-sm" style={{background:'#F5F7FA'  }}>
      <p className='fs-4 '>Contact</p>
      <div className="d-flex justify-content-center text-center link-header  "style={{textDecoration:'none'}}  >
         <Link to='/ '  className=' text-secondary'>Home</Link>/<Link to='/contact' className=' text-dark'>Contact</Link>
      </div>
</div>
  
{/* ******************* */}
  
  <section style={{ }}  className='pe-0'>
      <Container className=" px-lg-0 pe-lg-0 ">
      
      <Row className=" w-100  px-lg-0 py-0">
 <Col  xs={12} sm={12} md={6} lg={6} className=" d-flex flex-column justify-content-center    ps-lg-0   text-center text-lg-start p-lg-0 p-5 p-lg-0 ">
        
       
                <div className=" ">
               
          <p className='fs-1  mb-3 fw-semibold '>Connect with us</p>
         
<p>Want to chat? We’d love to hear from you! Get in <br  className='d-lg-flex d-none' />  touch with our Customer Success Team to inquire <br  className='d-lg-flex d-none' />  about speaking events, advertising rates, or just <br  className='d-lg-flex d-none' />  say hello.</p> 
 <div className=" my-3">
      <Link to='/' className="text-decoration-none  p-2  px-4    text-center hbtn hb-fill-right "     >
    <MdOutlineEmail className='me-2 fs-5 mb-1 '/>  Copy Email
      </Link>
  </div>
                </div>
       
  </Col>
                                     <Col  xs={12} sm={12} md={6} lg={6} className=" p-0 py-0">

       
  <img src={imghero} alt=""  className='w-100 h-100'/>
      </Col>
     </Row>
        </Container>
  </section>
  {/* ******************* */}
  <section className='border-top pe-lg-0'>
     <Container className=" px-lg-0 pe-lg-0  d-flex  flex-column justify-content-center   pt-4 ">

    <p className='fs-1  mb-3 fw-semibold text-center'>
        Our branches all over the world.
    </p>
    <p className='lh-sm text-center  text-secondary'>
        Phasellus sed quam eu eros faucibus cursus. Quisque mauris <br  className='d-lg-flex d-none' />  urna, imperdiet id leo quis, luctus auctor nisi. 
    </p>
        <Row className=" w-100  px-0 mt-5  ">
                                               <Col  xs={6} sm={6} md={6} lg={3} className=" col-lg-3  col-6 py-lg-0 py-4  pe-0 ps-lg-0">


        <div className="position-relative  overflow-hidden card-img" >
            <img src={card2} alt=""  className='object-fit-cover w-100 h-100'/>
<div   className="position-absolute bg-white  shadow  card-small text-center bg-white  px-lg-4  p-2  " >
     <p className='fs-5  mb-2 fw-semibold '>Damascus, Syria</p>
     <p>Lorem Ipsum doller<br  className='d-lg-flex d-none  text-secondary'/>Duis aute irure, No. 6548</p>
</div>
        </div>

 </Col>
                                                <Col  xs={6} sm={6} md={6} lg={3} className=" col-lg-3  col-6    py-lg-0 py-4  pe-0">

        <div className="position-relative  overflow-hidden  card-img  " >
            <img src={card4} alt=""  className='object-fit-cover w-100 h-100'/>
<div   className="position-absolute bg-white  shadow  card-small text-center bg-white  px-lg-4  p-2  " >
     <p className='fs-5  mb-2 fw-semibold '>Amman, Jordan</p>
     <p>Lorem Ipsum doller<br  className='d-lg-flex d-none  text-secondary'/>Duis aute irure, No. 6548</p>
</div>
        </div>

   </Col>  <Col  xs={6} sm={6} md={6} lg={3} className=" col-lg-3  col-6    py-lg-0 py-4  pe-0">
        <div className="position-relative  overflow-hidden card-img  " >
            <img src={card1} alt=""  className='object-fit-cover w-100 h-100'/>
<div   className="position-absolute bg-white shadow  card-small text-center bg-white  px-lg-4  p-2 ">
     <p className='fs-5  mb-2 fw-semibold '>Istanbul, Turkey</p>
     <p>Lorem Ipsum doller<br  className='d-lg-flex d-none  text-secondary'/>Duis aute irure, No. 6548</p>
</div>
        </div>

     </Col>
     <Col  xs={6} sm={6} md={6} lg={3} className=" col-lg-3  col-6    py-lg-0 py-4  pe-0">
   
        <div className="position-relative  overflow-hidden card-img" >
            <img src={card3} alt=""  className='object-fit-cover w-100 h-100'/>
<div   className="position-absolute bg-white shadow  card-small text-center bg-white px-lg-4  p-2 " >
     <p className='fs-5  mb-2 fw-semibold '>Dubai. UAE</p>
     <p>Lorem Ipsum doller<br  className='d-lg-flex d-none  text-secondary'/>Duis aute irure, No. 6548</p>
</div>
        </div>

  </Col>
 </Row>
  </Container>
  </section>
  {/* ******************* */}

  <section className='ps-lg-0 pe-lg-0 section-form'>
     <Container className="py-lg-5  pe-lg-0 ps-lg-0 ">

 
        <p  className='fs-1  mb-3 fw-semibold  text-center'>Contact Us</p>
            <Row className="w-100 ps-lg-0 ps-3">
  
                                         <Col  xs={12} sm={12} md={12} lg={6} className="mb-4 pe-lg-5 py-lg-5 p-0  ps-0 ">

       
          <p className="fw-normal fs-4">Will you be in Los Angeles or any other branches any time soon? Stop by the office! We'd love to meet.</p>
          
          <div className=" d-flex   justify-content-between  ">
                    <p className="text-uppercase   fw-bold mt-4" style={{color:' #FF6636'}}>Address</p>
                    <div className="text-start w-50">
                             <p>Excepteur sint occaecat cupidatat non <br /> proident. Excepteur sint occaecat.</p>
                    </div>
     

          </div>
  <div className="d-flex  justify-content-between border-top ">  
    <p className="text-uppercase  fw-bold mt-4" style={{color:' #FF6636'}}>Phone Number</p>
 <div className="text-start w-50">
       <p>(800) 950-0001<br />(877) 932-3214</p>
 </div>
  
</div>
      <div className="d-flex  justify-content-between  border-top">
              <p className="text-uppercase  fw-bold mt-4" style={{color:' #FF6636'}}>Email Address</p>
              <div className=" text-start w-50">
                 <p>info@arbcuba.com<br />career@arbcuba.com</p> 

              </div>
         
      </div>
    
        </Col>
        {/*  Form */}
                                                 <Col  xs={12} sm={12} md={12} lg={6} className="p-0 pe-0  ">

      
         
        
          <Form className='bg-white p-lg-5 w-100 py-1 me-0'>

              <p className="fw-normal fs-4 mb-4">Get In Touch</p>
          <p  className='text-secondary'>Feel free contact with us, we love to make new partners & friends</p>
           <Row className="w-100 ">
                                                 <Col  xs={6} sm={6} md={6} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>
       </Col>
               <Col  xs={6} sm={6} md={6} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
              </Col>
         </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Message Subject" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Message Content" />
            </Form.Group>
            <Button type="submit " className='hbtn hb-fill-right  border-0 '>
              Send Message   <IoMdSend />

            </Button>
          </Form>
   </Col>
   </Row>
        </Container>
 </section>
 {/* ******Google maps****** */}
 <section className='p-0' style={{ height: '40vh', position: 'relative' }}>
      {!showFallback ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846116.32767111!2d-117.2547674595522!3d34.065876399999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b95edb6ce003%3A0xae0ad4b526330b35!2sBeverly%20Hills%20Oil%20Field!5e0!3m2!1sar!2s!4v1748451430890!5m2!1sar!2s"
          style={{ width: '100%', height: '100%' }}
          onLoad={() => setMapLoaded(true)}
          title="Google Map"
        ></iframe>
      ) : (
        <img
          src={map}
          alt="Fallback Map"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </section>
<Footer/>
 
    </>
  )}
export default  Contact;
