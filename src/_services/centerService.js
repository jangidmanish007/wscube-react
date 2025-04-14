import { fetcher } from "@/_utils/ApiBase";

export const getCentersList = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_CENTERS_LIST, params);
        return response;
    } catch (err) {
        return null;
    }
}

//  center courses list
export const getCentersCoursesList = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_LIST, params);
        return response;
    } catch (err) {
        return null;
    }
}

// 
//  center courses list
export const getTopCompaniesList = async () => {
    try {
        const response = await fetcher('GET', process.env.GET_TOP_COMPANIES);
        return response;
    } catch (err) {
        return null;
    }
}

// get center details data
export const getCentersDetails = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_CENTER_DETAILS, params);
        return response;
    } catch (err) {
        return null;
    }
}


// get center details data
export const getCentersAlumnies = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_CENTER_ALUMNIS, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCentersFaq = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_CENTER_FAQ, params);
        return response;
    } catch (err) {
        return null;
    }
}