'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// 肉球のパスデータ
const pawSvgPath = "M12 2c2.21 0 4 1.79 4 4 0 1.5-.5 2.73-1.71 4.3-.5.64-1.08 1.34-1.6 2.06-.59.8-1.09 1.63-1.38 2.5a9.969 9.969 0 0 0-.31 2.14c0 .55-.45 1-1 1s-1-.45-1-1c0-.75.11-1.5.31-2.14.3-.87.79-1.7 1.38-2.5.52-.71 1.1-1.42 1.6-2.06C13.5 8.73 14 7.5 14 6c0-1.1-.9-2-2-2s-2 .9-2 2c0 .55-.45 1-1 1s-1-.45-1-1c0-2.21 1.79-4 4-4zm7 16c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-.55.45-1 1-1s1 .45 1 1c0 1.1.9 2 2 2s2-.9 2-2c0-.55.45-1 1-1s1 .45 1 1zM5 6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .55-.45 1-1 1s-1-.45-1-1c0-1.1-.9-2-2-2s-2 .9-2 2c0 .55-.45 1-1 1s-1-.45-1-1zm-1 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-.55.45-1 1-1s1 .45 1 1c0 1.1.9 2 2 2s2-.9 2-2c0-.55.45-1 1-1s1 .45 1 1z";

// 肉球のコンポーネント
const Paw = ({ size, color, delay, duration, x, y }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ 
        opacity: 0, 
        x, 
        y,
        rotate: Math.random() * 360 
      }}
      animate={{ 
        opacity: [0, 0.7, 0.5, 0.7, 0],
        x: [x, x + Math.random() * 100 - 50],
        y: [y, y - 100 - Math.random() * 200],
        rotate: [Math.random() * 360, Math.random() * 360 + 180]
      }}
      transition={{ 
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
      style={{ position: 'absolute' }}
    >
      <path d={pawSvgPath} fill={color} />
    </motion.svg>
  );
};

// 肉球背景全体のコンポーネント
export const FloatingPaws = ({ count = 20 }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  
  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {dimensions.width > 0 && Array.from({ length: count }).map((_, i) => {
        // 各肉球のランダム値を設定
        const size = Math.random() * 30 + 20; // 20-50px
        const colors = ['rgba(255, 200, 210, 0.6)', 'rgba(255, 180, 190, 0.6)', 'rgba(240, 170, 180, 0.6)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 15; // 15-25秒
        const x = Math.random() * dimensions.width;
        const y = dimensions.height + Math.random() * 100;
        
        return (
          <Paw
            key={i}
            size={size}
            color={color}
            delay={delay}
            duration={duration}
            x={x}
            y={y}
          />
        );
      })}
    </div>
  );
}; 