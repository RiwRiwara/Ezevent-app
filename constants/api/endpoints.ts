// constants/api/endpoints.ts

export const API_BASE_URL = process.env.EXPO_PUBLIC_DEBUG
  ? process.env.EXPO_PUBLIC_API_URL_DEV
  : process.env.EXPO_PUBLIC_API_URL_PROD;

export const API_ENDPOINTS = {
  TEST : "/test",
  LOGIN: "/login",
  LOGOUT: "/logout",
  REGISTER: "/register",
};

export const getApiUrl = (endpoint: string): string => {
  return API_BASE_URL + endpoint;
};
