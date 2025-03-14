import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function ParticleBackground() {
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
        <div
          key={particle.id}
          className="absolute rounded-full bg-gray-700 dark:bg-gray-300"
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

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <div className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInWhenVisible({ children, delay = 0, className = "" }: FadeInWhenVisibleProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  containerClassName?: string;
}

export function StaggerChildren({ children, staggerDelay = 0.1, containerClassName = "" }: StaggerChildrenProps) {
  return (
    <div className={containerClassName}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
}

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export function HoverScale({ children, scale = 1.05, className = "" }: HoverScaleProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function GradientBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 opacity-70"></div>
  );
}

interface FloatingAnimationProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function FloatingAnimation({ children, className = "", duration = 6 }: FloatingAnimationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface PulseAnimationProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function PulseAnimation({ children, className = "", duration = 3 }: PulseAnimationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
