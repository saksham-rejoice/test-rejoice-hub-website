/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly DEV: boolean;
  // add more env variables if needed
  [key: string]: any;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
} 