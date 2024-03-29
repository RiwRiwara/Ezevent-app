// services/api/authentication/ApiRegister.ts
import { getApiUrl } from '@constants/api/endpoints';
import { API_ENDPOINTS } from '@constants/api/endpoints';

export const ApiRegister = (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(getApiUrl(API_ENDPOINTS.REGISTER), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData),
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
        resolve({ success: false, error: 'Registration failed', data: data });
      }
    } catch (error) {
      reject(error);
    }
  });
};
