import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../Contexts/UserContext.jsx';
import { Row ,Col,Container, Dropdown} from 'react-bootstrap';
import Footer from '../Components/Footer.jsx';
import NavbarLink from '../Components/Navbar.jsx';
import { Helmet } from 'react-helmet';
import Error403 from '../Components/Error403 .jsx';
import { Link } from 'react-router';
// img and icon 
import { IoGridSharp } from "react-icons/io5";
import { MdTableRows } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import courseimg1 from'../assets/img/Course Images.png'
import { IoSearch } from "react-icons/io5"
import Loader from '../Components/Loader.jsx';
import { FaFilter } from "react-icons/fa";
import { fetchBlogs } from '../apis-fetch/fetch-articls.js';
import { Offcanvas } from 'react-bootstrap'; 


const BlogList = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [allBlogs, setAllBlogs] = useState([]);
    const [allTags, setAllTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
// operation filter
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [order, setOrder] = useState('Sort by');
  const [currentTag, setCurrentTag] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  // Number of Page
const [currentPage, setCurrentPage] = useState(1);

 
// *********************************
// pagination pager Number of articles
const itemsPerPage = 9;
 // Number of PageS
const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

//  (6  *number pag 1*  -   12 *sum*) pag2
const currentBlogs = filteredBlogs.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);


const goToNextPage = () => {
  // +1 page
  if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
};
  // -1 page
const goToPrevPage = () => {
  if (currentPage > 1) setCurrentPage(prev => prev - 1);
};
// *********************************
  // Fetch article 




const username = 'mohamed-alkhatib';
const password = '123456';

const getBasicAuthHeader = () => {
  const token = btoa(`${username}:${password}`);
  return { Authorization: `Basic ${token}` };
};

