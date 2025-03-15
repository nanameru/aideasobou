'use client';

import React from 'react';
import { ArrowRightIcon } from '../ui/icons';

interface GoogleFormButtonProps {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function GoogleFormButton({ className = "", children, icon }: GoogleFormButtonProps) {
  // Hardcoded URL for production reliability
  const googleFormUrl = "https://docs.google.com/forms/d/1UICzT0z-bjUoNiGjF0NFufGG7G8laBNPNHIaaoUxd4k/edit";
  
  return (
    <a 
      href={googleFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <span className="flex items-center justify-center">
        {children}
        {icon || (
          <span className="ml-2 inline-flex">
            <ArrowRightIcon className="w-5 h-5" />
          </span>
        )}
      </span>
    </a>
  );
}
