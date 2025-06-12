import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useAuth } from "../utils/AuthContext";
import UserProfile from "./UserProfile";

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={LOGO_URL} alt="Logo" className="h-10 w-10 object-contain" />
          <h1 className="text-2xl font-bold text-orange-500">Sweet 🍒</h1>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium text-base">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-orange-500 transition">
            Services
          </Link>
          <Link to="/grocery" className="hover:text-orange-500 transition">
            Grocery
          </Link>
          <Link to="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
          <Link to="/cart" className="hover:text-orange-500 transition">
            🛒 Cart
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {isAuthenticated() ? (
            <>
              <UserProfile />
            </>
          ) : (
            <Link
              to="/login"
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
