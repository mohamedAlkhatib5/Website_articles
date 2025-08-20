// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import imghero from '../assets/img/Images.png';
import '../pages.css/home.css';
import { Container, Row, Col } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { AiFillSignal } from "react-icons/ai";
import { RiFileEditLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";


import NavbarLink from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

// img
import imghero2 from '../assets/img/2.png'
import frame1 from '../assets/img/Frame 145.png'
import frame2 from '../assets/img/Frame 145 (1).png'
import frame3 from '../assets/img/Frame 145 (7).png'
import frame4 from '../assets/img/Frame 145 (2).png'
import frame5 from '../assets/img/Frame 145 (3).png'
import frame6 from '../assets/img/Frame 145 (4).png'
import frame7 from '../assets/img/Frame 145 (5).png'
import frame8 from '../assets/img/Frame 145 (6).png'

import courseimg2 from '../assets/img/Course Images (1).png'
import courseimg1 from '../assets/img/Course Images.png'
import courseimg3 from '../assets/img/Course Images (2).png'
import courseimg4 from '../assets/img/Course Images (3).png'
import courseimg5 from '../assets/img/Course Images (4).png'
import courseimg6 from '../assets/img/Course Images (5).png'
import courseimg7 from '../assets/img/Course Images (6).png'
import courseimg8 from '../assets/img/Course Images (7).png'
import courseimg9 from '../assets/img/Course Images (8).png'
import courseimg10 from '../assets/img/Course Images (9).png'
import courseimg11 from '../assets/img/Course Images (10).png'
import imgcard from '../assets/img/Become .png';
import imgswiper1 from '../assets/img/Image (8).png'
import imgswiper2 from '../assets/img/slider (1).png'
import imgswiper3 from '../assets/img/slider (2).png'
import imgswiper4 from '../assets/img/slider (3).png'
import imgswiper5 from '../assets/img/slider (1).jpg'

// 
import companies1 from '../assets/img/companies (1).png'
import companies2 from '../assets/img/companies (2).png'
import companies3 from '../assets/img/companies (3).png'
import companies4 from '../assets/img/companies (4).png'
import companies5 from '../assets/img/companies (5).png'
import companies6 from '../assets/img/companies (6).png'
import companies7 from '../assets/img/companies (7).png'
import companies8 from '../assets/img/companies (8).png'




import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Navbar } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { useAuth } from '../Contexts/UserContext.jsx';
const Home = () => {

  const { isLoggedIn } = useAuth();
  // ********Mobile swiper********
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 998);
  };

  useEffect(() => {

    checkMobile();


    window.addEventListener('resize', checkMobile);


    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ******************
  const categories = [
    { label: "Label", articles: "63,476", bg: "#EBEBFF", image: frame1, link: "/" },
    { label: "Business", articles: "52,822", bg: "#E1F7E3", image: frame2, link: "/" },
    { label: "Finance & Accounting", articles: "33,841", bg: "#FFF2E5", image: frame3, link: "/" },
    { label: "IT & Software", articles: "22,649", bg: "#FFF0F0", image: frame4, link: "/" },
    { label: "Personal Development", articles: "20,126", bg: "#FFF0F3", image: frame5, link: "/" },
    { label: "Office Productivity", articles: "13,932", bg: "#F5F7FA", image: frame6, link: "/" },
    { label: "Marketing", articles: "12,068", bg: "#EBEBFF", image: frame7, link: "/" },
    { label: "Photography & Video", articles: "6,196", bg: "#F5F7FA", image: frame8, link: "/" },
  ];
  const articles = [
    { image: courseimg1, category: "DESIGN", color: "#993D20", bg: "#FFEEE8" },
    { image: courseimg2, category: "Developments", color: "#342F98", bg: "#EBEBFF" },
    { image: courseimg3, category: "Business", color: "#15711F", bg: "#E1F7E3" },
    { image: courseimg4, category: "Marketing", color: "#342F98", bg: "#EBEBFF" },
    { image: courseimg5, category: "IT & Software", color: "#993D20", bg: "#FFEEE8" },
    { image: courseimg6, category: "Music", color: "#993D20", bg: "#FFEEE8" },
    { image: courseimg7, category: "Marketing", color: "#342F98", bg: "#EBEBFF" },
    { image: courseimg8, category: "Health & Fitness", color: "#15711F", bg: "#E1F7E3" },
    { image: courseimg9, category: "Design", color: "#993D20", bg: "#FFEEE8" },
    { image: courseimg10, category: "Lifestyle", color: "#993D20", bg: "#FFEEE8" },
  ];
  const logos = [
    companies1, companies2, companies3, companies4,
    companies5, companies6, companies7, companies8,
  ];

  const swiperSlide = [
    {
      id: 1,
      name: "Devon Lane",
      role: "Finance Expert",
      rating: 4.6,
      articles: 30,
      image: imgswiper1,
    },
    {
      id: 2,
      name: "Devon Lane",
      role: "Finance Expert",
      rating: 4.6,
      articles: 30,
      image: imgswiper2,
    },
    {
      id: 3,
      name: "Devon Lane",
      role: "Finance Expert",
      rating: 4.6,
      articles: 30,
      image: imgswiper3,
    },
    {
      id: 4,
      name: "Devon Lane",
      role: "Finance Expert",
      rating: 4.6,
      articles: 30,
      image: imgswiper4,
    },
    {
      id: 5,
      name: "Devon Lane",
      role: "Finance Expert",
      rating: 4.6,
      articles: 30,
      image: imgswiper5,
    },

  ];

  const jobs = [
    {
      id: 1,
      image: courseimg11,
      badge: { text: "DESIGN", color: "#15711F", bg: "#E1F7E3" },
      price: "$300",
      title: "System Analysis",
      experience: "2 Years of experience",
    },
    {
      id: 2,
      image: courseimg5,
      badge: { text: "DESIGN", color: "#993D20", bg: "#FFEEE8" },
      price: "$400~900",
      title: "Frontend Developer (React / Nextjs)",
      experience: "+5 Years of experience",
    },
    {
      id: 3,
      image: courseimg11,
      badge: { text: "DESIGN", color: "#15711F", bg: "#E1F7E3" },
      price: "$400~900",
      title: "UI/UX Designer",
      experience: "2 Years of experience",
    },
    {
      id: 4,
      image: courseimg7,
      badge: { text: "DESIGN", color: "#993D20", bg: "#FFEEE8" },
      price: "$400~900",
      title: "ASP Backend Developer",
      experience: "+3 Years of experience",
    }
  ];
  // ******************

  return (
    < >
      <Helmet>
        <title>Home | Articula </title>
        <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
        <meta name="keywords" content="online learning, articles, Articula , react website" />
        <meta charset="UTF-8" />
        {/* img in public href */}
        <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />


      </Helmet>
      <NavbarLink />
      {/* ********************* */}
      <section className='hero  w-100   mt-lg-0 mt-5   ' >
        <Container className="pe-0">
          <Row className='w-100 px-0'>
            <Col xs={12} sm={12} md={6} lg={6} className='text-hero  justify-content-centar align-items-center py-lg-5 px-0'>

              <div className=" w-100 h-100 ">
                <p className='  mb-3 fw-semibold  lh-1 my-4 '>Learn with expert <br /> anytime anywhere</p>
                <p className='mt-4  '>Our mission is to help people to find the best source <br /> online and learn with expert anytime, anywhere.</p>
                <div className="  buttons  py-2  d-flex my-3 ">

                  <Link to='/Article'
                    className=" me-2 py-2 px-4 border-0  button-style"
                    style={{ background: 'black', color: 'white' }}>


                    Start Reading
                  </Link>

                  <Link
                    to='/Signup'
                    className="p-2  px-3  hbtn hb-fill-right"
                  >

                    Create Account
                  </Link>




                </div>

              </div>


            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className='img-hero  pe-0'>

              <img src={imghero} alt="" className='d-lg-flex d-none w-100 h-100' />
              <img src={imghero2} alt="" className='d-lg-none w-100 h-100' />

            </Col>
          </Row>
        </Container>
      </section>
      {/* ********************* */}

      <section  >
        <Container className="py-5 p-lg-0 pe-0 px-lg-0 pe-lg-0 py-lg-5   position-relative">
          <h2 className="text-center mb-4 p-0 pe-0">Browse top category</h2>
          <Row className="g-2  w-100  px-lg-0 mx-lg-0 ">
            {categories.map((cat, index) => {

              return (
                <Col key={index} xs={6} sm={6} md={4} lg={3} className=' pe-0 ps-1'>

                  <div className="category-box h-100  " style={{ backgroundColor: cat.bg }}>
                    <img src={cat.image} alt={cat.label} className="category-icon" />
                    <div className="text-start ">
                      <h6>{cat.label}</h6>
                      <p>{cat.articles} Articles</p>
                    </div>
                  </div>

                </Col>
              );
            })}
          </Row>
          <Row className='mt-4 w-100'>

            <Col xs={12} sm={12} md={12} lg={7} className=' d-flex  justify-content-lg-end justify-content-md-center justify-content-center pe-lg-0  '>
              <p style={{ color: "#4E5566" }}>We have more category & subcategory.</p>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} className=' d-flex  justify-content-lg-start justify-content-md-center  justify-content-center ps-lg-1 '  >


              <Link to="/Article" className="text-decoration-none link-all m-0 ms-2">
                Browse All <span>→</span>
              </Link>
            </Col>


          </Row>
        </Container>
      </section>



      {/* ********************* */}








      <section className="section-3 py-5">
        <Container className=' p-lg-0 px-lg-0'>
          <h2 className="text-center mb-4">Latest Articles</h2>
          <div className="article-cards d-flex p-0 flex-wrap  justify-content-center">
            {articles.map((article, index) => (
              <Link to="/" key={index} className="article-card d-block my-2 my-lg-1 ">
                <div className="article-img">
                  <img src={article.image} className="" alt="article" />
                </div>

                <div className="p-2">
                  <span
                    className="badge-category"
                    style={{ color: article.color, background: article.bg }}
                  >
                    {article.category}
                  </span>
                  <h6 className="mb-1 mt-3  text-dark  fs-5 ">2021 Complete Python <br /> Bootcamp From Zero to Hero...</h6>

                </div>
                <div className="article-meta border-top py-3 pb-4 ps-2">
                  <BsPersonCircle className='icon' />  Mohammed Issa
                </div>
                <div className="date">
                  5 Aug, 2025
                </div>
              </Link>

            ))}
          </div>
        </Container>
      </section>

      {/* ********************* */}


      <section className='setion-4 p-lg-0  pe-lg-0'>
        <div className="gray d-none d-lg-flex">

        </div>
        <Container className="position-relative px-lg-0 pe-lg-0">

          <div className=" job-Opprtunities p-lg-5 pe-0 me-0 py-5 m-0">
            <div className="container-lg  px-0 pe-0 ">
              <div className=" d-flex justify-content-between  flex-lg-row flex-column  text-center text-lg-start ">
                <h4 className='' style={{ fontSize: '30px' }}>Our Job Opportunities</h4>
                <p style={{ color: ' #4E5566' }}>Vestibulum sed dolor sed diam mollis maximus vel nec dolor. <br /> Donec varius purus et eleifend porta.</p>
              </div>


              <Row className='w-100 px-0 pe-0 mx-0'>
                {jobs.map(job => (
                  <Col key={job.id} xs={12} sm={12} md={6} lg={6} className="border shadow-md d-flex mb-3 card-job p-0 pe-0">
                    <div className="img-job">
                      <img
                        src={job.image}
                        alt={job.title}
                        className=" h-100 w-100"
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
                        <span><RiFileEditLine className='text-primary-emphasis me-1' />Fulltime</span>
                        <span><AiFillSignal className='text-danger me-1' />Senior</span>
                        <span><IoTimeOutline className='text-success me-1' />Full Time</span>
                      </div>
                    </div>
                  </Col>
                ))}

                <Row className='mt-4 w-100'>

                  <Col xs={12} sm={12} md={12} lg={7} className=' d-flex  justify-content-lg-end justify-content-md-center justify-content-center pe-lg-0  '>
                    <p style={{ color: "#4E5566" }}>We have more category & subcategory.</p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={5} className=' d-flex  justify-content-lg-start justify-content-md-center  justify-content-center ps-lg-1 '  >


                    <Link to="/job" className="text-decoration-none link-all m-0 ms-2">
                      Browse All <span>→</span>
                    </Link>
                  </Col>


                </Row>
              </Row>



            </div>

          </div>
        </Container>

      </section>


      {/* ********************* */}
      <section className='setion-5 pb-lg-5  '>
        <Container className="  d-lg-flex  justify-content-between  px-lg-0 py-lg-5">
          <div className="card-left p-lg-0">
            <div className=" d-flex justify-content-between flex-column flex-lg-row me-0 ms-0 p-0 h-100 m-0  w-100">
              <div className="  d-flex align-item-centar justify-content-centar  ">
                <div className="my-auto ms-lg-4  mx-auto w-100 " style={{ height: '80%' }}>
                  <h3 className='mb-2 mt-2'>Become an Author</h3>
                  <p className='mb-4'>Authors from around the world teach  millions  <br />of  students on Udemy.  We provide the <br /> tools and   skills to teach what you love.</p>
                  <Link className=" me-2 p-2 px-3 link-start w-100" style={{ textDecoration: 'none' }} to={isLoggedIn ? '/MyArticles' : '/Signin'}> Start Writing <span className='share'>→</span></Link>
                </div>

              </div>
              <div className="h-100 img p-0 m-0 ">
                <img src={imgcard} alt="" className='mb-0 p-0 h-100 w-100 m-0' />
              </div>


            </div>
          </div>
          <div className="card-right  p-4   ">
            <h3 className=' mb-4  my-lg-4 text-center text-lg-start'>Your teaching & earning steps</h3>
            <div className="d-flex flex-wrap justify-content-between  align-item-center  cards-circle  ">



              <div className=' d-flex align-item-centar justify-content-centar  circle  mb-4'>
                <span style={{ width: '52px', height: '52px', paddingBlock: '11px', borderRadius: '100px', background: '#EBEBFF', color: '#564FFD', textAlign: 'center' }}>1</span>
                <p className='my-auto ms-3'>Apply to become author</p>
              </div>
              <div className=' d-flex align-item-centar justify-content-centar  circle   mb-4'>

                <span style={{ width: '52px', height: '52px', paddingBlock: '11px', borderRadius: '100px', background: '#FFF0F0', color: '#FF6636', textAlign: 'center' }}>2</span>
                <p className='my-auto ms-3'>Build & edit your profile</p>
              </div>
              <div className=' d-flex align-item-centar justify-content-centar circle  mb-4'>



                <span style={{ width: '52px', height: '52px', paddingBlock: '11px', borderRadius: '100px', background: '#FFF0F0', color: '#E34444', textAlign: 'center' }}>3</span>
                <p className='my-auto ms-4 ms-lg-3' >Create your new article</p>
              </div>
              <div className=' d-flex align-item-centar  justify-content-centar circle  mb-4'>
                <span style={{ width: '52px', height: '52px', paddingBlock: '11px', borderRadius: '100px', background: '#E1F7E3', color: '#23BD33', textAlign: 'center' }}>4</span>
                <p className='my-auto ms-3  ' > Start teaching & earning</p>
              </div>




            </div>


          </div>
        </ Container>
      </section>



      {/* ********************* */}

      <section className='setion-6 p-lg-0  '>
        <div className="gray d-none d-lg-flex">

        </div>
        <Container className="position-relative px-lg-0 ">

          <div className="frame2 p-lg-5 pe-0 me-0 py-lg-5 mx-0 ">
            <div className="container-lg p-lg-3  px-0  ">
              <h3 className='text-center mb-5 '>Top Writers</h3>
              {isMobile ? (
                <Swiper

                  modules={[Navigation, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={2}
                  loop={true}
                  // navigation
                  breakpoints={{
                    480: {
                      slidesPerView: 2
                    }

                  }}

                >   {swiperSlide.map((swiperSlide, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="card-swiper border"  >
                      <div className="img-swiper">
                        <img src={swiperSlide.image} alt={swiperSlide.name} className="" />
                      </div>

                      <div className="text-center p-3" style={{ lineHeight: "10px" }}>
                        <p>{swiperSlide.name}</p>
                        <p className="text-secondary">{swiperSlide.role}</p>
                      </div>
                      <div className="d-flex justify-content-between border-top p-1">
                        <p>
                          <span className="mx-2 text-warning">
                            <FaStar />
                          </span>
                          <span>{swiperSlide.rating}</span>
                        </p>
                        <p className="text-secondary">
                          <span className="text-dark">{swiperSlide.articles}</span> Articles
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}




                </Swiper>) : (



                <Row className="desktop-row ">
                  <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={5}


                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                  >

                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                      swiperSlide.map((swiperSlide, idx) => (
                        <SwiperSlide>
                          <Col className=''>
                            <div className="card-swiper border-1 border  ">
                              <img src={swiperSlide.image} alt="" />
                              <div className="text-center p-3 " style={{ lineHeight: '10px' }}>
                                <p>Devon Lane</p>
                                <p className='text-secondary'>Finance Expert</p>
                              </div>
                              <div className=" d-flex justify-content-between  border-top  p-1 ">
                                <p> <span className='mx-2 text-warning'><FaStar /></span><span>4.6</span></p>
                                <p className='text-secondary'>  <span className='text-dark'>30</span> Articles</p>
                              </div>
                            </div>
                          </Col>
                        </SwiperSlide>))
                    ))}


                  </Swiper>
                </Row>
              )}




              <Row className='mt-4 w-100 '>

                <Col xs={12} sm={12} md={12} lg={7} className=' d-flex  justify-content-lg-end justify-content-md-center justify-content-center pe-lg-0  '>
                  <p style={{ color: "#4E5566" }}>We have more category & subcategory.</p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={5} className=' d-flex  justify-content-lg-start justify-content-md-center  justify-content-center ps-lg-1 '  >


                  <Link to="/Article" className="text-decoration-none link-all m-0 ms-2">
                    Browse All <span>→</span>
                  </Link>
                </Col>


              </Row>
            </div>



          </div>
        </Container>
      </section>

      {/* ********************* */}





      <section className="section-7 pt-5 pb-3">
        <Container className='px-lg-0 pe-lg-0 '>
          <Row className="px-0  w-100  mx-0">
            <Col lg={4} md={6} className="text-lg-start text-center mb-4 mb-lg-0">
              <h2 className="fs-2 mb-3">6.3k trusted companies</h2>
              <p>
                Nullam egestas tellus at enim ornare tristique. <br />
                Class aptent taciti sociosqu ad litora torquent <br />
                per conubia nostra.
              </p>
            </Col>

            <Col lg={8} md={6} className='px-0 pe-0 me-0'>
              <Row className=" gy-3 px-0 w-100 pe-0 mx-0">
                {logos.map((logo, idx) => (
                  <Col key={idx} xs={6} lg={3} className="d-flex justify-content-center  align-items-end ps-1 ">
                    <div
                      className="w-100  h-100 mx-0 d-flex justify-content-center align-items-center card-logs"

                    >
                      <img src={logo} className="w-100" />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ********************* */}
      <div className="px-lg-0" style={{ background: ' #1D2026' }}>
        <Container >
          <Row className=" part-top  text-center mb-10  w-100 py-5 px-0">
            <Col lg={6} md={12} className='p-0  fs-2 text-lg-start text-center fw-semibold  pb-5 pb-lg-0  text-white '>
              Start writing with 7.2k users <br /> around <span style={{ color: '#FF6636' }}>the world</span>.

            </Col>

            <Col lg={6} md={12} className='p-lg-0 d-flex justify-content-between  gap-10 mt-6  '>

              <div>
                <p className="text-white fs-3 fw-semibold">6.3k</p>
                <p className="text-sm text-secondary">Online articles</p> </div>
              <div>
                <p className="text-white fs-3 fw-semibold">26k</p>
                <p className="text-sm text-secondary">Certified authors</p>
              </div>
              <div>
                <p className="text-white fs-3 fw-semibold">99.9%</p>
                <p className="text-sm text-secondary">Success Rate</p>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
      {/* ********************* */}
      <Footer />
    </>

  )
}

export default Home


// 




