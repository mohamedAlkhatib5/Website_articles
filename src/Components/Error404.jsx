import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Errorimg from '../assets/img/Error404.png'
import NavbarLink from '../Components/Navbar.jsx';

import { Link } from "react-router";
import { Container ,Row, Col } from "react-bootstrap";

const Error404 = () => {
  return (
    <>
     <NavbarLink/>
     
<section  className='pt-5  pt-lg-0 px-0' >
  <Container  className='px-0'>
        <div className="mt-lg-0 mt-5 px-0 " style={{height:'80vh'}}>
        
        <Row style={{height:'80vh'}} className='w-100'> 

                <Col  xs={12} sm={12} md={6} lg={6} className=' pt-lg-5  '>


            <div className="  d-flex align-items-center  justify-content-center  text-lg-start text-center pt-lg-5 h-100 ">
              <div className="w-100">
                <p className='mt-lg-5' style={{ fontSize:'80px ' ,fontWeight:'600' , color:'#F5F7FA',lineHeight:'80px'}}>Error 404</p>
        <p  style={{ fontSize:'50px ' ,fontWeight:'600' ,lineHeight:'60px'}}>Oops! page not found</p>
        <p className='text-secondary mt-4 mb-5'>Something went wrong. It’s look that your requested <br  className='d-lg-flex d-none'/> could not be found. It's look like the link is broken or the <br  className='d-lg-flex d-none'/> page is removed.  </p>
        <div className="  d-flex justify-content-lg-start justify-content-center w-100">
           <Link
                 to='/'
                  className="px-4 py-2 hbtn hb-fill-right   "
                   
                >Go Back
                </Link>
        </div>
        
              </div>
        
    </div>
   </Col>
   
                <Col  xs={12} sm={12} md={6} lg={6} className='py-lg-5 p-0  height-respons '>
 
        <img src={Errorimg} alt="" className='w-100 h-100 ' />
</Col>

</Row>

    </div>
    </Container>
</section>
    </>
 
  )
}

export default Error404