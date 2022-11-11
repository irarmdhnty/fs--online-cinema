import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import profile from "../assets/profile.svg";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const [state, dispatch] = useContext(UserContext);
  const [user, setUser] = useState(null);

  const getUserProfile = async () => {
    const response = await API.get(`/user/${state.user.id}`);
    setUser(response.data.data);
    console.log(response);
  };

  useEffect(() => {
    getUserProfile();
  }, [state]);

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2 className="mb-5 text-light">My Profile</h2>
          <Row>
            <Col className="col-5 col-lg-4">
              <img alt="user" src={profile} width="180px" />
            </Col>
            <Col>
              <div className="mb-3">
                <p className="text-color fw-bold">FullName</p>
                <p className="text-secondary">{user?.fullName}</p>
              </div>
              <div className="mb-3">
                <p className="text-color fw-bold">Email</p>
                <p className=" text-secondary"> {user?.email} </p>
              </div>
              <div>
                <p className="text-color fw-bold">Phone</p>
                <p className="text-secondary">{user?.phone}</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-12 col-md-6">
          <h2 className="mb-5 text-light">History Transaction</h2>
          <div style={{ maxHeight: "250px", overflow: "scroll" }}>
            <Card className="shadow d-flex mb-3 btn-color border border-md card-light">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title className="text-light fw-bold">
                      Tom & Jerry
                    </Card.Title>
                    <Card.Text className="mb-2 text-light">
                      <span className="fw-bold">Saturday,</span> 12 March 2021
                    </Card.Text>
                    <Card.Text className="text-color fw-bold">
                      Total: Rp. 10.000
                    </Card.Text>

                    <Col className="ms-5" style={{ textAlign: "end" }}>
                      <Button className="btn-finish fw-bold fs-5 w-50">
                        Finished
                      </Button>
                    </Col>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
