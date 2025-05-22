import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShimmerManu from "./ShimmerManu";
import { CDN_url, MENU_API } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const fallbackImageURL =
  "https://via.placeholder.com/200x150?text=Image+Not+Found";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const navigate = useNavigate(); // ✅ useNavigate at the top

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <ShimmerManu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <header className="menu-header">
        <div className="menu-header-left">
          <img
            src={
              cloudinaryImageId ? CDN_url + cloudinaryImageId : fallbackImageURL
            }
            alt="Restaurant"
          />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
          </div>
          <div className="bottom">
            <h4 className="avg-rating">
              <span className="icons">
                <AiOutlineStar />
              </span>
              <span>{avgRating}</span>
            </h4>
            <h4 className="time">
              <span className="icons">
                <FiClock />
              </span>
              <span>{deliveryTime} MINS</span>
            </h4>
            <h3>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>

      <div className="menu-main">
        <h2>Menu</h2>
        <h3 className="items">{itemCards.length} items</h3>
        <div className="menu-main-card-container">
          {itemCards.map((item) => (
            <div
              key={item.card.info.id}
              className="menu-card"
              onClick={() => {
                navigate(`/restaurants/:resId`);
                alert("Item clicked");
              }}
            >
              <div className="menu-card-left">
                <h2 className="menu-name">{item.card.info.name}</h2>
                <h3 className="menu-price">
                  ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
                </h3>
                <h4 className="menu-description">
                  {item.card.info.description}
                </h4>
              </div>
              <div className="menu-card-right">
                <img src={CDN_url + item.card.info.imageId} alt="Menu Info" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
