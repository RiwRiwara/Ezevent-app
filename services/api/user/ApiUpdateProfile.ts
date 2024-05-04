// services/api/user/ApiUpdateProfile.ts              

import { getApiUrl, API_ENDPOINTS } from '@constants/api/endpoints';
import axios from "axios";


export const UpdateProfile = (session,field_name, value): Promise<any> => {
    
    return new Promise(async (resolve, reject) => {
      try {
        const apiUrl = getApiUrl(API_ENDPOINTS.UPDATE_PROFILE);
        const reqBody = JSON.stringify({[field_name]: value});
        console.log(session);
        var response = await axios.put(
            apiUrl,
            JSON.parse(reqBody),
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "ngrok-skip-browser-warning": "true",
                Authorization: 'Bearer ' + session,
              },
            }
          );
        console.log(response);
        var data = {
            status: "success",
            data: "Profile updated successfully"
        }
        console.log(response.status);
        
        if (response.status != 200) {
            reject(new Error(data.data));
            return;
        }
      
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };