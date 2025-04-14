import { fetcher } from "@/_utils/ApiBase";

//  master class category list api
export const getMasterClassCategoryList = async () => {
  try {
    const response = await fetcher('GET', process.env.GET_MASTER_CLASS_CATEGORY_LIST);
    return response;
  } catch (err) {
    return null;
  }
}

//  master classes list api
export const getMasterClassList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_MASTER_CLASS_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
}

//  master class deatils api
export const getMasterClassDetails = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_MASTERCLASS_DETAILS, params);
    return response;
  } catch (err) {
    return null;
  }
}


//  master class deatils api
export const getMasterClassFeaturesList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_MASTERCLASS_FEATURES, params);
    return response;
  } catch (err) {
    return null;
  }
}


//  master class deatils api
export const getTestmonialsList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_TESTMONIALS_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
}

//  master class deatils api
export const getMentorDetails = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_MENTOR_DETAILS, params);
    return response;
  } catch (err) {
    return null;
  }
}