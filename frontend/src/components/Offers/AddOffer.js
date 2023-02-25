import React from "react";
import { Link } from "react-router-dom";
import "./AddOffer.css";
function AddOffer() {
  return (
    <div className="options__container mx-5">
      <div class="options__wrapper ">
        <a class=" options__item d-flex align-items-center justify-content-between">
          <p class="options__image">
            <img
              class="options__img"
              src="https://assets.spareroom.com/img/spareroom/v4/other_items/room_only.png"
              alt="Rooms to Rent"
            />
          </p>
          <div class="options__description">
            <h3 class="options__description-title">Rooms for Rent ad</h3>
            Advertise one or more rooms in a property
          </div>
          <p class="options__button-container">
            <Link to="/addRoom">
              {" "}
              <button class="btn  btn-info">Post a free ad</button>
            </Link>{" "}
          </p>
        </a>

        <a class="  options__item d-flex align-items-center justify-content-between">
          <p class="options__image">
            <img
              class="options__img"
              src="https://assets.spareroom.com/img/spareroom/v4/other_items/whole_property.png"
              alt="Whole Property to Rent"
            />
          </p>
          <div>
            <h3>Whole Apartment for Rent ad</h3>
            Rent out a whole vacant property (with no existing roommates) on a
          </div>
          <p>
            <Link to="/addRoom">
              {" "}
              <button class="btn  btn-info">Post a free ad</button>
            </Link>{" "}
          </p>
        </a>
      </div>
    </div>
  );
}

export default AddOffer;
