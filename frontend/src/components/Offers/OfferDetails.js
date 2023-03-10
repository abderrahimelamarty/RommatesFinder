import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
function OfferDetails() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [offer, setData] = useState([]);
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
      console.log(credentials);
      navigate("/thank-you");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img
                  src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
                  alt=""
                />
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
                      <span>{offer.prix}</span>
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
                    Book Now
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
