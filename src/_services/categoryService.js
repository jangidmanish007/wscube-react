import { fetcher } from "@/_utils/ApiBase";

export const getCategoryList = async () => {
    try {
        const response = await fetcher('GET', process.env.GET_CATEGORY_LIST);
        return response;
    } catch (err) {
        return null;
    }
}

//  get category mentors api
export const getCategoryMentorsList = async (slug) => {
    try {
        const response = await fetcher('GET', process.env.GET_CATEGORY_MENTORS_LIST, { category_slug: slug });
        return response;
    } catch (err) {
        return null;
    }
}

//  get category details
export const getCategoryDetails = async (slug) => {
    try {
        const response = await fetcher('GET', process.env.GET_CATEGORY_DETALS, { category_slug: slug });
        return response;
    } catch (err) {
        return null;
    }
}



//  get category Top openings 
export const getCategoryTopOpenings = async (slug) => {
    try {
        const response = await fetcher('GET', process.env.GET_CATEGORY_JOB_OPENINGS, { category_slug: slug });
        return response;
    } catch (err) {
        return null;
    }
}


// get category Targets roles api
export const getCategoryTargetsRoles = async (slug) => {
    try {
        const response = await fetcher('GET', process.env.GET_CATEGORY_TARGET_ROLES, { category_slug: slug });
        return response;
    } catch (err) {
        return null;
    }
}


// top recuriters data
export const getCategoryTopRecruiters = async (slug) => {
    try {
        const response = await fetcher('GET', process.env.TOP_RECRUITERS_LIST, { category_slug: slug });
        return response;
    } catch (err) {
        return null;
    }
}

// get category Testmonials api
export const getCategoryTestmonials = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_CATEGORY_TESTMONIALS, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getStickyAdsContent = async (slug) => {
    try {
        const response = await fetcher('GET', process.env.GET_STICKY_ADS_CONTENT + '?page_slug=' + slug);
        return response;
    } catch (err) {
        return null;
    }
}