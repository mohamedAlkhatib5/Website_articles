



import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages.css/Navbar.css'; 

import imguser from '../assets/img/Avatar.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Dropdown } from "react-bootstrap";

import { Link, NavLink } from "react-router";


import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import mylogo from '../assets/img/GraduationCap.png';
import { useAuth } from '../Contexts/UserContext';




function NavbarLink() {
  const { isLoggedIn, openLogoutModal,userData, setUserData } = useAuth();


  return (
    <>
      <Navbar expand="lg" style={{ background: '#1D2026' }} className='navbar'>
        <Container className='px-0'>
          <Link to='/' className='mylogo'>
            <img src={mylogo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="bg-dark text-white"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={mylogo} alt="logo" style={{ width: '30px', marginRight: '10px' }} />
                Articula
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto my-2 px-0 my-lg-0 mynav" style={{ maxHeight: '300px' }}>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>Home</NavLink>
                <NavLink to="/Article" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>Articles</NavLink>
                <NavLink to="/job" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>Vacancies</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>About</NavLink>
                <NavLink to="/Faqs" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>FAQs</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>Contact</NavLink>

                
                <div className='d-flex flex-column d-lg-none w-100  mt-3'>
  {isLoggedIn ? (
    <>
      <div className="d-flex flex-column justify-content-between px-0 w-100">
        <Link to='/MyAccount' className="p-2 px-3 mx-0 text-center  " style={{ background: '#FFEEE8', color: '#FF6636', border: '0' }}>MyAccount</Link>
        <Link to='/MyArticles' className="p-2 px-3 mx-0 text-center  " style={{ background: '#FFEEE8', color: '#FF6636', border: '0' }}>My Articles</Link>
        <Link className="p-2 px-3 mx-0 text-center  hbtn hb-fill-right" onClick={openLogoutModal} style={{ color: '#FFEEE8', background: '#FF6636', border: '0' }}>LogOut</Link>
      </div>
    </>
  ) : (
    <div className="d-flex flex-column justify-content-between px-0 w-100">
      <Link to='/Signup' className="p-2 px-3 mx-0 text-center" style={{ background: '#FFEEE8', color: '#FF6636', border: '0' }}>Create Account</Link>
      <Link to='/Signin' className="p-2 px-3 mx-0 text-center hbtn hb-fill-right border-0">Sign In</Link>
    </div>
  )}
  <Bottons />
</div>
              </Nav>

              <div className="icons-nav pe-0 mt-lg-0 mt-5 ">
                <Link to='https://www.facebook.com'><FaFacebookF /></Link>
                <Link to='https://www.instagram.com'><FaInstagram /></Link>
                <Link to='https://www.linkedin.com'><FaLinkedinIn /></Link>
                <Link to='https://twitter.com'><FaTwitter /></Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Bottons />
    </>
  );
}

export default NavbarLink;

export function Bottons() {
  const { isLoggedIn, openLogoutModal, userData } = useAuth();
    const savedImage = localStorage.getItem("userImage");

  return (
    <div className="d-flex justify-content-between w-100 py-lg-2 mt-lg-0 mt-5 pt-lg-2 pt-3 d-lg-flex d-none"
      style={{ boxShadow: '0px -1px 0px 0px #E9EAF0 inset' ,zIndex:'100000'  }}>
      <Container className="logo-button px-0">
        <div className="d-lg-flex items-center d-none ps-0">
          <img src={mylogo} alt="Logo" style={{ width: '30px', height: '30px', marginInlineEnd: '6px' }} />
          <span className="ml-2 text-xl font-bold" style={{ fontWeight: '600', fontSize: '25px', letterSpacing: '3%' }}>Articula</span>
        </div>

        {isLoggedIn ? (
          <Dropdown align="end" className='me-0 pt-0'>
            <Dropdown.Toggle variant="" id="dropdown-user" className='d-flex justify-content-between align-items-center text-center w-100 px-0'>
              <p className='my-2 me-3'>{userData.displayName}</p>
              <img className='me-0' src={ savedImage || userData.userImage} alt="User" style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '8px' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/MyAccount">My Account</Dropdown.Item>
              <Dropdown.Item as={Link} to="/MyArticles">My Articles</Dropdown.Item>
              <Dropdown.Item as={Link} onClick={openLogoutModal}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <div className="d-flex justify-lg-between py-1">
            <Link to='/Signup' className="mx-2 p-2 px-3 " style={{ background: '#FFEEE8', color: '#FF6636', border: '0' }}>Create Account</Link>
            <Link to='/Signin' className="p-2 px-3 hbtn hb-fill-right  " >Sign In</Link>
          </div>
        )}
      </Container>
    </div>
  );
}

