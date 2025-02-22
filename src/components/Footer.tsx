import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} CatchShare. All rights reserved.</p>
        <p className="mt-2">
          Powered by Supabase & React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
