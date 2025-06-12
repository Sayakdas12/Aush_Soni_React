import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import {
  fetchRestaurants,
  filterByName,
  filterTopRated,
} from "../utils/restaurantSlice";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResturentCard from "./ResturentCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  // const { filtered = [], status } = useSelector((state) => state.restaurants);
  const { filtered = [], listStatus: status } = useSelector(
    (state) => state.restaurants.restaurants
  );

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(filterByName(searchText));
  };

  const resultsCount = useMemo(() => filtered.length, [filtered]);

  if (!onlineStatus) return <h1>I'm offline Now</h1>;
  if (status === "loading") return <Shimmer />;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-orange-600 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-yellow-400 filter blur-xl"></div>
            <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-red-500 filter blur-xl"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
            Discover Amazing Restaurants
          </h1>
          <p className="text-xl md:text-2xl opacity-90 relative z-10">
            Find the best dining experiences in your city
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search restaurants by name..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm transition duration-200"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200 flex items-center gap-2 shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>
            <button
              onClick={() => dispatch(filterTopRated())}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center gap-2 shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Top Rated
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          <p className="text-lg">
            Showing <span className="font-semibold">{resultsCount}</span>{" "}
            restaurants
          </p>
        </div>

        {/* Restaurant Grid */}
        {resultsCount === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-4">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">
              No restaurants found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((restaurant) => (
              <ResturentCard key={restaurant.info.id} resData={restaurant} />
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition duration-200 flex items-center justify-center">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Body;
