import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Roommate.css";

function Roommate({ roommate }) {
  const navigate = useNavigate();
  const book = (e, id) => {
    console.log(id);
    e.preventDefault();
    navigate(`/roommate/${roommate.id}`);
  };
  return (
    <div>
      <Link className="link">
        <div className="gigCard" onClick={book}>
          <img src={roommate.image} alt="" />
          <div className="info">
            <div className="user">
              <img src={roommate.image} alt="" />
              <span>{roommate.username}</span>
            </div>

            <p>c'est un description qui vous donne une idée sur moi</p>
            <div class="row ">
              <div class="col-lg-2">
                <span class="text-dark-light font-semibold italic   ">
                  Interests:
                </span>
              </div>
              <div class="col-lg-10">
                <ul class="d-flex align-items-center">
                  <li class="list-inline-item rounded-3 px-1 bg-primary bg-opacity-10  text-primary font-semibold fw-bold small">
                    MUSIC
                  </li>
                  <li class="list-inline-item rounded-3 px-1 bg-primary bg-opacity-10  text-primary font-semibold fw-bold small">
                    Football
                  </li>
                  <li class="list-inline-item rounded-3 px-1 bg-primary bg-opacity-10  text-primary font-semibold fw-bold small">
                    Tennis
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="detail">
            <i className="ri-heart-line"></i>
            <div className="price">
              <span>STARTING AT</span>
              <h2>${roommate.prix}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Roommate;
