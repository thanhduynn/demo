'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { motion, useAnimation } from 'framer-motion';

export default function Body() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNearTop, setIsNearTop] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header if scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        controls.start('visible');
      } 
      // Hide header if scrolling down and not at the top
      else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        controls.start('hidden');
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e:any) => {
      // Show header if mouse is within 100px of the top
      if (e.clientY < 100) {
        controls.start('visible');
        setIsNearTop(true);
      } else {
        setIsNearTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY, controls]);

  const variants = {
    visible: { 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30
      }
    },
    hidden: { 
      y: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30
      }
    }
  };

  return (
    <motion.header
      initial="visible"
      animate={controls}
      variants={variants}
      className="fixed top-0 left-0 w-full z-[1000] transition-colors duration-300"
    >
      <Navbar />
    </motion.header>
  );
}