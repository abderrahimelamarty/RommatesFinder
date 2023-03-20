import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";
import { getRoommmates } from "../../services/Roommate-service";
import Roommate from "./Roommate";

function Roommates({ initialSlide = 0 }) {
  const [roommates, setRoommates] = useState();
  useEffect(() => {
    const fetchRommates = async () => {
      try {
        const { data } = await getRoommmates();
        console.log(data);
        setRoommates(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRommates();
  }, []);

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {roommates?.map((roommate) => (
          <Roommate roommate={roommate} />
        ))}
      </Slider>
    </div>
  );
}

export default Roommates;
