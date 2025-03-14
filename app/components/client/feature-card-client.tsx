'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EnhancedFeatureCard, EnhancedCard, EnhancedButton, PricingCard } from '../ui/feature-card';

// Define the type for EnhancedFeatureCardProps to match the component in feature-card.tsx
interface EnhancedFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: string[];
  delay?: number;
}

export function ClientEnhancedFeatureCard(props: EnhancedFeatureCardProps) {
  return <EnhancedFeatureCard {...props} />;
}

export function ClientEnhancedCard(props: React.ComponentProps<typeof EnhancedCard>) {
  return <EnhancedCard {...props} />;
}

export function ClientEnhancedButton(props: React.ComponentProps<typeof EnhancedButton>) {
  return <EnhancedButton {...props} />;
}

export function ClientPricingCard(props: React.ComponentProps<typeof PricingCard>) {
  return <PricingCard {...props} />;
}
