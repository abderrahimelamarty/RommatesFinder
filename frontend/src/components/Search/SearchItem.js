import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./searchItem.css";
function SearchItem({ room }) {
  const navigate = useNavigate();
  const handleBook = (e) => {
    console.log(room.id);
    e.preventDefault();
    navigate(`/OfferDetails/${room.id}`);
  };
  return (
    <div>
      {" "}
      <div className="searchItem">
        <img src={room.images} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle d-flex align-items-center gap-1">
            <i class="ri-map-pin-line"></i>
            {room.adresse}
          </h1>

          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span></span>
            <span className=" rating d-flex align-items-center gap-1">
              {" "}
              <h5 className="text-primary"> {room.ville}</h5>
            </span>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">${room.prix}</span>
            <span className="siTaxOp">Includes taxes and fees</span>{" "}
            <button className="siCheckButton" onClick={handleBook}>
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
