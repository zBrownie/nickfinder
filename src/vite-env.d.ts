/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEN_IA_KEY: string;
  readonly VITE_GEN_IA_MODEL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
