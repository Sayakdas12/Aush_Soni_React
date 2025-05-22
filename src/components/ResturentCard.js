import { Link } from "react-router-dom";
import { CDN_url } from "../utils/constants";

const ResturentCard = (props) => {
  const { resData = {} } = props;
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    locality,
    avgRating,
    cuisines = [],
  } = resData.info || {};

  const fullStars = Math.floor(avgRating || 0);
  return (
    <Link className="res-card" to={`/restaurants/${item.card.info.id}`}>
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_url + cloudinaryImageId}
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <p>{locality}</p>
        <p>{costForTwo}</p>
        <p>{cuisines.join(", ")}</p>
        <p>
          {avgRating} {"⭐".repeat(fullStars)}
        </p>
      </div>
    </Link>
  );
};

export default ResturentCard;
