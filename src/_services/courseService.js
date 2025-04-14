import { fetcher } from "@/_utils/ApiBase";

export const getCoursesList = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_ALL_COURSE_LIST, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesDetails = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_DETAILS, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesFeatures = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_FEATURES, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesHighlights = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_HIGHLIGHTS, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesTools = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_TOOLS, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesCurriculum = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_CURRICULUM, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesFee = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_FEE, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesMentors = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_MENTORS, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesTestimonials = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_TESTIMONIALS, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesFaqs = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_FAQS, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCoursesCohorts = async (params) => {
    try {
        const response = await fetcher('GET', process.env.GET_COURSE_COHORTS, params);
        return response;
    } catch (err) {
        return null;
    }
}

export const getOnlineCoursesList = async () => {
    try {
        const response = await fetcher('GET', process.env.GET_ONLINE_XML_COURSE_LIST);
        return response;
    } catch (err) {
        return null;
    }
}

export const getOfflineCoursesList = async () => {
    try {
        const response = await fetcher('GET', process.env.GET_OFFLINE_XML_COURSE_LIST);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCrmCourseName = async (id) => {
    try {
        const response = await fetcher('GET', process.env.GET_CRM_COURSE_NAME + '?course_id=' + id);
        return response;
    } catch (err) {
        return null;
    }
}

export const getCrmCourseNameBySlug = async (slug, center) => {
    let params = center ? '?course_slug=' + slug + '&&crm_center_id=' + center : '?course_slug=' + slug;
    try {
        const response = await fetcher('GET', process.env.GET_CRM_COURSE_NAME + params);
        return response;
    } catch (err) {
        return null;
    }
}


export const getEventShortDetails = async (slug) => {
    try {
        const response = await fetcher('GET', process.env.GET_EVENT_SHORT_DETAILS + '?slug_url=' + slug);
        return response;
    } catch (err) {
        return null;
    }
}