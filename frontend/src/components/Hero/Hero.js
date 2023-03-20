import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FiSearch } from "react-icons/fi";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/searchResult/${city}`);
    console.log("hhh");
  };
  return (
    <Container className="mb-5">
      <Row>
        <Col lg="6">
          <div className="hero__content">
            <h1>
              Find your Favorite Rommates and create{" "}
              <span className="highlight"> memories</span>
            </h1>
            <p>
              Implement the recommendation logic in your application code. For
              this example, let's say we have a Spring Boot app that sells
            </p>
          </div>
          <div className="position-relative d-flex align-items-center gap-3">
            <FiSearch className="position-absolute top-50 start-0 translate-middle-y text-muted " />
            <input
              className="form-control ps-5 me-2"
              type="text"
              placeholder="Search Cities"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="btn btn-primary position-absolute end-0 top-0 bottom-0 rounded-end"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </Col>
        <Col lg="6">
          <div className="hero__img-box">
            <img
              src="https://liv.rent/blog/wp-content/uploads/2020/01/2020-02-03-RoommateLiving2-01-min.png"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
