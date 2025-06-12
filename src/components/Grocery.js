import React from "react";

const groceries = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "$3.99 / kg",
    image:
      "https://cdn.pixabay.com/photo/2017/01/20/15/06/apple-1995056_1280.jpg",
    category: "fruits",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: "$2.49 / kg",
    image:
      "https://images-cdn.ubuy.co.in/650c519f6058624e4066f751-marketside-fresh-organic-bananas-bunch.jpg",
    category: "fruits",
  },
  {
    id: 3,
    name: "Carrots",
    price: "$1.89 / kg",
    image: "https://static.toiimg.com/photo/105672842.cms",
    category: "vegetables",
  },
  {
    id: 4,
    name: "Broccoli",
    price: "$2.79 / kg",
    image:
      "https://www.eurokidsindia.com/blog/wp-content/uploads/2024/06/broccoli-for-babies-870x437.jpg",
    category: "vegetables",
  },
  {
    id: 5,
    name: "Tomatoes",
    price: "$1.99 / kg",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238253_1280.jpg",
    category: "vegetables",
  },
  {
    id: 6,
    name: "Potatoes",
    price: "$0.99 / kg",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN440-Potatoes-732x549-thumb-732x549.jpg",
    category: "vegetables",
  },
  {
    id: 7,
    name: "Spinach",
    price: "$1.59 / bunch",
    image:
      "https://www.greendna.in/cdn/shop/files/palak2_1200x1200.jpg?v=1715600291",
    category: "leafy-greens",
  },
  {
    id: 8,
    name: "Cucumbers",
    price: "$1.29 / kg",
    image:
      "https://assets.epicurious.com/photos/57b4c375ac22d6f011673ff5/1:1/w_2560%2Cc_limit/quick-pickled-cucumbers.jpg",
    category: "vegetables",
  },
  {
    id: 9,
    name: "Red Onions",
    price: "$1.49 / kg",
    image:
      "https://cdn.shopify.com/s/files/1/1375/4957/files/blog_img_6.jpg?v=1573206246",
    category: "vegetables",
  },
  {
    id: 10,
    name: "Green Peas",
    price: "$2.19 / kg",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/12/OM/ZU/BN/119495321/frozen-green-peas.jpg",
    category: "vegetables",
  },
];

const Grocery = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");

  const categories = ["all", "fruits", "vegetables", "leafy-greens"];

  const filteredGroceries = groceries.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          🛒 Fresh Market Groceries
        </h1>
        <p className="text-lg text-gray-600">
          Farm-fresh produce delivered to your doorstep
        </p>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search groceries..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() +
                  category.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grocery Grid */}
      {filteredGroceries.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredGroceries.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {item.category.replace("-", " ")}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-green-600 font-medium mb-4">{item.price}</p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto text-center py-16">
          <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-4">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
            No items found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Special Offer Banner */}
      <div className="max-w-7xl mx-auto mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">Special Offer!</h3>
            <p className="opacity-90">
              Get 15% off on your first order with code FRESH15
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-green-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
            Claim Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
