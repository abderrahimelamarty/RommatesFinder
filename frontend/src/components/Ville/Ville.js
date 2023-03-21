import React from "react";
import { Link } from "react-router-dom";
import "./Ville.css";
function Ville() {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <Link to="/searchResult">
            {" "}
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/a5/5a/02/chouara-tannery.jpg?w=1200&h=-1&s=1"
              alt=""
              className="featuredImg"
            />
          </Link>
          <div className="featuredTitles">
            <h1>Fés </h1>
          </div>
        </div>

        <div className="featuredItem">
          <Link to="/searchResult">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
          </Link>
          <div className="featuredTitles">
            <h1>Rabat</h1>
          </div>
        </div>
        <div className="featuredItem">
          <Link to="/searchResult">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
          </Link>
          <div className="featuredTitles">
            <h1>Casa</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ville;
