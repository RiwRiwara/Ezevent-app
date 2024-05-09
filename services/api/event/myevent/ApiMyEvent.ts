import axios from "axios";
import { getApiUrl } from "@constants/api/endpoints";
import { API_ENDPOINTS } from "@constants/api/endpoints";

export const GetStatusMyEvents = async (
  type: string,
  progress: string,
  status: string,
  sessionToken: string
): Promise<any> => {
  try {
    const apiUrl = getApiUrl(API_ENDPOINTS.STATUS_MYEVENT)
      .replace(":type", type)
      .replace(":progress", progress)
      .replace(":status", status);

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
    console.log("Error fetching events:", error);
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
    console.log("Error fetching events:", error);
    throw error;
  }
};

export const GetAppMyEvents = async (
  sessionToken: string,
  page: number = 1
): Promise<any> => {
  try {
    const apiUrl = getApiUrl(API_ENDPOINTS.MY_APPLICATION) + `?page=${page}`;
    console.log(apiUrl);
    console.log(page);
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
    console.log("Error fetching application:", error);
    throw error;
  }
};


// [CheckIn, CheckOut, Review, Complete]
export const ActionMyevent = (
  action: string,
  event_participant_id: string,
  sessionToken: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        getApiUrl(API_ENDPOINTS.ACTION_PARTICIPANT_MYEVENT)
          .replace(":action", action)
          .replace(":event_participant_id", event_participant_id),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${sessionToken}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        reject(new Error(errorData.message));
        return;
      }

      const data = await response.json();

      if (data.success) {
        resolve({ success: true, data: data });
      } else {
        resolve({ success: false, error: "Action POST failed", data: data });
      }
    } catch (error) {
      reject(error);
    }
  });
};


//[Normal, Cancelled, Removed, Late]
export const StatusMyEvent = (
  event_participant_id: string,
  status: string,
  sessionToken: string
) => {
  return new Promise(async (resolve, reject) => {
    console.log(event_participant_id)
    console.log(status)
    try {
      const response = await fetch(
        getApiUrl(API_ENDPOINTS.STATUS_PARTICIPANT_MYEVENT)
          .replace(":event_participant_id", event_participant_id)
          .replace(":status", status),
          
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${sessionToken}`,
          },

          // body: JSON.stringify(credentials),
        },


      );

      console.log(response)
      if (!response.ok) {
        const errorData = await response.json();
        reject(new Error(errorData.message));
        return;
      }

      const data = await response.json();

      if (data.success) {
        resolve({ success: true, data: data });
      } else {
        resolve({ success: false, error: "Status POST failed", data: data });
      }
    } catch (error) {
      reject(error);
    }
  });
};
