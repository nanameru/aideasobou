// Type declarations for Node.js process
declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_GOOGLE_FORM_URL?: string;
  }

  interface Process {
    env: ProcessEnv;
  }
}

declare const process: NodeJS.Process;
