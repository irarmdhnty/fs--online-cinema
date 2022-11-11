import React from "react";
import { Button, Carousel } from "react-bootstrap";

import carousel1 from "../assets/carousel1.svg";

const Carousels = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
        <Carousel.Caption className="bg-carousel text-start">
          <p className="bg-carousel mb-3 fs-1 fw-bold">
            {" "}
            <span className="text-danger bg-carousel">Dead</span> Pool
          </p>
          <h4 className="fw-bold bg-carousel">Action</h4>
          <h5 className="text-color fw-bold bg-carousel">Rp.99,000</h5>
          <p className="w-75 bg-carousel">
            Hold onto your chimichangas, folks. From the studio that brought you
            all 3 Taken films comes the block-busting, fourth-wall-breaking
            masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s
            perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL
            is a giddy slice of awesomeness packed with more twists than
            Deadpool’s enemies’ intestines and more action than prom night.
            Amazeballs!
          </p>
          <Button className="btn-color ">Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
        <Carousel.Caption className="bg-carousel text-start">
          <p className="bg-carousel mb-3 fs-1 fw-bold">
            {" "}
            <span className="text-danger bg-carousel">Dead</span> Pool
          </p>
          <h4 className="fw-bold bg-carousel">Action</h4>
          <h5 className="text-color fw-bold bg-carousel">Rp.99,000</h5>
          <p className="w-75 bg-carousel">
            Hold onto your chimichangas, folks. From the studio that brought you
            all 3 Taken films comes the block-busting, fourth-wall-breaking
            masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s
            perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL
            is a giddy slice of awesomeness packed with more twists than
            Deadpool’s enemies’ intestines and more action than prom night.
            Amazeballs!
          </p>
          <Button className="btn-color ">Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
