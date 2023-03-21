import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardBody, Card } from "reactstrap";
import "./Offer.css";

function Offer({ offer }) {
  const navigate = useNavigate();
  const book = (e, id) => {
    console.log(id);
    e.preventDefault();
    navigate(`/OfferDetails/${id}`);
  };
  return (
    <div className="tour__card rounded-10">
      <Card>
        <div className="tour__img">
          <img src={offer.images} alt="" />
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="user d-flex align-items-center gap-3">
              <img src={offer.images} alt="" />
              <span>{offer.username}</span>
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <span>{offer.prix} $</span>
            </span>
          </div>
          <div className=" people d-flex align-items-center justify-content-between">
            <h6 className="tour__title d-flex align-items-center gap-3">
              <i class="ri-map-pin-line"></i>{" "}
              <span style={{ color: "blue" }}>{offer.adresse}</span>
            </h6>
          </div>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <button className="btn booking__btn ">
              <a onClick={(e, id) => book(e, offer.id)}>More Details</a>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Offer;
