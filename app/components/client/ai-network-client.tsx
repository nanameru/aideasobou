'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ClientAINetworkAnimation() {
  // Define nodes and connections for the network
  const nodes = [
    { id: 1, x: 50, y: 30 },
    { id: 2, x: 70, y: 50 },
    { id: 3, x: 30, y: 50 },
    { id: 4, x: 40, y: 70 },
    { id: 5, x: 60, y: 70 },
    { id: 6, x: 50, y: 50 },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 5 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 6, to: 1 },
    { from: 6, to: 2 },
    { from: 6, to: 3 },
    { from: 6, to: 4 },
    { from: 6, to: 5 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          // Skip rendering if nodes are not found
          if (!fromNode || !toNode) return null;
          
          return (
            <motion.line
              key={`connection-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.6, pathLength: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.5 + index * 0.1,
                ease: "easeInOut"
              }}
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={node.id === 6 ? 3 : 2}
            fill={node.id === 6 ? "#000" : "currentColor"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              r: node.id === 6 ? 
                [3, 3.5, 3] : 
                [2, 2.2, 2]
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2 * index,
              r: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export function ClientCircuitPattern() {
  return (
    <div className="absolute inset-0 opacity-10">
      <motion.svg 
        width="100%" 
        height="100%" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <defs>
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <motion.path 
              d="M 0 50 L 50 50 L 50 0" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path 
              d="M 50 100 L 50 50 L 100 50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.circle 
              cx="50" 
              cy="50" 
              r="3" 
              fill="currentColor"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </motion.svg>
    </div>
  );
};

export function ClientParticleBackground() {
  // Generate random particles
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gray-700 dark:bg-gray-300"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.8, 0.3], 
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};
