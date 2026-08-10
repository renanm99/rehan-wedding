/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GIFTS_API_URL?: string
  readonly VITE_GIFTS_API_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
