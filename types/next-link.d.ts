// Type declarations for next/link
declare module 'next/link' {
  import { ComponentType, ReactNode } from 'react';

  export interface LinkProps {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    className?: string;
    children?: ReactNode;
    [key: string]: any;
  }

  const Link: ComponentType<LinkProps>;
  export default Link;
}
