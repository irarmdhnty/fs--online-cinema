import React from "react";
import { Container, Table } from "react-bootstrap";

const HomeAdmin = () => {
  return (
    <Container>
        <h1 className="text-light mb-5">Incoming Transaction</h1>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>User</th>
          <th>Bukti Transfer</th>
          <th>Film</th>
          <th>Number Account</th>
          <th>Status Payment</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Andi</td>
          <td>bcs.jpg</td>
          <td>Tom & Jerry</td>
          <td>34567890</td>
          <td>pending</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
};

export default HomeAdmin;
