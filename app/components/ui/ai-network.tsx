import React from 'react';
import { motion } from 'framer-motion';

export function AINetworkAnimation() {
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
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          // Skip rendering if nodes are not found
          if (!fromNode || !toNode) return null;
          
          return (
            <line
              key={`connection-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity={0.6}
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={node.id === 6 ? 3 : 2}
            fill={node.id === 6 ? "#000" : "currentColor"}
            opacity={1}
          />
        ))}
      </svg>
    </div>
  );
};

export function CircuitPattern() {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 50 L 50 50 L 50 0" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 50 100 L 50 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export const GridPattern = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export const DotsPattern = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
};
