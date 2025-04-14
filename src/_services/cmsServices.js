import { fetcher } from "@/_utils/ApiBase";

export const getFaqBasic = async (params) => {
  try {
    const response = await fetcher('GET', process.env.FAQ_BASIC_INFO, params);
    return response;
  } catch (err) {
    return null;
  }
}

export const getFaqList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_FAQ_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
}


// sitemap resources 
export async function getResourcesSitemap(params) {
  try {
    const response = await fetcher('GET', process.env.GET_RESOURCES_SITEMAP, params);
    return response;
  } catch (err) {
    return null;
  }
};


export async function getFreeCoursesList(params) {
  try {
    const response = await fetcher('GET', process.env.GET_FREE_COURSES_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
};

