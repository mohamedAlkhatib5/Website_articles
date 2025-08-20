
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages.css/dashboard.css';

import Sidebar from '../Components/Dachboard-comp/Sidebar';
import SalesBarChart from '../Components/Dachboard-comp/Salse';
import { Helmet } from 'react-helmet';
import ReportsDashboard from '../Components/Dachboard-comp/Reports';
import OrdersDashboard from '../Components/Dachboard-comp/Orders';
import UserList from '../Components/Dachboard-comp/Customers';
const Dashboard = () => {
  const [Item, setItem] = useState('Dashboard');
  return (<>
          <Helmet>
  <title>Dashboard | Articula </title>
  <meta name="description" content="Welcome to the homepage of Articula. Learn with experts anytime, anywhere." />
  <meta name="keywords" content="online learning, articles, Articula , react website" />
 <meta charset="UTF-8" />
 {/* img in public href */}
 <link rel="icon" type="image/png" href="/GraduationCap.png" sizes="16x16" />
 
 
</Helmet>
    <div className="dashboard-container">
      <div className="sidebar     h-100">
        <Sidebar value={Item} setItem={setItem} />
      </div>

      <div className="main-content">
        {Item === 'Dashboard' && <Dashboardsection />}
        {Item === 'Customers' && <UserList/>}
        {Item === 'Sales' && <SalesBarChart />}
        {Item === 'Orders' && <OrdersDashboard />}
        {Item === 'Reports' && <ReportsDashboard />}
      </div>
    </div>
    </>
  );
};

export default Dashboard;

function Dashboardsection() {
  return (
    <>
  
      <SalesBarChart />
      <OrdersDashboard />
      <UserList />
    </>
  );
}
