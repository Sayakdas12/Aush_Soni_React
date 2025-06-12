import React from "react";

const servicesData = [
  {
    title: "Fast Delivery",
    description: "Get your food delivered in under 30 minutes or it's free!",
    icon: "🚴‍♂️",
  },
  {
    title: "Variety of Cuisines",
    description: "Choose from 1000+ restaurants with diverse menus.",
    icon: "🍽️",
  },
  {
    title: "Easy Ordering",
    description: "Simple 3-step ordering process with live tracking.",
    icon: "📱",
  },
  {
    title: "24/7 Support",
    description: "Our customer care is always ready to help you.",
    icon: "🛎️",
  },
  {
    title: "Meal Plans",
    description: "Subscribe to weekly meal plans and save up to 20%.",
    icon: "🗓️",
  },
  {
    title: "Group Orders",
    description: "Perfect for office lunches or family gatherings.",
    icon: "👨‍👩‍👧‍👦",
  },
];

const Services = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-600 sm:text-4xl mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make food delivery fast, easy, and delightful!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            Download Our App
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
