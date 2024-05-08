import { getApiUrl } from "@constants/api/endpoints";
import { API_ENDPOINTS } from "@constants/api/endpoints";
import { retrieveToken } from "@utils/RetrieveToken";
export const GetBadgeById = (badgeId: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
        const token = await retrieveToken();
        const apiUrl = getApiUrl(API_ENDPOINTS.BADGE_DETAIL_BY_ID).replace(":id", badgeId);
        console.log(API_ENDPOINTS.BADGE_DETAIL_BY_ID);
        console.log(apiUrl);
        console.log(badgeId);
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${token}`,
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
    };