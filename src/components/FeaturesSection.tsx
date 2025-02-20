import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Heart, MessageSquare, Users } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-12"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="inline-flex p-3 bg-blue-100 text-blue-500 rounded-full mb-4">
              <Upload className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload Catches</h3>
            <p className="text-gray-600">Easily upload photos and details of your prized fishing catches.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="inline-flex p-3 bg-green-100 text-green-500 rounded-full mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Like Catches</h3>
            <p className="text-gray-600">Show appreciation for amazing catches by liking them.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="inline-flex p-3 bg-purple-100 text-purple-500 rounded-full mb-4">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Comment on Catches</h3>
            <p className="text-gray-600">Engage with the community by commenting on shared catches.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="inline-flex p-3 bg-orange-100 text-orange-500 rounded-full mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">User Profiles</h3>
            <p className="text-gray-600">Create your profile and track your uploaded catches.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
