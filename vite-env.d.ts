/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPER_BASE_URL: string;
  readonly VITE_SUPER_BASE_PUBLIC_KEY: string;
  readonly API_KEY: string;
  readonly BACKEND_PROXY_URL?: string;
  readonly VITE_DEBUG_MODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
