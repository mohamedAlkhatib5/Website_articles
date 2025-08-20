import './App.css'
import { Routes, Route } from "react-router";


import Home from './pages/home';
import About from './pages/About';
import JOb from './pages/Jobs';





import Faqs from './pages/Faqs';

import Contact from './pages/Contact';
import Signup  from './pages/Signup';
import Signin from './pages/Signin';
import Error404 from './Components/Error404';
import LoginForm from './pages/form.jsx';
import MyAccount from './pages/MyAccount.jsx';
import  LogOut from './pages/out.jsx';
import { AuthProvider } from './Contexts/UserContext.jsx';
import Articles from './pages/Articles.jsx';
import BlogDetails from './pages/ArticlesDetails.jsx';
// import Myarticle from './pages/Myarticle.jsx';
import MyArticles from './pages/Myarticle.jsx'


function App() {
  




  return (
    
    <>
   
{/* < Navbar/> */}
<AuthProvider >
    <Routes>
   
          <Route path="/" element={<Home />} />
          <Route path="/Article" element={<Articles  />} />
          <Route path="/about" element={<About />} />
          <Route path="/job" element={<JOb />} />

          <Route path="/contact" element={<Contact/>} />
          <Route path="/Faqs" element={<Faqs/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/admin" element={<LoginForm />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/LogOut" element={<LogOut/>} />
         <Route path="/MyArticles" element={<MyArticles/>} />
          <Route path="/*" element={<Error404/>} />
          <Route path="/blog/:id" element={<BlogDetails />} />




       





          
    </Routes>
     
          </AuthProvider>     
{/* <Footer/> */}

    </>
  )
}

export default App
