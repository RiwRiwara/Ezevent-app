import axios from "axios";
import { getApiUrl } from "@constants/api/endpoints";
import { API_ENDPOINTS } from "@constants/api/endpoints";

export const GetStatusMyEvents = async (type: string, progress: string, status: string, sessionToken: string): Promise<any> => {
  try {
    const apiUrl = getApiUrl(API_ENDPOINTS.STATUS_MYEVENT).replace(":type", type).replace(":progress", progress).replace(":status", status);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${sessionToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch events");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const GetSavedMyEvents = async (sessionToken: string): Promise<any> => {
  try {
    const apiUrl = getApiUrl(API_ENDPOINTS.SAVED_MYEVENT);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${sessionToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch events");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const GetAppMyEvents = async (sessionToken: string, page: number = 1): Promise<any> => {
  try {
    const apiUrl = getApiUrl(API_ENDPOINTS.MY_APPLICATION) + `?page=${page}`;
    console.log(apiUrl)
    console.log(page)
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
        Authorization: `Bearer ${sessionToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch application");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching application:", error);
    throw error;
  }
};
