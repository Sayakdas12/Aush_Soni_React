// components/UserProfile.js
import { useAuth } from "../utils/AuthContext";

const UserProfile = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
        {user.name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">{user.name}</p>
        <button
          onClick={logout}
          className="text-xs text-blue-600 hover:text-blue-800"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
