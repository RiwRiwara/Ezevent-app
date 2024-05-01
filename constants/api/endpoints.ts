// constants/api/endpoints.ts

export class Endpoint {
  url: string;
  method: string;
  constructor(url: string, method: string) {
    this.url = url;
    this.method = method;
  }
}

export const API_BASE_URL = process.env.EXPO_PUBLIC_DEBUG
  ? process.env.EXPO_PUBLIC_API_URL_DEV
  : process.env.EXPO_PUBLIC_API_URL_PROD;

export const API_ENDPOINTS = {
  TEST: { url: "/test", method: "GET" },
  LOGIN: { url: "/login", method: "POST" },
  LOGOUT: { url: "/logout", method: "POST" },
  REGISTER: { url: "/register", method: "POST" },
  CHECK_SESSION: { url: "/check-session", method: "GET" },

  // Event
  EVENT_DETAIL_BY_ID: { url: "/event/:event_id", method: "GET" },
  LASTEST_EVENTS: { url: "/last-event", method: "GET" },
  ALL_EVENTS: { url: "/event/all", method: "GET" },

  // Get my application
  MY_APPLICATION: { url: "/event/get-my-application", method: "GET" },
};

export const getApiUrl = (endpoint: Endpoint): string => {
  return API_BASE_URL + endpoint.url;
};

