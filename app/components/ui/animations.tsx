import React, { ReactNode } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <div className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            delay: 0.05 * index,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
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
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </motion.div>
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
      {React.Children.map(children, (child, index) => (
        <FadeInWhenVisible delay={index * staggerDelay}>
          {child}
        </FadeInWhenVisible>
      ))}
    </div>
  );
}

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export function HoverScale({ children, scale = 1.03, className = "" }: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}

export function GradientBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 opacity-70 gradient-flow"></div>
  );
}

interface FloatingAnimationProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function FloatingAnimation({ children, className = "", duration = 6 }: FloatingAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ 
        duration: duration, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

interface PulseAnimationProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function PulseAnimation({ children, className = "", duration = 3 }: PulseAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{ 
        opacity: [0.6, 1, 0.6],
        scale: [0.98, 1.02, 0.98]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
