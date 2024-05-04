import axios from "axios";
import { getApiUrl } from "@constants/api/endpoints";
import { API_ENDPOINTS } from "@constants/api/endpoints";

export const GetStatusMyEvents = async (type: string, progress: string, status: string, sessionToken: string): Promise<any> => {
  try {
    const apiUrl = getApiUrl(API_ENDPOINTS.STATUS_MYEVENT).replace(":type", type).replace(":progress", progress).replace(":status", status);
    // console.log("API Endpoint:", apiUrl);

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
    console.log("API Endpoint:", apiUrl);

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

export const GetAppMyEvents = async (sessionToken: string): Promise<any> => {
  try {
    const apiUrl = getApiUrl(API_ENDPOINTS.APPLICATION_MYEVENT)
    // console.log("API Endpoint:", apiUrl);

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
