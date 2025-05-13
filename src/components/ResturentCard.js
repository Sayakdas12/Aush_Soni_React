import { CDN_url } from '../utils/constants';

const ResturentCard = (props) => {
  const { resData = {} } = props;
  const { 
    cloudinaryImageId,
    name,
    costForTwo,
    locality,
    avgRating,
    cuisines = []
  } = resData.info || {}; // 👈 Fix here: accessing `info`

  const fullStars = Math.floor(avgRating || 0); // Fallback for undefined rating

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_url + cloudinaryImageId}
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <p>{locality}</p>
        <p>{costForTwo}</p>
        <p>{cuisines.join(', ')}</p>
        <p>
          {avgRating} {"⭐".repeat(fullStars)}
        </p>
      </div>
    </div>
  );
};

export default ResturentCard;
