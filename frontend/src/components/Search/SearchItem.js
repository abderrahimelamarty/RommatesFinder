import React from "react";
import { Link } from "react-router-dom";
import "./searchItem.css";
function SearchItem() {
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
          <h1 className="siTitle">Tower Street Apartments</h1>
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
            <span className="siPrice">$112</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to="/OfferDetails/1">
              {" "}
              <button className="siCheckButton">Rent Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
