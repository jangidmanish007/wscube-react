// import { fetcher } from "@/_utils/ApiBase";
import { fetchAPIResponseForm } from "@/_utils/fetchService";
import axios from "axios";
import Cookies from 'js-cookie';

function UploadHeader() {
  const _headers = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  };

  const encodedAuth = Buffer.from('wscubetech' + ":" + 'wscubetech@123!!').toString('base64');
  _headers['headers']['Authorization'] = `Basic ${encodedAuth}`;
  return _headers;
}

function AuthHeader() {
  const _headers = {
    headers: {
      'Content-Type': 'application/json'
    },
  };

  if (Cookies.get('_application_token')) {
    _headers['headers']['Authorization'] = `Bearer ${Cookies.get('_application_token')}`;
  } else {
    const encodedAuth = Buffer.from('wscubetech' + ":" + 'wscubetech@123!!').toString('base64');
    _headers['headers']['Authorization'] = `Basic ${encodedAuth}`;
  }
  return _headers;
}

// fetch data via fetch
export async function fetchAPI(url, options = null) {
  try {
    let response;
    let headers = AuthHeader();
    if (options) {
      headers = { ...headers, ...options };
    }
    response = await fetch(`${process.env.API_BASE_URL}${url}`, headers);
    response = await response.json();
    if (response.statusCode == 200) {
      // return response.data;
      return successResponse(response);
    } else {
      return errorResponse(response);
    }
  } catch (err) {
    if (err?.response?.status == 500) {
      location.href = "/server-error";
    }
    else if (err?.response?.status == 401) {
      Cookies.remove('_application_token', { path: '/' });
      Cookies.remove('_application_token', { domain: `${process.env.COOKIES_DOMAIN}` });
    }
    return errorResponse({ resultMessage: err });
  }
}

// fetch data by axios method
export async function fetcher(method, url, params = null) {
  try {
    let response;
    let headers = AuthHeader();
    if (method == 'GET') {

      if (params) {
        headers = { ...headers, params: params };
      }
      response = await axios.get(`${process.env.API_BASE_URL}${url}`, headers);
    } else {
      response = await axios.post(`${process.env.API_BASE_URL}${url}`, params, headers);
    }
    if (response.status == 200) {
      // return response.data;
      return successResponse(response?.data);
    } else {
      return errorResponse(response);
    }
  } catch (err) {
    if (err?.response?.status == 500) {
      location.href = "/server-error";
    }
    else if (err?.response?.status == 401) {
      Cookies.remove('_application_token', { path: '/' });
      Cookies.remove('_application_token', { domain: `${process.env.COOKIES_DOMAIN}` });
    }
    return errorResponse({ resultMessage: err });
  }
}

// Application form services

export const userLoginForm = async (params) => {
  try {
    const response = await fetchAPI(process.env.LOG_IN, {
      method: 'POST',
      body: JSON.stringify(params)
    });
    return response;
  } catch (err) {
    return null;
  }
}

export const otpVerifyForm = async (params) => {
  try {
    const response = await fetchAPI(process.env.VERIFY_OTP, {
      method: 'POST',
      body: JSON.stringify(params)
    });
    return response;
  } catch (err) {
    return null;
  }
}

export const otpResendForm = async (params) => {
  try {
    const response = await fetchAPI(process.env.RESEND_OTP, {
      method: 'POST',
      body: JSON.stringify(params)
    });
    return response;
  } catch (err) {
    return null;
  }
}

export const getUserApplicationProfile = async () => {
  try {
    const response = await fetchAPI(process.env.USER_PROFILE, {
      method: 'GET'
    });
    return response;
  } catch (err) {
    return null;
  }
}

export const getCourseQuestion = async (crsId, lmLId) => {
  try {
    const response = await fetchAPIResponseForm(process.env.GET_COURSE_QUESTION + '?crm_course_id=' + crsId + '&lm_lead_id=' + lmLId, {
      method: 'GET'
    });
    return response;
  } catch (err) {
    return null;
  }
}

// export const getCourseQuestion = async (crsId, lmLId) => {
//   try {
//     const response = await fetcher('GET', process.env.GET_COURSE_QUESTION + '?crm_course_id=' + crsId + '&lm_lead_id=' + lmLId);
//     return response;
//   } catch (err) {
//     return null;
//   }
// }

export const getCourseSubQuestion = async (crsId, qId, opId, lmLId) => {
  try {
    const response = await fetcher('GET', process.env.GET_COURSE_SUB_QUESTION + '?crm_course_id=' + crsId + '&question_id=' + qId + '&option_id=' + opId + '&lm_lead_id=' + lmLId);
    return response;
  } catch (err) {
    return null;
  }
}

export async function submitApplicationQuestion(params) {
  try {
    const response = await fetcher('POST', process.env.SUBMIT_COURSE_QUESTION, params);
    return response;
  } catch (err) {
    return null;
  }
};

export const getApplicationCourse = async (slug) => {
  try {
    const response = await fetcher('GET', process.env.GET_APPLICATION_COURSE + '?course_slug=' + slug);
    return response;
  } catch (err) {
    return null;
  }
}

export const uploadMultipleFiles = async (files) => {
  const uploadApi = process.env.API_BASE_URL + process.env.UPLOAD_DOCUMENTS;
  const formData = new FormData();
  let headers = UploadHeader();
  // Append each file to the form data
  files.forEach((file, index) => {
    formData.append(`files`, file);
  });
  try {
    const response = await axios.post(uploadApi, formData, headers);
    return response.data;
  } catch (error) {
    console.error('Multiple file upload error:', error);
    return null;
  }
};


function successResponse(response) {
  if (response?.result) {
    return {
      status: true,
      result: response['result'],
      message: response['message'],
    };
  } else {
    return {
      status: true,
      result: null,
      message: response['message'],
    };
  }
}

function errorResponse(response) {
  return {
    status: false,
    data: null,
    message: response['message'],
  };
}