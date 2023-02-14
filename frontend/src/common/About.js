import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import "./about.css";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <h2
              className="featured__tour-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              About us
            </h2>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <img src="https://liv.rent/blog/wp-content/uploads/2020/01/2020-02-03-RoommateLiving2-01-min.png" />
                </div>
                <h1>
                  Find your Favorite Rommates and create{" "}
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Implement the recommendation logic in your application code.
                  For this example, let's say we have a Spring Boot app that
                  sells
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__img-box">
                <img
                  src="https://media.houseandgarden.co.uk/photos/637637c2e4eb0449205a261c/1:1/w_1500,h_1500,c_limit/Shot-04_068_RT.jpg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
