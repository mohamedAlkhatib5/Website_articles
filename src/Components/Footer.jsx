 import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, } from "react-icons/fa";
import { Container ,Row, Col } from "react-bootstrap";

  import { Link } from "react-router";
import mylogo from'../assets/img/GraduationCap.png'
import app1 from'../assets/img/apple 1.png'
import app2 from'../assets/img/Group 10.png'
import '../pages.css/Footer.css'


export default function Footer() {
   return ( 
<footer className=" text-white pt-10 pb-1 " style={{background:'#1D2026' }}>

{/* **************part bottom******************* */}

<div className="   pt-10 border-top border-bottom  border-secondary py-5 text-lg-start  text-center ">
<Container className="px-0">
       <Row className="px-0 w-100 mx-0">
                      <Col  xs={12} sm={12} md={12} lg={4}>


       
        <Link to='/' className=' text-white d-flex mb-3 text-secondary justify-content-center justify-content-lg-start ps-0 ' style={{textDecoration:'none'}}> <img src={mylogo} alt="" className="me-2" style={{width:'46px' ,height:'46px'}}/> <span className="text-white  fs-2  fw-semibold">Articula</span>  </Link> 
      <p className="text-sm text-gray-400 ">
        Aliquam rhoncus ligula est, non pulvinar <br /> elit convallis nec. Donec in ante ac.
      </p>
      <div className="d-flex space-x-3 mt-4 icons justify-content-center  justify-content-lg-start my-lg-2 my-5">
        <Link to="/"  className="p-2 mx-2 d-flex justify-content-center "> <FaFacebookF className="text-white " /></Link>
        <Link to="/" className="p-2 mx-2  d-flex justify-content-center "> <FaInstagram className="text-white " /></Link>
        <Link to="/"className="p-2 mx-2 d-flex justify-content-center "> <FaLinkedinIn  className="text-white "/></Link>
        <Link to="/" className="p-2 mx-2 d-flex justify-content-center "> <FaTwitter className="text-white " /></Link>
        <Link to="/" className="p-2 mx-2 d-flex justify-content-center  "> <FaYoutube className="text-white " /></Link>
        


   
      </div>
</Col>
 <Col  xs={12} sm={12} md={12} lg={8 }  className=" d-flex justify-content-between text-staer flex-lg-row flex-md-row flex-column  ">

        <div>
      <p className="text-white  fs-4 mb-3 ">Top 4 Category</p>
      <ul className="  text-secondary  ps-1" >
        <li > <Link to="/"  >Development <span>→</span></Link></li>
        <li > <Link to="/"  >Finance & Accounting <span>→</span></Link></li>
        <li > <Link to="/" >Design <span>→</span></Link></li>
        <li > <Link to="/" >Business <span>→</span></Link></li>
      </ul>
    </div>

    <div>
      <p className="text-white fs-4 mb-3">Quick Links</p>
      <ul className="  text-secondarY   ps-1 "  >
        <li > <Link to="/" >About <span>→</span></Link></li>
        <li > <Link to="/" >Become an author <span>→</span></Link></li>
        <li > <Link to="/"  >Contact <span>→</span></Link> </li>
        <li > <Link to="/" >Career<span>→</span></Link> </li>
       
      </ul>
    </div>



      <div>
      <p className="text-white fs-4 mb-3">Support</p>
      <ul className="  text-secondary    ps-1"  >
        <li > <Link to="/"  >Help Center<span>→</span></Link></li>
        <li > <Link to="/Faqs" >FAQs<span>→</span></Link></li>
        <li > <Link to="/" >Terms & Conditions<span>→</span></Link></li>
        <li > <Link to="/"  >Privacy Policy<span>→</span></Link></li>

      </ul>
    </div>
 
  
    <div className="  items-center justify-between border-t border-gray-800 pt-6   ">

    <div className="d-flex justify-content-center  justify-content-lg-start flex-column">
        <p className="text-white fs-4 mb-3">Downlaod our app</p>
      <button className="d-flex justify-content-center  px-2 py-2    text-white text-sm mb-2 mx-5 mx-lg-0 border-none border-0" >
         <div className="h-100  ">
           <img src={app1} alt="" style={{width:'32px',height:'32px'}} className="mx-2 my-2"/>
        </div>
       
     <div className="">
         <span className="text-secondary">Download Now</span> <br />
      <span>App Store </span>
         
     </div>
     

      </button>
      <button className="d-flex justify-content-center   px-2 py-2  text-white text-sm mx-5 mx-lg-0 border-none border-0 " >
        <div className="h-100  ">
           <img src={app2} alt="" style={{width:'32px',height:'32px'}} className="mx-2 my-2"/>
        </div>
       
        <div className="">
     <span className="text-secondary">Download Now</span><br />Play Store
     </div>
      </button>
    </div>
</div>


  
</Col>
</Row>
    
</Container>
  </div>
   <p className="text-secondary text-sm text-center">&copy; 2025 - All rights reserved</p>
</footer>

); }
