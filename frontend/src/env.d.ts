declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly BACKEND_ENTRY_POINT: string;
      readonly COOKIE_PREFIX: string;

      readonly NEXT_PUBLIC_WEBSITE_VERSION: string;
    }
  }
}

export {};