// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import'../pages.css/about.css';

import NavbarLink from '../Components/Navbar.jsx';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import imghero from '../assets/img/Images (1).png';

import { ImQuotesLeft } from "react-icons/im";

import { ImQuotesRight } from "react-icons/im";
import Footer from '../Components/Footer.jsx';

import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// img
import companies1 from'../assets/img/companies (1).png'
import companies2 from'../assets/img/companies (2).png'
import companies3 from'../assets/img/companies (3).png'
import companies4 from'../assets/img/companies (4).png'
import companies5 from'../assets/img/companies (5).png'
import companies6 from'../assets/img/companies (6).png'
import companies7 from'../assets/img/companies (7).png'
import companies8 from'../assets/img/companies (8).png'
import icon1 from '../assets/img/img-icon-about (1).png'
import icon2 from '../assets/img/img-icon-about (2).png'
import icon3 from '../assets/img/img-icon-about (3).png'
import icon4 from '../assets/img/img-icon-about (4).png'
import icon5 from '../assets/img/img-icon-about (5).png'
import img2 from '../assets/img/two-business-partners-working-office 1.png';
import img3 from '../assets/img/Gallery.png';
import { Container ,Row, Col } from "react-bootstrap";
import { getTestimonials } from '../apis-fetch/fetch-testimonials.js';





