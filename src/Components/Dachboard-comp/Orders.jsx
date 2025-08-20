// OrdersDashboard.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../pages.css/Orders.css';
import { Container} from "react-bootstrap";

const OrdersDashboard = () => {
  const orders = [
    { id: 'ORD001', status: 'Completed', employee: 'John Doe', date: '2025-04-20', price: 250 },
    { id: 'ORD002', status: 'Pending', employee: 'Jane Smith', date: '2025-04-21', price: 150 },
    { id: 'ORD003', status: 'Cancelled', employee: 'Ahmed Ali', date: '2025-04-22', price: 300 },
    { id: 'ORD004', status: 'Processing', employee: 'Maria Garcia', date: '2025-04-23', price: 120 },
    { id: 'ORD005', status: 'Completed', employee: 'Tom Brown', date: '2025-04-24', price: 400 },
  ];

  return (
           <Container className=" px-0 my-5">
  

      <h2 className="text-center  mb-4" >Orders</h2>

      <div className=" shadow-sm border border-1 ">
        <div className="card-header py-2  border border-1 text-center" style={{color: ' #FF6636' }}>
          Orders Details
        </div>
        <div className="card-body p-0 ">
          <table className="table table-hover mb-0 ">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Employee</th>
                <th>Date</th>
                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>
                    <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.employee}</td>
                  <td>{order.date}</td>
                  <td>${order.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

  
      </Container>
  );
};


const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'Completed':
      return 'text-success';
    case 'Pending':
      return 'text-warning ';
    case 'Cancelled':
      return 'text-danger';
    case 'Processing':
      return 'text-info ';
    default:
      return 'text-secondary';
  }
};

export default OrdersDashboard;
