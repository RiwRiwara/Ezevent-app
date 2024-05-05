// services/api/user/ApiGetMyProfile.ts

import { getApiUrl, API_ENDPOINTS } from "@constants/api/endpoints";
import { useSession } from "@providers/ctx";

export const GetMyprofile = (session): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = getApiUrl(API_ENDPOINTS.GET_PROFILE);
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
          Authorization: "Bearer " + session,
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
}
