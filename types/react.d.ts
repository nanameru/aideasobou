// Type declarations for React
import * as React from 'react';

declare module 'react' {
  // 基本型定義
  export type Key = string | number;
  
  export interface RefObject<T> {
    readonly current: T | null;
  }
  
  export type Ref<T> = RefObject<T> | ((instance: T | null) => void) | null;
  
  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }
  
  export interface JSXElementConstructor<P> {
    (props: P): ReactElement<P, any> | null;
  }
  
  export type ReactText = string | number;
  export type ReactChild = ReactElement | ReactText;
  export type ReactFragment = {} | ReactNodeArray;
  export interface ReactNodeArray extends Array<ReactNode> {}
  export type ReactNode = ReactChild | ReactFragment | boolean | null | undefined;
  
  // React Hooks
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
  
  export = React;
  export as namespace React;
}
