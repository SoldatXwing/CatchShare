import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login'); // Redirect to login if not authenticated
    return null; // Or render a loading state
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard, {user.email}</h2>
      <p>This is your personalized dashboard where you can manage your fishing catches and profile.</p>
      {/* Add dashboard content here */}
    </div>
  );
};

export default DashboardPage;