useEffect(() => {
  setLoading(true);

  fetchBlogs(getBasicAuthHeader())
    .then((blogs) => {
      setAllBlogs(blogs);
      const tags = blogs.map((item) => item.field_tags || []).flat();
      const uniqueTags = [...new Set(tags)];
      setAllTags(uniqueTags);
    })
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, []);

// Filtering Operation
  useEffect(() => {
    let results = [...allBlogs];

    if (nameSearch.length > 0) {
      results = results.filter((item) =>
        String(item.title).toLowerCase().includes(nameSearch.toLowerCase())
      );
    }

    if (currentTag) {
   
      results = results.filter((item) =>
  (item.field_tags || []).includes(currentTag)
);
    }

    results.sort((a, b) => {
      if (order === ' Ascending') return String(a.created).localeCompare(String(b.created));
      else return String(b.created).localeCompare(String(a.created));
    });

    setFilteredBlogs(results);
  }, [allBlogs, nameSearch, order, currentTag]);

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  if (!isLoggedIn) return <Error403 />;

  return (
    <>
        <Helmet>
  <title>Articles |  Articula </title>
  <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
  <meta name="keywords" content="online learning, articles, Articula , react website" />
 <meta charset="UTF-8" />
 {/* img in public href */}
 <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
 
 
</Helmet>
      <NavbarLink />
          {/* ******************* */}
     <div className="d-flex justify-content-center flex-column  bg-Border  w-100  py-3 mt-lg-0 mt-5    text-center lh-sm" style={{background:'#F5F7FA'  }}>
      <p className='fs-4 '>Articles</p>
      <div className="d-flex justify-content-center text-center link-header  "style={{textDecoration:'none'}}  >
         <Link to='/ '  className=' text-secondary'>Home</Link>/<Link to='/Article' className=' text-dark'>Articles</Link>
      </div>
</div>
  
{/* ******************* */}

<Container  className="my-5 px-lg-0 px-1">
  <Row className='w-100 px-0 mx-0'>

    <Col lg={3} className="d-none d-lg-block ps-0">
      <div className=" p-3 shadow-sm  sticky-sidebar offcanvas-custom" style={{ minHeight: '100vh', top: '80px' ,background:'#fff'}}>
        {/* Search */}
        <div className="mb-3 position-relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="form-control rounded-0 border"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
          />
          <IoSearch className="position-absolute" style={{ right: '10px', top: '30%', color: 'rgba(255, 101, 54, 0.9)' }} />
        </div>

        {/* Order */}
        <div className="mb-3 ps-2 ">
          <label className="fw-semibold  mb-2">Order by</label>
          <div className="form-check my-2 ms-2 ">
            <input className="form-check-input" type="radio" name="order" checked={order === ' Ascending'} onChange={() => setOrder(' Ascending')} />
            <label className="form-check-label small fs-6">Ascending</label>
          </div>
          <div className="form-check my-2 ms-2 ">
            <input className="form-check-input" type="radio" name="order" checked={order === 'Descending'} onChange={() => setOrder('Descending')} />
            <label className="form-check-label small fs-6">Descending</label>
          </div>
        </div>

        {/* Tags */}
        <div className='ps-2'>
          <label className="fw-semibold  my-2 mb-2">Filter by Tags</label>
          <div style={{ maxHeight: '180px', overflowY: 'auto' }} className='ps-2' >
            <div className="form-check my-2 ">
              <input className="form-check-input " type="radio" name="tag" checked={currentTag === null} onChange={() => setCurrentTag(null)} />
              <label className="form-check-label small fs-6">All Tags</label>
            </div>
            {allTags.map((tag, index) => (
              <div key={index} className="form-check my-2 ">
                <input className="form-check-input " type="radio" name="tag" checked={currentTag === tag} onChange={() => setCurrentTag(tag)} />
                <label className="form-check-label small fs-6">{tag}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Col>


    <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="start" >
      <Offcanvas.Header closeButton>
  
      </Offcanvas.Header>
      <Offcanvas.Body  className='text-white pt-4'>

        {/* Search */}
        <div className="mb-3 position-relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="form-control rounded-0 border"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
          />
          <IoSearch className="position-absolute" style={{ right: '10px', top: '30%', color: 'rgba(255, 101, 54, 0.9)' }} />
        </div>

        {/* Order */}
        <div className="mb-3">
          <label className="fw-bold small mb-2">Order by</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="order" checked={order === ' Ascending'} onChange={() => setOrder(' Ascending')} />
            <label className="form-check-label  fs-6">Ascending</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="order" checked={order === 'Descending'} onChange={() => setOrder('Descending')} />
            <label className="form-check-label fs-6">Descending</label>
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="fw-bold small mb-2">Filter by Tags</label>
          <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="tag" checked={currentTag === null} onChange={() => setCurrentTag(null)} />
              <label className="form-check-label  fs-6">All Tags</label>
            </div>
            {allTags.map((tag, index) => (
              <div key={index} className="form-check">
                <input className="form-check-input" type="radio" name="tag" checked={currentTag === tag} onChange={() => setCurrentTag(tag)} />
                <label className="form-check-label fs-6">{tag}</label>
              </div>
            ))}
          </div>
        </div>
   
      </Offcanvas.Body>
    </Offcanvas>


    <Col lg={9} className='pe-lg-0'>
  
      <div className="d-flex justify-content-between justify-content-lg-end align-items-center mb-3">
             <div className="d-lg-none  p-0 m-0">
      <button className="btn p-2 w-100 h-100 rounded-0 m-0" onClick={() => setShowSidebar(true)}
                              style={  {  border:'1px solid  rgba(207, 207, 207, 0.55)  '} }
>
       <FaFilter style={{ color:'rgba(255, 101, 54, 0.9)' }} /> Filter & Sort
      </button>
    </div>
        <div className="d-flex gap-2">
                    <button
              onClick={() => setViewMode('grid')}
              className={'p-2  bg-white mx-2 '}
     
                      style={  viewMode === 'grid'? {  color:'rgba(255, 101, 54, 0.9)'   ,border:'1px solid  rgba(207, 207, 207, 0.55)  '} : {  color:'rgba(207, 207, 207, 0.55)'   ,border:'1px solid rgba(207, 207, 207, 0.55)'}}
             
            >
              <IoGridSharp className='fs-4'/>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={'p-2  bg-white '}
              style={  viewMode === 'list'? {  color:'rgba(255, 101, 54, 0.9)'   ,border:'1px solid   rgba(207, 207, 207, 0.55)  '} : {  color:'rgba(207, 207, 207, 0.55)'   ,border:'1px solid rgba(207, 207, 207, 0.55) '}}
             
            >
              <MdTableRows className='fs-4'/>
             
            </button>
        </div>
 
      </div>

    
      <Row className="g-4">
        {currentBlogs.map((blog) => (
          <Col
            key={blog.id}
          xs={viewMode === 'grid' ? 6 : 12}
            sm={viewMode === 'grid' ? 6 : 12}
            md={viewMode === 'grid' ? 4 : 12}
            lg={viewMode === 'grid' ? 4 : 12}
            onClick={() => handleCardClick(blog.id)}
            style={{ cursor: 'pointer' }}
          >
    <div
                className={`  overflow-hidden card-article  ${viewMode === 'list' ? 'd-flex flex-row' : ''}`}
                style={{ height: viewMode === 'list' ? '200px' : '100%' }}
              >
             
<div className='w-100' style={{ height: viewMode === 'grid' ? '180px' : '100%' }} >

  {(() => {
    const gallery = blog.field_gallery ? blog.field_gallery.split(',') : [];  
    const firstImage = gallery.length && gallery[0].trim() !== ''
      ? `https://tamkeen-dev.com${gallery[0].trim()}`  
      : courseimg1;

    return (
      <img
        src={firstImage}
        alt={blog.title}
        className="img-fluid w-100 h-100"
        style={{
        
          objectFit: 'cover',
        }}
      />
    );
  })()}
</div>
              
                <div   className={`w-100 d-flex flex-column justify-content-between  ${viewMode === 'list' ? 'text-center bg-light h-100' : ''}`} style={{height: '160px'}} >
                  <div     className={`p-2  ${viewMode === 'list' ? 'text-center ' : 'overflow-hidden'}`}>
                    <p className="text-muted mb-1">
                      <MdOutlineDateRange className="me-2" style={{color:'rgba(255, 101, 54, 0.9)'}} />{blog.created?.trim()}</p>
                    <p className=" fs-5 overflow-hidden "  style={{
                 
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minHeight: '3rem'      
  }}>{blog.title}</p>
                  </div>
                  
                  <div   className={`d-flex align-items-center border-top pt-1  p-3  ${viewMode === 'list' ? 'justify-content-center' : ''}`}>
                    <BsPersonCircle className="me-2 "style={{color:'rgba(255, 101, 54, 0.9)'}} />
                    {blog.author && <span className="text-muted">{blog.author}</span>}
                  </div>
                </div>
              </div>
          </Col>
        ))}
      </Row>
    </Col>
  </Row>


   <div className="d-flex justify-content-center my-4">
  <nav>
    <ul className="pagination d-flex gap-2">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button
          className="page-link"
          onClick={goToPrevPage}
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            color: '#333',
            borderRadius: '0',
            padding: '6px 12px',
            minWidth: '60px'
          }}
        >
          Prev
        </button>
      </li>

      {Array.from({ length: totalPages }, (_, index) => (
        <li
          key={index}
          className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(index + 1)}
            style={{
              backgroundColor:
                currentPage === index + 1 ? 'rgba(255, 101, 54, 0.9)' : '#fff',
              border: '1px solid #ccc',
              color: currentPage === index + 1 ? '#fff' : '#000',
              borderRadius: '0',
              padding: '6px 12px',
              minWidth: '40px'
            }}
          >
            {index + 1}
          </button>
        </li>
      ))}

      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <button
          className="page-link"
          onClick={goToNextPage}
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            color: '#333',
            borderRadius: '0',
            padding: '6px 12px',
            minWidth: '60px'
          }}
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</div>

</Container>


      <Footer />
    </>
  );
};

export default BlogList;
