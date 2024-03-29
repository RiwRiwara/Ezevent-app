// services/api/authentication/ApiLogin.ts
import { getApiUrl } from '@constants/api/endpoints';
import { API_ENDPOINTS } from '@constants/api/endpoints';

export const ApiLogin = (credentials) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(getApiUrl(API_ENDPOINTS.LOGIN), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        reject(new Error(errorData.message));
        return;
      }

      const data = await response.json();

      if (data.success) {
        resolve({ success: true, data: data });
      } else {
        resolve({ success: false, error: 'Login failed', data: data });
      }
    } catch (error) {
      reject(error);
    }
  });
};
