import React, { useState } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
      setError('')

      try{

        await logout();
        history.push("/login");

      } catch{
          setError('Failed to Log Out!');

      }
  }
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center s"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h4 className="text-center mb-4">Profile</h4>
              <hr />
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-6 justify-content-start">
                  <span className="badge badge-info">Email</span>
                </div>
                <div className="col-6 justify-content-end">
                  <span className="badge badge-warning badge-pill">
                    {currentUser.email}
                  </span>
                </div>
              </div>
              <Link
                to="/update-profile"
                className="btn btn-light btn-sm w-100 mt-4"
              >
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button className="danger" variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
