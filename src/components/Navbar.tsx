import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from "./UI/Button";
import { Fish } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold">
          <Fish className="mr-2"/>
          CatchShare
        </Link>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span>{user.email}</span>
              <Button variant="secondary" onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to="/login" className="hover:text-blue-200">Login</Link>
              <Link to="/register" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
