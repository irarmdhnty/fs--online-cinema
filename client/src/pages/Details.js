import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import convertRupiah from "rupiah-format";

import film7 from "../assets/film7.svg";
import banner from "../assets/banner.svg";
import iconPay from "../assets/icon-pay.svg";
import { useQuery } from "react-query";
import { API } from "../config/api";

const Details = () => {
  const params = useParams().id;

  let { data: films } = useQuery("filmCache", async () => {
    const response = await API.get(`/film/${params}`);
    return response.data.data;
  });
  console.log(films);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Image src={films?.image} className="w-50" />
        </Col>
        <Col>
          <Row>
            <Col>
              <h1 className="text-light">{films?.title}</h1>
            </Col>
            <Col className="text-end">
              <Button className="btn-color fw-bold">Buy Now</Button>
            </Col>
          </Row>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="600"
              height="315"
              src={films?.filmUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h5 className="text-light">{films?.category?.name}</h5>
          <h5 className="text-color">{convertRupiah.convert(films?.price)}</h5>
          <p className="text-light">{films?.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
