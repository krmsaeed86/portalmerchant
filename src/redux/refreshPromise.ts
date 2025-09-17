import { refreshToken } from "./refreshToken";

// refreshPromise.ts
let refreshPromise: Promise<{ success: boolean }> | null = null;

export const getRefreshPromise = (): Promise<{ success: boolean }> => {
  if (!refreshPromise) {
    refreshPromise = refreshToken().finally(() => {
      refreshPromise = null; // Reset after completion
    });
  }
  return refreshPromise;
};
