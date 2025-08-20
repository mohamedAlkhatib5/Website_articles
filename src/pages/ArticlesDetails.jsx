
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col, Alert, Image } from 'react-bootstrap';
import NavbarLink from '../Components/Navbar.jsx';
import { Helmet } from 'react-helmet';
import Footer from '../Components/Footer.jsx';
import DefaultImage from '../assets/img/Course Images.png';
import Loader from '../Components/Loader.jsx';
import { fetchBlogById } from '../apis-fetch/fetch-details.js';
const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const username = 'tamkeen';
  const password = '123456';

  const getBasicAuthHeader = () => {
    const token = btoa(`${username}:${password}`);
    return `Basic ${token}`;
  };
useEffect(() => {
  if (!id) return;
  setLoading(true);
  const headers = {
    Authorization: getBasicAuthHeader(),
    'Content-Type': 'application/json',
  };

  fetchBlogById(id, headers)
    .then((data) => {
      setBlog(data);
      setError('');
    })
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, [id]);

  return (
    <>
         <Helmet>
      <title>ArticlesDetails |  Articula </title>
      <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
      <meta name="keywords" content="online learning, articles, Articula , react website" />
     <meta charset="UTF-8" />
     {/* img in public href */}
     <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
     
     
    </Helmet>
      <NavbarLink />

 
<Container className="my-5">
  {loading && (
    <div className="d-flex justify-content-center py-5">
      <Loader />
    </div>
  )}

  {error && <Alert variant="danger" className="text-center">{error}</Alert>}

  {blog && (
    <Row
      className="shadow-sm p-4 rounded bg-white"
      // style={{ maxWidth: '900px', margin: 'auto' }}
    >
      <Col md={12}>
        <h2
          className="mb-3  title-article"
          style={{
            fontWeight: '700',
            fontSize: '2rem',
            color: '#2c3e50',
            textAlign: 'center',
          }}
        >
          {blog.title?.[0]?.value}
        </h2>

        <p
          className="text-muted mb-4 "
          style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.9rem' }}
        >
          {new Date(blog.created?.[0]?.value).toLocaleDateString('EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Image
            src={blog.field_image?.[0]?.url || DefaultImage}
            alt={blog.title?.[0]?.value}
            rounded
            fluid
            style={{
              maxHeight: '400px',
              width: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: blog.body?.[0]?.processed }}
          style={{
            lineHeight: '1.8',
            fontSize: '1.1rem',
            color: '#34495e',
            padding: '0 15px',
            textAlign: 'justify',
          }}
        />
      </Col>
    </Row>
  )}
</Container>

      <Footer />
    </>
  );
};

export default BlogDetails;
