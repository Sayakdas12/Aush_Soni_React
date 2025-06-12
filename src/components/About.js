import React from "react";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 py-8 px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">About Us</h1>
          <p className="text-xl text-orange-100 font-medium">
            Passionate about delivering great food and experiences 🍽️
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="mb-10">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to{" "}
              <span className="font-bold text-orange-600">
                Sayak's Food World
              </span>
              ! We are dedicated to bringing you the best food delivery
              experience. Our mission is to connect people with the most
              delicious meals from their favorite restaurants — fast, easy, and
              with a smile.
            </p>

            {/* Team Member Section */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <div className="flex justify-center">
                <UserClass />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
              <div className="text-orange-500 text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your food delivered in record time
              </p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
              <div className="text-orange-500 text-3xl mb-3">🍕</div>
              <h3 className="font-bold text-gray-800 mb-2">Diverse Menu</h3>
              <p className="text-gray-600">
                From local favorites to international cuisine
              </p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
              <div className="text-orange-500 text-3xl mb-3">⭐</div>
              <h3 className="font-bold text-gray-800 mb-2">Quality First</h3>
              <p className="text-gray-600">
                Only the best restaurants make it to our platform
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white py-6 px-6 text-center">
          <p className="flex items-center justify-center space-x-2">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>by SAYAK & Team</span>
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            © {new Date().getFullYear()} Sayak's Food World. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
