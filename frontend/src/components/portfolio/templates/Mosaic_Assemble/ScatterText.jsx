import React from 'react';
import { motion } from 'framer-motion';

export const ScatterItem = ({ children, delay = 0, className = '' }) => {
  const x = (Math.random() - 0.5) * 100;
  const y = (Math.random() - 0.5) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x, y, rotate: (Math.random() - 0.5) * 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
