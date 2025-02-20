import React from 'react';
import { motion } from 'framer-motion';
import { Fish } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 text-white py-24">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center justify-center p-4 bg-blue-300 bg-opacity-20 rounded-full mb-4"
        >
          <Fish className="text-white h-8 w-8" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl font-bold mb-6"
        >
          Welcome to CatchShare
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg mb-8"
        >
          Share your best fishing catches with the community. Discover amazing catches from around the world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors duration-300">
            Explore Catches
          </button>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517824806704-9040b037703b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmlzaGluZ3x8fHx8fDE2ODU3Nzg4OTQ&ixlib=rb-4.0.3&q=80&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
