// Type declarations for next/font/google
declare module 'next/font/google' {
  export interface FontOptions {
    weight?: string | string[];
    style?: string | string[];
    subsets?: string[];
    variable?: string;
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    preload?: boolean;
    fallback?: string[];
    adjustFontFallback?: boolean | string;
    declarations?: Array<{
      prop: string;
      value: string;
    }>;
  }

  export interface FontLoader {
    (options?: FontOptions): {
      className: string;
      style: {
        fontFamily: string;
        fontWeight?: number | string;
        fontStyle?: string;
      };
      variable: string;
    };
  }

  // Font loaders for specific Google Fonts
  export const Geist: FontLoader;
  export const Geist_Mono: FontLoader;
  export const Inter: FontLoader;
  export const Roboto: FontLoader;
  export const Roboto_Mono: FontLoader;
  export const Open_Sans: FontLoader;
  export const Montserrat: FontLoader;
  export const Lato: FontLoader;
  export const Poppins: FontLoader;
  export const Source_Sans_3: FontLoader;
  export const Noto_Sans: FontLoader;
  export const Noto_Sans_JP: FontLoader;
  export const Noto_Sans_KR: FontLoader;
  export const Noto_Sans_SC: FontLoader;
  export const Noto_Sans_TC: FontLoader;
}
