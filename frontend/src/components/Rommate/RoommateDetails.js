import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getRoommmate } from "../../services/Roommate-service";
import "./RoommateDetails.css";

function RoommateDetails() {
  const { id } = useParams();
  const [roommate, setRoommate] = useState();
  useEffect(() => {
    const fetchRommates = async () => {
      try {
        const { data } = await getRoommmate(id);
        console.log(data);
        setRoommate(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRommates();
  }, []);
  return (
    <div>
      <div className="main-wrapper">
        <div className="container2">
          <div className="product-div">
            <div className="product-div-left">
              <div className="img-container">
                <img className="img1" src={roommate?.image} alt="watch" />
              </div>
              <div className="hover-container"></div>
            </div>
            <div className="product-div-right">
              <div className="d-flex align-items-center justify-content-between">
                <span className="product-name">{roommate?.username}</span>
                <span className="product-ville d-flex align-items-center gap-2">
                  {" "}
                  <i class="ri-map-pin-line"></i>
                  {roommate?.ville}
                </span>
              </div>
              <span className="product-price">$ {roommate?.prix}</span>

              <p className="product-description mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                animi ad minima veritatis dolore. Architecto facere dignissimos
                voluptate fugit ratione molestias quis quidem exercitationem
                voluptas.
              </p>
              <div className="row ">
                <div className="col-lg-2">
                  <span className="text-dark-light font-semibold italic   ">
                    Interests:
                  </span>
                </div>
                <div className="col-lg-10">
                  <ul className="d-flex align-items-center">
                    <li className="list-inline-item rounded-3 px-1 bg-primary bg-opacity-10  text-primary font-semibold fw-bold small">
                      MUSIC
                    </li>
                    <li className="list-inline-item rounded-3 px-1 bg-primary bg-opacity-10  text-primary font-semibold fw-bold small">
                      Football
                    </li>
                    <li className="list-inline-item rounded-3 px-1 bg-primary bg-opacity-10  text-primary font-semibold fw-bold small">
                      Tennis
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <button
                  type="button"
                  className="btn btn-primary mt-5 d-flex align-items-center gap-1"
                >
                  <i class="ri-chat-1-line"></i>
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-primary mt-5 d-flex align-items-center gap-1"
                >
                  <i class="ri-whatsapp-line"></i> Whatsap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoommateDetails;
