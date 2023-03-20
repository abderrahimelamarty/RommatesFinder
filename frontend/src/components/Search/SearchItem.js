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
        <img
          src="https://s7d2.scene7.com/is/image/ritzcarlton/pnrqz-king-50661983?$XlargeViewport100pct$"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">{room.adresse}</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp rating d-flex align-items-center gap-1">
            <i class="ri-wifi-line"></i>wiffi speed 5G
          </span>
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
            <span>Excellent</span>
            <span className=" rating d-flex align-items-center gap-1">
              {" "}
              8.9<i class="ri-star-fill"></i>
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
