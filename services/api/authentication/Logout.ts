//  services/api/authentication/Logout.ts

import { getApiUrl } from "@constants/api/endpoints";
import { API_ENDPOINTS } from "@constants/api/endpoints";

export const ApiLogout = async (token: string) => {
  const response = await fetch(getApiUrl(API_ENDPOINTS.LOGOUT), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};
