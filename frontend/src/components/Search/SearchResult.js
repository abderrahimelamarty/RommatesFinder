import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import RoomsService from "../../services/rooms-service";
import SearchItem from "./SearchItem";
import "./searchResult.css";
function SearchResult() {
  const location = useLocation();
  const [destination, setDestination] = useState("ville");
  const [date, setDate] = useState("01/12/2001");
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState("No");
  const [rooms, setRooms] = useState();
  const { city } = useParams();

  useEffect(() => {
    RoomsService.getRoomsBycity(city).then(
      (response) => {
        console.log(response.data);
        setRooms(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div>
      <div>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input placeholder={destination} type="text" />
              </div>

              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Min price per night</span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Max price per night</span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="listResult">
              {rooms?.map((offer) => (
                <div key={offer.id}>
                  <SearchItem room={offer} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