const About = () => {
  const [testimonials, setTestimonials] = useState([]);

    

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getTestimonials();

      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  const logos = [
      companies1, companies2, companies3, companies4,
      companies5, companies6, companies7, companies8,
    ];
  return (
    
    <>
    <Helmet>
  <title>About | Articula </title>
  <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
  <meta name="keywords" content="online learning, articles, Articula , react website" />
 <meta charset="UTF-8" />
 {/* img in public href */}
 <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
 
 
</Helmet>
    <NavbarLink/>
 <div className="d-flex justify-content-center flex-column  bg-Border  w-100  py-3 mt-lg-0 mt-5  text-center lh-sm" style={{background:'#F5F7FA'  }}>
      <p className='fs-4 '>About</p>
      <div className="d-flex justify-content-center text-center link-header  "style={{textDecoration:'none'}}  >
         <Link to='/ '  className=' text-secondary'>Home</Link>/<Link to='/about' className=' text-dark'>About</Link>
      </div>
</div>


 {/* ******************* */}
<section>
       <Container className="px-lg-0">
       <Row className="  w-100  px-lg-0 mx-lg-0">
   <Col  xs={12} sm={12} md={6} lg={6} className=' px-lg-0   py-lg-5  pt-5 pt-lg-5 '>
   
        <p className='mt-lg-5' style={{ fontSize:'80px ' ,fontWeight:'600' , color:'#F5F7FA',lineHeight:'80px'}}>2011-2025</p>
        <p  style={{ fontSize:'50px ' ,fontWeight:'600' ,lineHeight:'60px'}}>We share knowledge <br  className='d-lg-flex d-none' /> with the world</p>
        <p className='text-secondary mt-4'>Interdum et malesuada fames ac ante ipsum primis in <br /> faucibus. Praesent fermentum quam mauris. Fusce  <br />tempor et augue a aliquet. Donec non ipsum non risus <br />egestas tincidunt at vitae nulla.  </p>
  </Col>
       <Col  xs={12} sm={12} md={6} lg={6} className='  px-lg-0   py-lg-5  ps-lg-5 pt-5 pt-lg-5 pe-0 '>

        <img src={imghero} alt="" className='w-100 h-100 ' />
 </Col>
</Row>
</Container>
</section>
{/* ******************* */}
 <section className='section  border-top py-5'>
               <Container className="px-lg-0 ">
                  <Row className="w-100 px-lg-0 mx-0">
                           <Col  xs={12} sm={12} md={6} lg={5} className='   d-flex flex-column  text-lg-start text-center '>

                   
                    <div className="fs-2 text mb-3 fw-semibold lh-sm">
                  We Just keep growing <br /> with 6.3k Companies
                    </div>
                    <p  className=''>  Nullam egestas tellus at enim ornare tristique. <br />Class aptent taciti sociosqu ad litora torquent <br /> per conubia nostra.</p>
        </Col>
      
   <Col xs={12} sm={12} md={6} lg={7} className='px-lg-0 pe-lg-0 justify-content-end   align-item-end '>
            <Row className=" gy-3 px-lg-0 w-100 pe-0 mx-0">
              {logos.map((logo, idx) => (
                <Col key={idx} xs={6} lg={3} className="d-flex justify-content-center  align-items-end pe-0">
                  <div
                    className="w-100  h-100 mx-0  d-flex justify-content-center align-items-center card-logs"
           
                  >
                    <img src={logo}  className="w-100" />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
                
           </Row>
                  
                 <div className="d-flex flex-wrap  justify-content-evenly mt-5 pt-5  w-100 px-lg-0 mx-lg-0">
                    <div className=" d-flex  ms-0  ps-0 mx-md-3">
                        <img src={icon5} alt="" style={{width:'40px',height:'40px'}} className='me-3'/>
                        <div className=" ">
                            <p className='fw-bolder fs-4'>67.1k</p>
                            <p className='text-secondary fs-5'>students</p>
                        </div>
                    </div>
                    <div className=" d-flex mx-3">
                        <img src={icon1} alt="" style={{width:'40px',height:'40px'}} className='me-3'/>
                        <div className=" ">
                            <p className='fw-bolder fs-4'>26k</p>
                            <p className='text-secondary fs-5'>Certifeied  <br  className='d-lg-none d-flex' />instructor</p>
                        </div>
                    </div>
                    <div className=" d-flex  mx-3">
                        <img src={icon2} alt="" style={{width:'40px',height:'40px'}} className='me-3'/>
                        <div className=" ">
                            <p className='fw-bolder fs-4'>72</p>
                            <p className='text-secondary fs-5'>Country <br  className='d-lg-none d-flex' />Language</p>
                        </div>
                    </div>
                    <div className=" d-flex mx-3 ">
                        <img src={icon3} alt="" style={{width:'40px',height:'40px'}} className='me-3'/>
                        <div className=" ">
                            <p className='fw-bolder fs-4'>99.9%</p>
                            <p className='text-secondary fs-5'>Success Rate</p>
                        </div>
                    </div>
                    <div className=" d-flex  mx-3  me-0">
                        <img src={icon4} alt="" style={{width:'40px',height:'40px'}} className='me-3'/>
                        <div className=" ">
                            <p className='fw-bolder fs-4'>57</p>
                            <p className='text-secondary fs-5'>trusted  <br  className='d-lg-none d-flex' /> companies</p>
                        </div>
                    </div>
                 </div>
               
           </Container>
</section>

{/* ******************* */}
             <section  style={{background: ' #FFEEE8' }}>
 <Container className="px-lg-0 ">
      <Row className=" w-100  px-lg-0 mx-lg-0 text-lg-start text-center">
       <Col  xs={12} sm={12} md={6} lg={6} className='  px-lg-0  order-lg-1 order-2'>

 
        <img src={img2} alt="" />
  </Col>
         <Col  xs={12} sm={12} md={6} lg={6} className='  d-flex flex-column justify-content-center  order-lg-2 order-1'>


        <p style={{color:' #FF6636' }}> OUR ONE BILLION MISSION</p>
        <p className='fs-2  mb-3 fw-semibold lh-sm'>Our one billion mission <br /> sounds bold, We agree.</p>
        <p>"We cannot solve our problems with  the same thinking we used when <br  className='d-lg-flex d-none' /> we created them."—Albert Einstein. Institutions are slow to change. <br  className='d-lg-flex d-none' />  Committees are where good ideas and innovative thinking go to die. <br  className='d-lg-flex d-none' />  Choose agility over dogma. Embrace and drive change. We need to <br  className='d-lg-flex d-none' />  wipe the slate clean and begin with bold, radical thinking.</p>
  </Col>

</Row>
</Container>
             </section>
{/* ******************* */}

<section style={{background: '  #F5F7FA' }} >
  <Container className="px-lg-0">
  <Row className="  w-100  px-lg-0 mx-0 ">
             <Col  xs={12} sm={12} md={5} lg={5} className=' d-flex flex-column justify-content-center  text-center text-lg-start'>

     
        <p style={{color:' #FF6636' }}>OUR GALLERY</p>
        <p className='fs-2  mb-3 fw-semibold lh-sm'>We’ve been here <br /> almost 15 years</p>
       
<p>Fusce lobortis leo augue, sit amet tristique nisi <br  className='d-lg-flex d-none' /> commodo in. Aliquam ac libero quis tellus venenatis <br  className='d-lg-flex d-none' /> imperdiet. Sed sed nunc libero. Curabitur in urna ligula. <br  className='d-lg-flex d-none' />  torquent per conubia nostra.</p>   
<div className=" my-3  ">
    <Link to='/' className="text-decoration-none  p-2  px-4    button-style text-center hbtn hb-fill-right  "   >
    Join our team <span>→</span>
    </Link>
</div>
 </Col>
              <Col  xs={12} sm={12} md={7} lg={7} className='py-5 px-0'>

<img src={img3} alt="" />
       </Col>
    </Row>
</Container>
</section>
 {/* ******************* */}

 <section className='pe-lg-0'>
  <Container className="px-lg-0 py-5">
   
     <Swiper
    className='pb-5'
     modules={[Pagination]}
    //  loop={true}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}>
  {testimonials.map((item, index) => (
    <SwiperSlide key={index}>
      <div className='d-flex justify-content-center flex-column card-idea h-100 p-3 position-relative'>
        <div className="bg-light  message">
            <div className=" text-center p-4"  style={{height:'300px',overflow:'hidden'}}>
          <div className="text-start fs-3" style={{ color: '#FF6636' }}>
            <ImQuotesLeft />
          </div>
          <div
            style={{
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}

            className="mb-0 fs-5 fw-normal"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
          <div className="text-end fs-3" style={{ color: '#FF6636' }}>
            <ImQuotesRight />
          </div>

        
        </div>
  <div className="triangle-down  "></div>
        </div>
      
        <div className="mt-4 text-center">
          <div className=""></div>
          <img
            src={`https://tamkeen-dev.com${item.image}`}
            alt={item.full_name}
            className="rounded-circle mb-2"
         style={{ borderRadius: '50%', width: '60px', height: '60px', marginRight: '8px' }}
          />
          <p className="mb-0 fs-5">{item.full_name}</p>
          <p className="text-warning">
            {'★'.repeat(Number(item.rating)) + '☆'.repeat(5 - Number(item.rating))}
          </p>
        </div>
      </div>
    </SwiperSlide>

  ))}
</Swiper> 



  </Container>
</section>

 <Footer/>

    </>
 
  )
}

export default About