import 'bootstrap/dist/css/bootstrap.min.css';

// import { Navbar } from 'react-bootstrap'
import { Container ,Row, Col } from "react-bootstrap";

import { Link } from 'react-router';
import imghero from '../assets/img/confident-smiling-businesswoman-writing-notes 1.png';
import img2 from '../assets/img/Union.png';
import frame1 from'../assets/img/Frame 321 (7).png'
import frame2 from'../assets/img/Frame 321 (6).png'
import frame3 from'../assets/img/Frame 321 (5).png'
import frame4 from'../assets/img/Frame 321 (4).png'
import frame5 from'../assets/img/Frame 321 (3).png'
import frame6 from'../assets/img/Frame 321 (2).png'
import frame7 from'../assets/img/Frame 321 (1).png'
import frame8 from'../assets/img/Frame 321.png'
import { Helmet } from 'react-helmet';

import courseimg1 from'../assets/img/Course Images (4).png'

import courseimg2 from'../assets/img/Course Images (6).png'

import courseimg3 from'../assets/img/Course Images (10).png'

import { IoTimeOutline } from "react-icons/io5";
import { AiFillSignal } from "react-icons/ai";
import { RiFileEditLine } from "react-icons/ri";


import { FaCircleCheck } from "react-icons/fa6";
import NavbarLink from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';



