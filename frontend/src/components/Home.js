import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Subtitle from "../common/Subtitle.Js";

import UserService from "../services/user.service";
import Offers from "./Offers/Offers";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle Subtitle={"know before you go"} />
                <img src="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="mx-5">
        <Col lg="12" className="mb-5">
          <h2
            className="featured__tour-title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Rooms For You
          </h2>
        </Col>
        <Offers />
      </Row>
    </section>
  );
};

export default Home;
