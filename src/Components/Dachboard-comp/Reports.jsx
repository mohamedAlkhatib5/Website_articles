
import React from "react";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../pages.css/Reports.css';
import { Container ,Row, Col } from "react-bootstrap";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
   
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ReportsDashboard = () => {
  const reportData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Report',
        data: [5000, 7000, 4000, 8000, 6000, 9000],
        // fill: true,
        backgroundColor: 'rgb(203, 203, 206)',
        borderColor: 'rgb(203, 203, 206)',
        tension: 0.4,
      },
    ],
  };

  const reportOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Report Over Time',
        color: ' #FF6636',
      },
    },
  };

  return (
     <Container className=" px-0 my-5">
   
      <h2 className="text-center  mb-4"  >Reports</h2>

      {/* Cards Section */}
  <Row  className="mb-5 w-100 mx-0">
               <Col lg={4} md={4} className='mb-4'>

        
          <div className="card card-hover text-center shadow-sm p-4">
            <h5 className="card-title">Total Revenue</h5>
            <p className="card-text display-6 text-secondary">$45,000</p>
          </div>
     </Col>

           <Col lg={4} md={4} className='mb-4'>
          <div className="card card-hover text-center shadow-sm p-4">
            <h5 className="card-title">Total Orders</h5>
            <p className="card-text display-6 text-secondary">320</p>
          </div>
       </Col>

       <Col lg={4} md={4} className='mb-4'>
          <div className="card card-hover text-center shadow-sm p-4">
            <h5 className="card-title">New Customers</h5>
            <p className="card-text display-6 text-secondary">85</p>
          </div>
      </Col>
     </Row>
      {/* Line Chart Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <Line data={reportData} options={reportOptions} />
        </div>
      </div>

   </Container>
  );
};

export default ReportsDashboard;
