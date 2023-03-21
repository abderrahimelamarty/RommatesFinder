import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getRoommmates } from "../../services/Roommate-service";
import RoomsService from "../../services/rooms-service";
import SearchItem from "./SearchItem";
import "./searchResult.css";
function SearchResult() {
  const [destination, setDestination] = useState("ville");
  const navigate = useNavigate();
  const [options, setOptions] = useState("No");
  const [rooms, setRooms] = useState();
  const [ville, setVille] = useState();
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
    const fetchRommates = async () => {
      try {
        const { data } = await getRoommmates();
        const data2 = data.filter((e) => e.ville == city);
        console.log(data2);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRommates();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    RoomsService.getRoomsBycity(ville).then(
      (response) => {
        console.log(response.data);
        setRooms(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div>
      <div>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input
                  placeholder={destination}
                  type="text"
                  onChange={(e) => setVille(e.target.value)}
                />
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
              <button onClick={handleSearch}>Search</button>
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
