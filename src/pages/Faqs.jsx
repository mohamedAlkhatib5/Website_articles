
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages.css/Faqs.css';
import NavbarLink from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { Link } from 'react-router';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col, Form, Button, Nav, Tab } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { fetchFAQs } from '../apis-fetch/fetch-faqs.js';
// import fetchFAQs
const Faqs = () => {
  const [faqData, setFaqData] = useState([]);
  const [categories, setCategories] = useState([]);

useEffect(() => {
  const loadFAQs = async () => {
    try {
      const data = await fetchFAQs();
      setFaqData(data);

      const uniqueCategories = [...new Set(data.map(item => item.category))];
      setCategories(uniqueCategories);
      
    } catch (err) {
      console.error('Error loading FAQs:', err);
    }
  };

  loadFAQs();
}, []);
  return (
    <>
           <Helmet>
      <title>Faqs| Articula </title>
      <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
      <meta name="keywords" content="online learning, articles, Articula , react website" />
     <meta charset="UTF-8" />
     {/* img in public href */}
     <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
     
     
    </Helmet>
      <NavbarLink />
      <div className="d-flex justify-content-center flex-column bg-Border w-100 py-3 text-center mt-lg-0 mt-5 lh-sm" style={{ background: '#F5F7FA' }}>
        <p className='fs-4'>FAQs</p>
        <div className="d-flex justify-content-center text-center link-header">
          <Link to='/' className='text-secondary me-1'>Home</Link>/<Link to='/faqs' className='text-dark ms-1'>FAQs</Link>
        </div>
      </div>

      <section>
        <Container className='px-lg-0 pb-lg-5 pe-lg-0'>
          <p className='fs-1 mb-3 fw-semibold text-center py-3'>Frequently asked questions</p>
    <Accordion >
      {categories.length > 0 && (
 <Tab.Container defaultActiveKey={categories[0]}>
            <Row className='w-100 px-0 mx-0'>
            
              <Col xs={12} sm={12} md={3} lg={3} className="px-0 pe-lg-4 pe-md-3 nav-faq">
                <Nav variant="pills" className="">
                  {categories.map((cat, idx) => (
                    <Nav.Item key={idx} >
                      <Nav.Link eventKey={cat}>{cat}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>

         
              <Col xs={12} sm={12} md={6} lg={6} className="px-0">
                <Tab.Content>
                  {categories.map((cat, idx) => (
                    <Tab.Pane eventKey={cat} key={idx}>
                      <Accordion defaultActiveKey="0">
                        {faqData.filter(item => item.category === cat).map((faq, i) => (
                          <Accordion.Item eventKey={i.toString()} key={i}>
                            <Accordion.Header>{faq.title}</Accordion.Header>
                            <Accordion.Body>
                              <div dangerouslySetInnerHTML={{ __html: faq.body }} />
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>

           
              <Col xs={12} sm={12} md={3} lg={3} className="px-0 ps-lg-5 px-md-2 pe-0 me-0">
                <div className="p-3 me-0 my-lg-0" style={{ background: '#F5F7FA' }}>
                  <p className='fs-5 mb-3 fw-semibold'>Don’t find your answer!</p>
                  <p className='text-secondary'>Don’t worry, write your question here and our support team will help you.</p>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control as="textarea" rows={4} placeholder="Your Question" />
                  </Form.Group>
                  <Button type="submit" className='hbtn hb-fill-right rounded-0 border-0'>Submit question</Button>
                </div>
              </Col>
            </Row>
          </Tab.Container>
)}
         
          </Accordion>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Faqs;
