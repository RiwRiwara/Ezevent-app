import { getApiUrl } from "@constants/api/endpoints";
import { API_ENDPOINTS } from "@constants/api/endpoints";
import axios from "axios";
import { retrieveToken } from "@utils/RetrieveToken";

export const ApplyEvent = (eventId: string, type: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = getApiUrl(API_ENDPOINTS.APPLY_EVENT);
      const token = await retrieveToken();
      // TODO: Form system
      const response = await axios.post(
        apiUrl,
        {
          event_id: eventId,
          // form_id: form_id,
          type: type,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
