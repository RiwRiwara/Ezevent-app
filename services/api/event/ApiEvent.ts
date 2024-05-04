import { getApiUrl } from "@constants/api/endpoints";
import { API_ENDPOINTS } from "@constants/api/endpoints";
import axios from "axios";

export const GetEventDetail = (eventId: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = getApiUrl(API_ENDPOINTS.EVENT_DETAIL_BY_ID).replace(":event_id", eventId);
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        reject(new Error(errorData.message));
        return;
      }

      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const GetLastestEvent = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = getApiUrl(API_ENDPOINTS.LASTEST_EVENTS);
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        reject(new Error(errorData.message));
        return;
      }

      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const GetAllEvents = (page = 1): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = getApiUrl(API_ENDPOINTS.ALL_EVENTS) + `?page=${page}`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        reject(new Error(errorData.message));
        return;
      }

      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const GetEventsByQuery = (page = 1, query_string = ""): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = getApiUrl(API_ENDPOINTS.ALL_EVENTS) + `?page=${page}` + `${query_string}`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        reject(new Error(errorData.message));
        return;
      }

      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};


