import { fetcher } from "@/_utils/ApiBase";

// scholarShip without auth api
export async function getInTouchApi(params) {
  try {
    const response = await fetcher('POST', GET_IN_TOUCH, params);
    return response;
  } catch (err) {
    return null;
  }
};