import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const tileVariants = {
  hidden: ({ x, y, rot }) => ({ opacity: 0, x, y, rotate: rot, scale: 0.5 }),
  show: ({ delay }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MosaicImage = ({ src, alt, rows = 5, cols = 5, className = '' }) => {
  const tiles = useMemo(() => {
    const temp = [];

    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        temp.push({
          r,
          c,
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 400,
          rot: (Math.random() - 0.5) * 180,
        });
      }
    }

    return temp;
  }, [rows, cols]);

  return (
    <motion.div
      className={`relative w-full overflow-hidden bg-slate-900/50 rounded-xl ${className}`.trim()}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img src={src} alt={alt} className="sr-only" />

      {tiles.map((tile) => {
        const rowMajorDelay = ((tile.r * cols) + tile.c) * 0.03;

        return (
          <motion.div
            key={`${tile.r}-${tile.c}`}
            custom={{ x: tile.x, y: tile.y, rot: tile.rot, delay: rowMajorDelay }}
            variants={tileVariants}
            className="relative overflow-hidden shadow-sm"
          >
            <motion.img
              src={src}
              alt=""
              aria-hidden="true"
              draggable="false"
              className="absolute max-w-none"
              style={{
                width: `${cols * 100}%`,
                height: `${rows * 100}%`,
                left: `${-tile.c * 100}%`,
                top: `${-tile.r * 100}%`,
                objectFit: 'cover',
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default MosaicImage;
