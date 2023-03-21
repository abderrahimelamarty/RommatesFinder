import React, { useEffect, useRef } from "react";
import { useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import AuthService from "../../services/auth.service";
import RoomsService from "../../services/rooms-service";
import {
  Col,
  Container,
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import "./OfferDetails.css";
import { createChat, findChat } from "../../services/chat-service";
function OfferDetails() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [offer, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [room, setRoom] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    RoomsService.getRoom(id).then(
      (response) => {
        console.log(response.data);
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: "id",
    userEmail: "abdo@gmail.com",
    fullName: "",
    phone: "",
    guestSize: "",
    bookAt: "",
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (currentUser) {
      const phoneNumber = "212643340259";

      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, "_blank");
    } else {
      navigate("/login");
    }
  };
  const handleCreateChat = async (e) => {
    e.preventDefault();
    const Ids = {
      senderId: currentUser.id,
      receiverId: offer.userId,
    };
    console.log(Ids);

    try {
      const data = createChat(Ids);
      navigate("/Chat");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={offer.images} alt="" />
                <div className="tour__info">
                  <h2>{offer.ville}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i class="ri-star-fill"></i> 4<span>3</span>
                    </span>
                    <span>
                      <i class="ri-map-pin-line"></i> {offer.adresse}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      {" "}
                      <i class="ri-map-pin-line"></i> {offer.adresse}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-fill"></i>
                      {offer.prix} DH
                    </span>
                    <span>
                      <i class="ri-group-fill"></i>2 persons
                    </span>
                  </div>
                  <h5> Description</h5>
                  <p>{offer.adresse}</p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="booking">
                <div className="booking__top d-flex align-items-center justify-content-between ">
                  <h3>
                    {" "}
                    $ {offer.prix}
                    <span>/ per person</span>
                  </h3>
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i> 4 <span>3</span>
                  </span>
                </div>
                <div className="booking__form">
                  <h5>Information</h5>
                  <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Full name"
                        id="fullName"
                        required
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="number"
                        placeholder="Phone"
                        id="phone"
                        required
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                      <input
                        type="date"
                        placeholder=""
                        id="bookAt"
                        required
                        onChange={handleChange}
                      />
                      <input
                        type="number"
                        placeholder="Guest"
                        id="guestSize"
                        required
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Form>
                </div>
                <div className="booking__bottom">
                  <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                      <h5 className="d-flex alin-items-center gap-1">
                        ${offer.prix}
                        <i class="ri-close-line"></i>1 person
                      </h5>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                      <h5>Service Charge</h5>
                      <span>$10</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                      <h5>Total</h5>
                      <span>$109</span>
                    </ListGroupItem>
                  </ListGroup>
                  <button
                    className="btn btn-primary rounded-5 w-100 mt-4"
                    onClick={handleClick}
                  >
                    Whatsap
                  </button>

                  <button
                    className="btn btn-primary rounded-5 w-100 mt-4"
                    onClick={handleCreateChat}
                  >
                    message
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OfferDetails;
