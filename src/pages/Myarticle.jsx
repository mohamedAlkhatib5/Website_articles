
import {
fetchUserBlogs,
fetchTags,
uploadGalleryImages,
uploadSingleImage,
createArticle,
updateArticle,
deleteArticle } from '../apis-fetch/fetch-myarticls.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useEffect, useState } from 'react';
 import { useNavigate } from 'react-router';
  import Footer from '../Components/Footer.jsx';
   import NavbarLink from '../Components/Navbar.jsx';
   import { Helmet } from 'react-helmet';
    import Error403 from '../Components/Error403 .jsx';
  import { useAuth } from '../Contexts/UserContext';
     import { Row, Col, Container, Dropdown, Modal, Button, Form } from 'react-bootstrap'; 
     import { Link } from 'react-router';
      import { IoGridSharp, IoSearch } from "react-icons/io5"; 
      import { MdTableRows, MdOutlineDateRange } from "react-icons/md";
       import { BsPersonCircle } from "react-icons/bs"; 
       import courseimg1 from '../assets/img/Course Images.png';
import Loader from '../Components/Loader.jsx';
const MyArticles = () => { 
  const { isLoggedIn } = useAuth();
   const navigate = useNavigate(); 
   const [allBlogs, setAllBlogs] = useState([]); 
   const [allTags, setAllTags] = useState([]); 
   const [filteredBlogs, setFilteredBlogs] = useState([]); 
   const [nameSearch, setNameSearch] = useState(''); 
   const [order, setOrder] = useState('Sort by'); 
   const [newTitle, setNewTitle] = useState(''); 
   const [newBody, setNewBody] = useState('');
   const [newCategory, setNewCategory] = useState(''); 
   const [newDate, setNewDate] = useState(''); 
   const [newImage, setNewImage] = useState(null); 
   const [newGalleryImages, setNewGalleryImages] = useState([]); 
   const [loading, setLoading] = useState(false); 
   const [error, setError] = useState(null); 
   const [viewMode, setViewMode] = useState('grid');
    const [showModal, setShowModal] = useState(false);
     const [editBlog, setEditBlog] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const [selectedTag, setSelectedTag] = useState(''); 
      const blogsPerPage = 8;

const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
 const indexOfLastBlog = currentPage * blogsPerPage; 
 const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

const goToPrevPage = () => { 
  if (currentPage > 1) 
    setCurrentPage(currentPage - 1); }; 
  const goToNextPage = () => { 
    if (currentPage < totalPages)
       setCurrentPage(currentPage + 1); };

const username = 'mohamed-alkhatib';
 const password = '123456'; 
 const getBasicAuthHeader = () => { const 
  token = btoa(`${username}:${password}`); 
  return `Basic ${token}`; };
//  **************Blogs**************
useEffect(() => { 
  setLoading(true); 
 fetchUserBlogs(getBasicAuthHeader) 
  .then(data => { const blogs = data.rows || []; setAllBlogs(blogs); })
  .catch(err => setError(err.message)) 
  .finally(() => setLoading(false)); }, []);
//  *************Filtered***************
useEffect(() => { let results = [...allBlogs]; 
  if (nameSearch.length > 0) { 
    results = results.filter((item) => String(item.title).toLowerCase().includes(nameSearch.toLowerCase()) ); } 
    results.sort((a, b) => { if (order === ' Ascending') 
      return String(a.created).localeCompare(String(b.created)); 
      else return String(b.created).localeCompare(String(a.created)); }); 
      setFilteredBlogs(results); }, [allBlogs, nameSearch, order]);

const handleCardClick = (id) => { 
  navigate(`/blog/${id}`); };

//  *************tags***************
useEffect(() => { fetchTags() 
  .then((data) => { setAllTags(data); }) 
  .catch((err) => console.error("Error fetching tags:", err)); }, []);

//  *************CreateArticle********
const handleCreateArticle = async () => {
   const csrfToken = 'ZvvDxmEnI2tQNWsFrZu4NmX71cmbxbGNYSUrbj-2EKU'; 
   if (!newTitle || !newBody || !selectedTag || !newDate) { 
    alert("Please fill in all fields"); 
    return; } 
    try { setLoading(true); 
      let imageField = null; let galleryField = []; 
      if (newImage) { 
               const uploadedMainImage = await uploadSingleImage(newImage, csrfToken, getBasicAuthHeader);
        imageField = [{ target_id: uploadedMainImage.fid[0].value }]; } 


        if (newGalleryImages.length > 0) { 
          galleryField = await uploadGalleryImages(newGalleryImages, csrfToken,getBasicAuthHeader); } 


          const formattedBody = `<p>${newDate}</p>${newBody}`;

       const data = { type: [{ target_id: 'blog' }], 
       title: [{ value: newTitle }],
        body: [{ value: formattedBody, 
        format: 'basic_html' }], 
        field_category: [{ target_id: parseInt(newCategory) }],
         field_tags: selectedTag ? [{ target_id: selectedTag }] : [],
        ...(imageField && { field_image: imageField }),
        ...(galleryField.length && { field_gallery: galleryField }), };

             await createArticle(data, csrfToken, getBasicAuthHeader); 
             alert('Article created successfully');
              setShowModal(false); 
              setNewTitle(''); 
              setNewBody(''); 
              setNewCategory(''); 
              setNewDate('');
              setNewImage(null);
              setNewGalleryImages([]); 
              window.location.reload(); } 
              catch (err) { 
                alert(err.message); } 
                finally { setLoading(false); } };


//  *************UpdateArticle*************
const handleEditClick = (blog) => { 
  setEditBlog(blog); 
  setNewTitle(blog.title || ''); 
  setNewBody(blog.body?.[0]?.value || ''); 
  setNewCategory(blog.field_category?.[0]?.target_id || ''); 
  setSelectedTag(blog.field_tags?.[0]?.target_id || ''); 
  setNewDate(blog.created?.split('T')[0] || ''); setShowModal(true); };

const handleUpdateArticle = async () => { 
  const csrfToken = localStorage.getItem('csrf_token');
   setLoading(true);
    try { let imageField = null;
       let galleryField = []; 
       if (newImage) { 
        const uploadedMainImage = await uploadSingleImage(newImage, csrfToken,getBasicAuthHeader);
         imageField = [{ target_id: uploadedMainImage.fid[0].value }]; } 

         if (newGalleryImages.length > 0) { 
          galleryField = await uploadGalleryImages(newGalleryImages, csrfToken,getBasicAuthHeader); 
        } 


         const data =
         { type: [{ target_id: 'blog' }], 
         title: [{ value: newTitle }], 
         body: [{ value: newBody, format: 'full_html' }], 
         field_category: [{ target_id: parseInt(newCategory) }], 
         field_tags: selectedTag ? [{ target_id: Number(selectedTag) }] : [], 
        ...(imageField && { field_image: imageField }),
        ...(galleryField.length && { field_gallery: galleryField }), }; 

          await updateArticle(editBlog.id, data, csrfToken,getBasicAuthHeader);
           alert('The article has been successfully modified.'); 
           setShowModal(false);
            setEditBlog(null); } 
           catch (err) { alert(err.message); } 
           finally { setLoading(false); } };

//  *************DeleteArticle*************
const handleDeleteArticle = async (id) => {
   if (!window.confirm('Are you sure you want to delete this article?')) 
    return; 
  const csrfToken = localStorage.getItem('csrf_token'); 

  try { 
    await deleteArticle(id,csrfToken,getBasicAuthHeader);
     alert('The article has been successfully deleted');

     setAllBlogs(allBlogs.filter(blog => blog.id !== id)); } 
     catch (err) { 
      alert(err.message); 
    } };

//  **************************************

if (!isLoggedIn) return <Error403 />;

return (<> 
      <Helmet>
      <title>Myarticle | Articula </title>
      <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
      <meta name="keywords" content="online learning, articles, Articula , react website" />
     <meta charset="UTF-8" />
     {/* img in public href */}
     <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
     
     
    </Helmet>
<NavbarLink /> 
<div className="d-flex justify-content-center flex-column bg-Border w-100 py-3 mt-lg-0 mt-5 text-center lh-sm" style={{ background: '#F5F7FA' }}> <p className='fs-4'>My Articles</p> <div className="d-flex justify-content-center text-center link-header"> <Link to='/' className='text-secondary'>Home</Link>/<Link to='/MyArticles' className='text-dark'>My Articles</Link> </div> </div>

<Container className="mt-2 px-lg-0">
    <div className="d-flex flex-column my-lg-5 my-2 w-100 px-lg-0 mx-0">
      <Row className="w-100 px-lg-0 mx-lg-0">
        <Col xs={12} lg={6} className='  mb-0   d-flex justify-content-lg-start justify-content-between align-items-center  ps-lg-0  order-lg-1 order-2 '>
          <div className="position-relative w-75 me-2 ">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 px-4 rounded-0 w-100"
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
            />
            <IoSearch className='position-absolute' style={{ right: '10px', top: '30%', color: 'rgba(255, 101, 54, 0.9)' }} />
          </div>
          <Dropdown   >
            <Dropdown.Toggle className="bg-white text-black rounded-0 p-2  px-3   filter">
              {order ? order : 'Sort by'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setOrder(' Ascending')}>Ascending</Dropdown.Item>
              <Dropdown.Item onClick={() => setOrder('Descending')}>Descending</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-lg-end justify-content-between align-items-center px-lg-0 order-lg-2 order-1 mb-2 mb-lg-0">
          <button className="btn p-2 border-0 rounded-0 hbtn hb-fill-right me-3  " onClick={() => setShowModal(true)}>+ Create Article</button>
          <div className="">
             <button
            onClick={() => setViewMode('grid')}
            className="p-2 bg-white mx-2"
            style={viewMode === 'grid' ? { color: 'rgba(255, 101, 54, 0.9)', border: '1px solid rgba(207, 207, 207, 0.55)' } : { color: 'rgba(207, 207, 207, 0.55)', border: '1px solid rgba(207, 207, 207, 0.55)' }}>
            <IoGridSharp className='fs-4' />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className="p-2 bg-white"
            style={viewMode === 'list' ? { color: 'rgba(255, 101, 54, 0.9)', border: '1px solid rgba(207, 207, 207, 0.55)' } : { color: 'rgba(207, 207, 207, 0.55)', border: '1px solid rgba(207, 207, 207, 0.55)' }}>
            <MdTableRows className='fs-4' />
          </button>
          </div>
         
        </Col>
      </Row>
    </div>

    <div className="text-center d-flex w-100 justify-content-center my-2">
      {loading && < Loader />}
      {error && <p className="text-danger">{error}</p>}
    </div>

    <Row className="g-4 w-100 p-0 m-0 mb-5 mt-0">
{currentBlogs.map((blog) => {

        const gallery = blog.field_gallery ? blog.field_gallery.split(',') : [];
        const firstImage = gallery.length ? `https://tamkeen-dev.com${gallery[0].trim()}` : courseimg1;
        return (

  <Col
  key={blog.id}
  xs={viewMode === 'grid' ? 6 : 12}
  md={viewMode === 'grid' ? 4 : 12}
  lg={viewMode === 'grid' ? 3 : 12}
  onClick={() => handleCardClick(blog.id)}
  style={{ cursor: 'pointer' }}
  className={`pe-0 ${viewMode === 'grid' ? 'd-flex' : ''}`}
>
  <div
    className={`overflow-hidden card-article ${viewMode === 'list' ? 'd-flex flex-row' : 'd-flex flex-column w-100'}`}
    style={{ height: '100%' }}
  >
    <div
    className={` ${viewMode === 'list' ? 'w-50' : ' w-100'}`}
      // className='w-100'
      style={{ height: viewMode === 'list' ? '190px' : '160px', flexShrink: 0 }}
    >
      <img
        src={firstImage}
        alt={blog.title}
        className="img-fluid h-100 w-100 object-fit-cover"
        style={{ objectFit: 'cover' }}
      />
    </div>

    <div className={`w-100 d-flex flex-column justify-content-between ${viewMode === 'list' ? 'text-center bg-light h-100' : 'flex-grow-1'}`}>
      <div className={`p-2 ${viewMode === 'list' ? 'text-center' : 'overflow-hidden'}`}>
        <p className="text-muted mb-1">
          <MdOutlineDateRange className="me-2" style={{ color: 'rgba(255, 101, 54, 0.9)' }} />
          {blog.created?.trim()}
        </p>
        <p
          className="fs-5 overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: '3rem',
          }}
        >
          {blog.title}
        </p>
      </div>

      <div className={`${viewMode === 'list' ? '' : 'ps-2'}`}>
        <BsPersonCircle className="me-2" style={{ color: 'rgba(255, 101, 54, 0.9)' }} />
        {blog.author && <span className="text-muted">{blog.author}</span>}
      </div>

      <div className="pt-1">
        <div className="d-flex gap-2 border-top p-2">
          <button
            className="btn  btn-sm w-50 rounded-0 border-0"
            style={{ background: '#1d202680' }}
            onClick={(e) => {
              e.stopPropagation();
              handleEditClick(blog);
            }}
          >
            Edit
          </button>
          <button
            className="btn text-danger btn-sm w-50 rounded-0 border-0"
            style={{ background: '#f8d7da' }}
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteArticle(blog.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</Col>

        );
      })}
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





<Modal show={showModal} onHide={() => { setShowModal(false); setEditBlog(null); }}>
  <Modal.Header >
    <Modal.Title>{editBlog ? 'Edit Article' : 'Create New Article'}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Body (HTML)</Form.Label>
        <Form.Control as="textarea" rows={5} value={newBody} onChange={(e) => setNewBody(e.target.value)} />
      </Form.Group>
     <Form.Group className="mb-3">
       <Form.Label>Main image</Form.Label>
  <Form.Control type="file" accept="image/*" multiple onChange={(e) => setNewGalleryImages(Array.from(e.target.files))} />
</Form.Group>

      <Form.Group className="mb-3">
  <Form.Label>More pictures for details</Form.Label>
  <Form.Control type="file" accept="image/*" onChange={(e) => setNewImage(e.target.files[0])} />
</Form.Group>


<Form.Group className="mb-3">
  <Form.Label>Tags</Form.Label>
 
  
  <Form.Select
  value={selectedTag}
  onChange={(e) => setSelectedTag(parseInt(e.target.value))}
  // required
>
  <option value="">Tags</option>
  {allTags.map(tag => (
    <option key={tag.id} value={tag.id}>
      {tag.name}
    </option>
  ))}
</Form.Select>
</Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => { setShowModal(false); setEditBlog(null); }}>Cancel</Button>
    <Button variant="primary" onClick={editBlog ? handleUpdateArticle : handleCreateArticle} disabled={loading}>
      {/* {editBlog ? 'Update' : 'Save'} */}
      {loading ? 'Loading...' : editBlog ? 'Update' : 'Save'}
    </Button>
  </Modal.Footer>
</Modal>

  

<Footer />

</>); };

export default MyArticles;










