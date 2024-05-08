// constants/api/endpoints.ts

export class Endpoint {
  url: string;
  method: string;
  constructor(url: string, method: string) {
    this.url = url;
    this.method = method;
  }
}

export const WEB_URL = process.env.EXPO_PUBLIC_API_URL_PROD;

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
  EVENT_DETAIL_BY_ID: { url: "/event/:event_id/detail", method: "GET" },
  LASTEST_EVENTS: { url: "/last-event", method: "GET" },
  ALL_EVENTS: { url: "/event/all", method: "GET" },

  // Badge
  BADGE_DETAIL_BY_ID: { url: "/badge/:id", method: "GET" },
  GET_MY_BADGES: { url: "/mybadges", method: "GET" },

  // Get my application
  MY_APPLICATION: { url: "/event/get-my-application", method: "GET" },
  APPLY_EVENT: { url: "/event/participant-application", method: "POST" },
  IS_JOINED: { url: "/event/myevent/{event_id}/isalreadyjoin", method: "GET" },

  // My Event
  STATUS_MYEVENT: {
    url: "/event/myevent/:type/:progress/:status",
    method: "GET",
  },
  SAVED_MYEVENT: { url: "/event/savedevent", method: "GET" },
  ACTION_PARTICIPANT_MYEVENT : { url: "/event/myevent/:event_participant_id/progress/:action", method: "POST" },
  STATUS_PARTICIPANT_MYEVENT : { url: "/event/myevent/:event_participant_id/status/:status", method: "POST" },

  // Profile
  GET_PROFILE: { url: "/my-profile", method: "GET" },
  UPDATE_PROFILE: { url: "/user", method: "PUT" },
  UPLOAD_PROFILE_IMAGE : { url: "/uploadprofileimage", method: "POST" },

  // Inbox
  GET_INBOX: { url: "/my-inbox", method: "GET" },
  
};

export const getApiUrl = (endpoint: Endpoint): string => {
  return API_BASE_URL + endpoint.url;
};
