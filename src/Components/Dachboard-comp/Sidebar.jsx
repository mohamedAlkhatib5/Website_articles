import { useState } from 'react';
import { LuPanelLeftClose } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";
import {
    BsGrid,
    BsCurrencyDollar,
    BsCart,
    BsPersonGear,
    BsChatDots,
    BsGear,
    BsQuestionCircle,
    BsBoxArrowRight,
  } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router';


const Sidebar =({Item,setItem}) => {


  const [active, setActive] = useState('Dashboard');
const [isCollapsed, setIsCollapsed] = useState(false);
const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  //************************* handle*************************
  const handleClick = (itemName) => {
    setActive(itemName);
    setItem(itemName);

    
    if (itemName === 'Dashboard') {
      setIsDashboardOpen(!isDashboardOpen); // Toggle dropdown
      
    }
  
  };
const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };


  const sections = [
    {
      title: 'DASHBOARD',
      items: [
        { name: 'Dashboard', icon: <BsGrid /> },
        { name: 'Reports', icon: <HiOutlineDocumentReport />
        },
      ],
    },
    {
      title: 'COMMUNICATION',
      items: [
        { name: 'Messages', icon: <BsChatDots /> },
        { name: 'Team', icon: <SlPeople />
        },
      ],
    },
    {
      title: 'SETTINGS',
      items: [
        { name: 'Accesscontrol ', icon: <BsPersonGear />},
        { name: 'Settings', icon: <BsGear /> },
      ],
    },
  ];
  const dashboardSubItems = [ 
    { name: 'Sales', icon: <BsCurrencyDollar /> },
    { name: 'Customers', icon: <IoPersonOutline /> },
    { name: 'Orders', icon: <BsCart /> },
];

  return (
    <div className=" d-flex flex-column p-3 pe-4 bg-white shadow z-1 " 
     style={{ width: isCollapsed ? '80px' : '250px', minHeight: '100vh', transition: 'width 0.3s' ,position:'fixed'}}>
     {/* ****************************logo/button close************************* */}
{!isCollapsed && (
      <div className="d-flex align-items-center mb-4  justify-content-between">
        <div className="d-flex align-items-center">
        <div className=" text-white rounded-1 d-flex justify-content-center align-items-center" 
        style={{ width: 30, height: 30, background:" #FF6636" }}>
          C
        </div>
        <span className="ms-2 fw-bold">Company</span>
        </div>
   
        <LuPanelLeftClose  className="fs-4 close"  onClick={toggleSidebar}/>
      </div>
 )}
 {isCollapsed &&   <div className=" text-white rounded-1 d-flex justify-content-center align-items-center mx-auto mb-3" 
 style={{ width: 40, height: 40, background:" #FF6636" }}>  C</div>}
 {isCollapsed &&  <LuPanelLeftClose  className="fs-4 close mx-auto"  onClick={toggleSidebar}/>}

{/* ****************************search************************* */}
{!isCollapsed && (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Search" />
    </div>
  )}


     {/* ****************************buttons************************* */}

      {sections.map((section) => (
        <div className="mb-1" key={section.title}>
{!isCollapsed && <small className="text-muted">{section.title}</small>}
          <ul className="nav flex-column mt-1">
            {section.items.map((item) => (
              <li key={item.name} className="nav-item">
           
            <button
           className={`btn w-100 text-start mb-1 `}
        style={active === item.name ? {  background: ' rgb(255 190 170 / 52%)' } : {}}
        onClick={() => handleClick(item.name)}

>
  <span className={`me-2  ${   isCollapsed
                              ? 'fs-5' 
                              : 'fs-5' }`} style={active === item.name ? {   color: ' #FF6636'} : {}}>{item.icon}</span>
  {!isCollapsed && item.name}
 

</button>
         
              
                {/* ****************** Dashboard**************** */}
                {item.name === 'Dashboard' && isDashboardOpen && (
  <ul className="nav flex-column mt-1">
    {dashboardSubItems.map((sub) => (
      <li key={sub.name}>
        <button
          className={`btn ${
            isCollapsed
              ? 'btn btn-sm w-100 text-start mb-1 ms-1'
              : 'btn btn-sm w-100 text-start mb-1 ms-4'
          }`}
          style={active === sub.name ? { background: 'rgba(205, 140, 120, 0.52)' } : {}}
          onClick={() =>  handleClick(sub.name)}
        >
          <span className={`me-2 ${isCollapsed ? 'fs-5' : 'fs-6'}`} style={active === sub.name ? { color: '  #FF6636' } : {}}> {sub.icon}</span>
      
          {!isCollapsed && sub.name}
        </button>
      </li>
    ))}
  </ul>
)}

              </li>
             
            ))}
          </ul>
        </div>
      ))} 

       <div className="">
        <button className="btn  w-100 text-start">
          <BsQuestionCircle className={`me-2  ${isCollapsed ? 'fs-5'  : 'fs-5' }`} /> 
{!isCollapsed && 'Help'}
        </button>
       <Link
  to="/"
  className={`btn w-100 text-start mb-2 d-flex align-items-center mt-2 ${ isCollapsed ? 'justify-content-center p-0 ' : ''} text-black`}
>
  <BsBoxArrowRight className={` ${isCollapsed ? 'fs-5 m-0 ms-2 mt-2' : 'fs-5  me-2'}`} 
  style={{ fontSize: isCollapsed ? '1.5rem' : '1rem ' }}
/>
  {!isCollapsed && 'Log out'}
</Link>
      </div>
    </div>
  );
};

export default Sidebar;
