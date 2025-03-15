'use client';

import React, { useEffect } from 'react';

export default function CacheBuster() {
  // This component forces a cache invalidation by adding a timestamp to the DOM
  const timestamp = Date.now();
  
  useEffect(() => {
    // Add a meta tag with the current timestamp to force cache invalidation
    const meta = document.createElement('meta');
    meta.name = 'cache-control-timestamp';
    meta.content = timestamp.toString();
    document.head.appendChild(meta);
  }, [timestamp]);
  
  // Add an invisible element with the timestamp to force DOM differences
  return <div data-timestamp={timestamp} style={{ display: 'none' }} />;
}
