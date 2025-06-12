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
    sla,
  } = resData.info || {};

  const fullStars = Math.floor(avgRating || 0);
  const ratingColor =
    avgRating >= 4
      ? "bg-green-100 text-green-800"
      : avgRating >= 3
      ? "bg-yellow-100 text-yellow-800"
      : "bg-red-100 text-red-800";

  return (
    <Link
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full"
      to={`/restaurants/${resData.info.id}`}
    >
      {/* Image with fixed aspect ratio */}
      <div className="h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          alt={name}
          src={`${CDN_url}${cloudinaryImageId}`}
          loading="lazy"
        />
      </div>

      {/* Card content */}
      <div className="p-4">
        {/* Name and Rating row */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg truncate">{name}</h3>
          <span
            className={`${ratingColor} px-2 py-1 rounded text-sm font-semibold flex items-center`}
          >
            <span className="mr-1">★</span> {avgRating}
          </span>
        </div>

        {/* Cuisines */}
        <p className="text-gray-600 text-sm mb-2 truncate">
          {cuisines.join(", ")}
        </p>

        {/* Location and details row */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p className="truncate">{locality}</p>
          <span>•</span>
          <p>{sla?.deliveryTime} mins</p>
        </div>

        {/* Price */}
        <p className="mt-2 font-medium text-orange-600">{costForTwo}</p>
      </div>
    </Link>
  );
};

export default ResturentCard;