const Job = () => {
  const categories = [
    { label: "Healthy Food & Snacks", bg: " #FFF2E5", image: frame8  },
    { label: "Personal Career Growth",  bg: "#EBEBFF", image: frame7},
    { label: "Finance & Accounting",  bg: "#E1F7E3", image: frame6 },
    { label: "Vacation & Paid Time Off",  bg: "#FFF2E5", image: frame5 },
    { label: "Competitive Salary", bg: "#E1F7E3", image: frame4 },
    { label: "Well-being memberships", bg: "#FFF2E5", image: frame3 },
    { label: "Paternity Benefits",  bg: "#F5F7FA", image: frame2 },
    { label: "Eduguard Annual Events", bg: "#EBEBFF", image: frame1 },
  ];
  const jobs = [
      {
        id: 1,
        image: courseimg3,
        badge: { text: "DESIGN", color: "#15711F", bg: "#E1F7E3" },
        price: "$300",
        title: "System Analysis",
        experience: "2 Years of experience",
      },
      {
        id: 2,
        image:courseimg2 ,
        badge: { text: "DESIGN", color: "#993D20", bg: "#FFEEE8" },
        price: "$400~900",
        title: "Frontend Developer (React / Nextjs)",
        experience: "+5 Years of experience",
      },
      {
        id: 3,
        image: courseimg3,
        badge: { text: "DESIGN", color: "#15711F", bg: "#E1F7E3" },
        price: "$400~900",
        title: "UI/UX Designer",
        experience: "2 Years of experience",
      },
      {
        id: 4,
        image: courseimg1,
        badge: { text: "DESIGN", color: "#993D20", bg: "#FFEEE8" },
        price: "$400~900",
        title: "ASP Backend Developer",
        experience: "+3 Years of experience",
      }
    ];
  
  
  return (
    <>
             <Helmet>
      <title>Jobs | Articula </title>
      <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
      <meta name="keywords" content="online learning, articles, Articula , react website" />
     <meta charset="UTF-8" />
     {/* img in public href */}
     <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
     
     
    </Helmet>
    <NavbarLink/>
    {/* ******************* */}
     <div className="d-flex justify-content-center flex-column  bg-Border  w-100  py-3 mt-lg-0 mt-5    text-center lh-sm" style={{background:'#F5F7FA'  }}>
      <p className='fs-4 '>Jobs</p>
      <div className="d-flex justify-content-center text-center link-header  "style={{textDecoration:'none'}}  >
         <Link to='/ '  className=' text-secondary'>Home</Link>/<Link to='/job' className=' text-dark'>Jobs</Link>
      </div>
</div>
  
{/* ******************* */}
  
  <section >
             <Container className=" px-0  ">
    <Row className='w-100 px-0 mx-0'>
     <Col  xs={12} sm={12} md={6} lg={6} className="d-flex flex-column justify-content-center      text-center text-lg-start p-lg-0 "> 

            <div >
             
               
          <p className='  ' style={{ fontSize:'40px ' ,fontWeight:'600' ,lineHeight:'50px'}}>Join the most incredible <br  className='d-lg-flex d-none' /> & creative team.</p>
      <p>Proin gravida enim augue, dapibus ultrices eros feugiat et <br  className='d-lg-flex d-none' /> . Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac <br  className='d-lg-flex d-none' /> . Mauris gravida justo ac nunc consectetur.</p>  
 <div className=" my-3 py-2">
      <Link to='/' className="text-decoration-none  p-2  px-4  my-3    text-center  hbtn hb-fill-right   "     >
View Open Positions
      </Link>
  </div>
                </div>
       
</Col> 
       
     <Col  xs={12} sm={12} md={6} lg={6}className="  p-0 align-items-start px-0">

  <img src={imghero} alt=""  className='w-100 h-100'/>
        </Col>
    </Row>
 </Container>
  </section>
  {/* ******************* */}
  
  <section style={{background: '  #F5F7FA' }} >
  
                     <Container className=" px-lg-0 py-5  ">

       <Row className='w-100 px-lg-0 mx-0'>
             <Col  xs={12} sm={12} md={6} lg={6}  className="  order-lg-1 order-2 py-5 py-lg-0 pe-lg-0 px-lg-0">

  <img src={ img2} alt="" className='w-100 h-100'/>
       </Col>
           <Col  xs={12} sm={12} md={6} lg={6}  className=" d-flex flex-column justify-content-center align-items-end  text-center text-lg-start  order-lg-2 order-1 px-lg-0">

                <div className="ps-lg-5 px-0">
                     <p className='fs-1  mb-2 fw-semibold '>Why you will join our team</p>
         <p className='text-secondary'>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis<br  className='d-lg-flex d-none' /> Vestibulum non consectetur tortor. Morbi at orci vehicula <br  className='d-lg-flex d-none' /> vehicula mi ut, vestibulum odio. </p>
         <div className="d-flex  mb-3  p-lg-4 p-2 text-start" style={{boxShadow:'0px 4px 50px 0px #1D20260D' }}>
            <div className="">
                <FaCircleCheck   className='text-success  mx-2 fs-3  '/>
            </div>
            <div className="" >
               

                <p className='fs-5  mb-2 fw-semibold '>Ut justo ligula, vehicula sed egestas vel.</p>
                <p className='text-secondary'>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis <br  className='d-lg-flex d-none' /> Vestibulum non consectetur tortor. Morbi at orci vehicula <br  className='d-lg-flex d-none' /> vehicula mi ut, vestibulum odio. </p>
            </div>

         </div>
         <div className="d-flex  p-lg-4  p-2  text-start" style={{boxShadow:'0px 4px 50px 0px #1D20260D' }}>
            <div className="">
                <FaCircleCheck   className='text-success  mx-2 fs-3  '/>
            </div>
             
<div className="">

    <p className='fs-5  mb-2 fw-semibold '>Aenean vitae leo leo praesent ullamcorper ac.</p>
    <p className='text-secondary'>Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis <br  className='d-lg-flex d-none' />. Aenean vel erat at neque viverra feugiat. </p>
</div>
         </div>
                </div>
        
    </Col>
        
 </Row>
  </Container>
  </section>
  {/* ************************ */}
      <section>
      <Container className=" px-lg-0 py-5  ">

      <h2  className="text-center mb-4 ">Our Perks & Benefits</h2>
       <Row className="g-4  w-100 px-lg-0 mx-0">
                {categories.map((cat, index) => {
                
                  return (
                    <Col key={index} xs={6} sm={6} md={4} lg={3}  className='px-lg-1 '>
                    
                             <div  className="  d-flex  flex-row justify-content-around  px-lg-2 px-1 mx-0 py-3 h-100 "  style={{ backgroundColor: cat.bg,paddingInlineEnd:cat.pe ,paddingInlineStart:cat.ps }} >
                <div className=" w-50 d-flex justify-content-center">
                    <img src={cat.image} alt="" style={{width:'70px' ,height:'70px'}}/>
            
                </div>
            
              <div className=" text-start mt-3 w-75 px-2   ">
          <p>{cat.label}</p>
              </div>
              
            </div> 
      
        
            
                      
                    </Col>
                  );
                })}
              </Row>
    
         
         
   </Container>
      </section>
       {/* ************************ */}
  <section  style={{background: '  #F5F7FA' }} className=''>
           <Container className="py-5 px-lg-0 ">
 
    <p className='fs-1  mb-3 fw-semibold text-center'  >Our all open positions (04)</p>
   
    <Row className='w-100 px-lg-0 mx-0  '>
      {jobs.map(job => (
        <Col key={job.id} xs={12} sm={12} md={12} lg={6} className="px-lg-1 px-lg-0 mx-lg-0 mb-2">
        <div className="border shadow-md d-flex mb-3 card-job ps-0 w-100 h-100 ">
          <div className="img-job">
                            <img 
            src={job.image} 
            alt={job.title} 
            className="h-100 w-100 " 
          />
          </div>
   
          
          <div className="p-3 flex-grow-1 text-job">
            <div className="d-flex justify-content-between align-items-center">
              <span 
                className="badge-category  px-2 py-1" 
                style={{
                  color: job.badge.color,
                  background: job.badge.bg
                }}
              >
                {job.badge.text}
              </span>
              <div className="text-lg fw-bold">
                {job.price} 
                <span className='text-body-tertiary'>/ Month</span>
              </div>
            </div>

            <h6 className="text-xl fw-semibold mt-2">{job.title}</h6>
            <p className="text-sm text-gray-600">{job.experience}</p>
            
            <div className="d-flex flex-wrap gap-2 mt-2 text-sm justify-content-between border-top py-2 flex-lg-row flex-column">
              <span><RiFileEditLine className='text-primary-emphasis me-1'/>Fulltime</span>
              <span><AiFillSignal className='text-danger me-1'/>Senior</span>
              <span><IoTimeOutline className='text-success me-1' />Full Time</span>
            </div>
          </div>
        </div>
 
        </Col>
      ))}


    </Row>


                 
</Container>

  </section>
<Footer/>
    </>
 
  )
}
export default Job