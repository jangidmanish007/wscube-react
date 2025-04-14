import { fetcher } from "@/_utils/ApiBase";

//  master classes list api
export const getHomeDetails = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_HOME_DETAILS, params);
    return response;
  } catch (err) {
    return null;
  }
}

// top recuriters data
export const getTopRecruitersList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.TOP_RECRUITERS_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
}

// Impact full numbers list 
export const getImpactFulNumbersList = async () => {
  try {
    const response = await fetcher('GET', process.env.GET_IMPACTFUL_NUMBERS_LIST);
    return response;
  } catch (err) {
    return null;
  }
}

// Get category courses list
export const getCategoryCoursesList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_CATEGORY_COURSES_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
}

// Get category courses list
export const getMentorshipCoursesList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_MENTORSHIP_COURSES_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
}


// Get category courses list
export const getHomeMentorsList = async () => {
  try {
    const response = await fetcher('GET', process.env.HOME_MENTORS_LIST);
    return response;
  } catch (err) {
    return null;
  }
}



// Get category courses list
export const getTopbarContent = async (params) => {
  try {
    const response = await fetcher('GET', process.env.GET_TOPBAR_CONTENT, params);
    return response;
  } catch (err) {
    return null;
  }
}