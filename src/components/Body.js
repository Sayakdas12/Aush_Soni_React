import ResturentCard from "./ResturentCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// API Call
const Body = () => {
  const [ListofResturents, setListofResturents] = useState([]);
  const [update, setupdate] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.8773803&lng=75.8558431&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListofResturents(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setupdate(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return !update || update.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <form className="search-form" action="#" method="get">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              //filter logic

              const filteredRestaurent = ListofResturents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setupdate(filteredRestaurent);
            }}
          >
            🔍
          </button>
        </form>
      </div>

      <div className="res-contener">
        {update &&
          update
            .filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((resturent) => (
              <ResturentCard key={resturent.info.id} resData={resturent} />
            ))}
      </div>

      {/* Filter The page acording to a rating */}
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = ListofResturents.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListofResturents(filterList);
          }}
        >
          Top Restaurant
        </button>
      </div>
    </div>
  );
};
export default Body;
