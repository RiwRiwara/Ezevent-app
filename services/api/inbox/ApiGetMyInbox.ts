// services/api/user/ApiGetMyInbox.ts

import { getApiUrl, API_ENDPOINTS } from "@constants/api/endpoints";
import { useSession } from "@providers/ctx";

export const GetMyInbox = async (sessionToken): Promise<any> => {
  try {
    const apiUrl = getApiUrl(API_ENDPOINTS.GET_INBOX);

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
      throw new Error(errorData.message || "Failed to fetch inboxs");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching inboxs:", error);
    throw error;
  }
};
