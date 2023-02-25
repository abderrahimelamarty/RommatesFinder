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
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={offer.images} alt="" />
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {offer.ville}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i> 4<span>0</span>
            </span>
          </div>
          <div className=" people d-flex align-items-center justify-content-between">
            <h6 className="tour__title">
              <Link to={"tours/${id}"}>Offer for rent </Link>
            </h6>
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-user-add-fill"></i>2People
            </span>
          </div>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h6> ${offer.prix}/month</h6>

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
