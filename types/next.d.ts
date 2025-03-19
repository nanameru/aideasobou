// Type declarations for next
declare module 'next' {
  import { NextConfig as OriginalNextConfig } from 'next/dist/server/config';
  import { IncomingMessage, ServerResponse } from 'http';
  import { UrlObject } from 'url';
  import React from 'react';

  // Re-export types from next
  export * from 'next/dist/shared/lib/utils';
  
  // Metadata types
  export interface Metadata {
    title?: string | { default: string; template?: string; absolute?: string };
    description?: string;
    applicationName?: string;
    authors?: Array<{ name: string; url?: string }> | { name: string; url?: string };
    generator?: string;
    keywords?: string | string[];
    referrer?: 'no-referrer' | 'origin' | 'no-referrer-when-downgrade' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
    themeColor?: string;
    colorScheme?: 'normal' | 'light' | 'dark' | 'light dark' | 'only light';
    viewport?: {
      width?: string | number;
      height?: string | number;
      initialScale?: number;
      minimumScale?: number;
      maximumScale?: number;
      userScalable?: boolean;
      viewportFit?: 'auto' | 'cover' | 'contain';
    } | string;
    creator?: string;
    publisher?: string;
    robots?: string | {
      index?: boolean;
      follow?: boolean;
      nocache?: boolean;
      googleBot?: string | {
        index?: boolean;
        follow?: boolean;
        noimageindex?: boolean;
        'max-video-preview'?: number | string;
        'max-image-preview'?: 'none' | 'standard' | 'large';
        'max-snippet'?: number;
      };
    };
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      images?: Array<{
        url: string;
        alt?: string;
        width?: string | number;
        height?: string | number;
      }> | {
        url: string;
        alt?: string;
        width?: string | number;
        height?: string | number;
      };
      locale?: string;
      type?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
    };
    twitter?: {
      card?: 'summary' | 'summary_large_image' | 'app' | 'player';
      site?: string;
      creator?: string;
      title?: string;
      description?: string;
      images?: string | string[] | {
        url: string;
        alt?: string;
      } | Array<{
        url: string;
        alt?: string;
      }>;
    };
    verification?: {
      google?: string | string[];
      yandex?: string | string[];
      yahoo?: string | string[];
      other?: Record<string, string | string[]>;
    };
    appleWebApp?: {
      capable?: boolean;
      title?: string;
      statusBarStyle?: 'default' | 'black' | 'black-translucent';
    };
    formatDetection?: {
      telephone?: boolean;
      date?: boolean;
      address?: boolean;
      email?: boolean;
      url?: boolean;
    };
    itunes?: {
      appId: string;
      appArgument?: string;
    };
    appLinks?: {
      ios?: {
        url: string;
        app_store_id?: string;
      } | Array<{
        url: string;
        app_store_id?: string;
      }>;
      android?: {
        package: string;
        url: string;
      } | Array<{
        package: string;
        url: string;
      }>;
      web?: {
        url: string;
        should_fallback?: boolean;
      } | Array<{
        url: string;
        should_fallback?: boolean;
      }>;
    };
    archives?: string | string[];
    assets?: string | string[];
    bookmarks?: string | string[];
    category?: string;
    classification?: string;
    other?: Record<string, string | number | boolean | null | undefined>;
  }

  // Next.js config types
  export interface NextConfig extends OriginalNextConfig {
    // Add any additional properties here
  }
}
