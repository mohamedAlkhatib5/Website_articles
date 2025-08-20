
import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Alert,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

import { fetchUsers, deleteUser } from "../../apis-fetch/fetch-userlist"; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// ***************loadUsers*************
  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const usersData = await fetchUsers();
      setUsers(usersData);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Authentication failed. Please login again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);
// ***************DeleteUser*************
  const handleDeleteUser = async (uid) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await deleteUser(uid);
      loadUsers(); 
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete user.");
    }
  };



  return (
    <Container className="my-5">
      {/* Cards */}
      <Row className="mb-5">
        <Col lg={4}>
          <Card className="shadow text-center p-4">
            <h5>Total Users</h5>
            <p className="display-6">{users.length}</p>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow text-center p-4">
            <h5>New Users</h5>
            <p className="display-6">10</p>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow text-center p-4">
            <h5>Active Users</h5>
            <p className="display-6">3</p>
          </Card>
        </Col>
      </Row>

 
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center mb-4">User List</h2>

              {loading && (
                <div className="text-center w-100 d-flex justify-content-center">
                  <div className="loader"></div>
                </div>
              )}

              {error && <Alert variant="danger">{error}</Alert>}

              {!loading && !error && (
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Gender</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => {
                      const fullName = `${user.field_name || ""} ${user.field_surname || ""}`.trim();
                      return (
                        <tr key={user.uid}>
                          <td>{index + 1}</td>
                          <td>{fullName || user.name}</td>
                          <td>{user.mail}</td>
                          <td>{user.field_mobile}</td>
                          <td>{user.field_gender || "N/A"}</td>
                          <td>
                            <Button
                              className="bg-danger  border-0 rounded-0"
                              size="sm"
                              onClick={() => handleDeleteUser(user.uid)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

     
    </Container>
  );
};

export default UserList;
