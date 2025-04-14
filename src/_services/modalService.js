import { fetcher } from '@/_utils/ApiBase';
import Axios from 'axios';
import Cookies from 'js-cookie';

function AuthHeader() {
  const _headers = {
    headers: {
      'Content-Type': 'application/json'
    },
  };

  if (Cookies.get('_token')) {
    _headers['headers']['Authorization'] = `Bearer ${Cookies.get('_token')}`;
  } else {
    const encodedAuth = Buffer.from('wscubetech' + ":" + 'wscubetech@123!!').toString('base64');
    _headers['headers']['Authorization'] = `Basic ${encodedAuth}`;
  }
  return _headers;
}

// fetch data by axios method
export async function fetchModalService(method, url, params = null) {
  try {
    let response;
    let headers = AuthHeader();
    if (method == 'GET') {
      if (params) {
        headers = { ...headers, params: params };
      }
      response = await Axios.get(`${url}`, headers);
    } else {
      response = await Axios.post(`${url}`, params, headers);
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
      Cookies.remove('_token', { path: '/' });
      Cookies.remove('_token', { domain: `${process.env.COOKIES_DOMAIN}` });
    }
    return errorResponse({ resultMessage: err });
  }
}

// fetch data for new node lead apis axios method
export async function fetchNodeService(method, url, params = null) {
  try {
    let response;
    let headers = AuthHeader();
    if (method == 'GET') {
      if (params) {
        headers = { ...headers, params: params };
      }
      response = await Axios.get(`${url}`, headers);
    } else {
      response = await Axios.post(`${url}`, params, headers);
    }

    if (response.status == 200) {
      // return response.data;
      return successResponseNode(response?.data);
    } else {
      return errorResponseNode(response);
    }
  } catch (err) {
    if (err?.response?.status == 500) {
      location.href = "/server-error";
    }
    else if (err?.response?.status == 401) {
      Cookies.remove('_token', { path: '/' });
      Cookies.remove('_token', { domain: `${process.env.COOKIES_DOMAIN}` });
    }
    return errorResponseNode({ resultMessage: err });
  }
}


function successResponse(response) {
  if (response?._status) {
    return {
      status: true,
      result: response['_data'],
      message: response['_message'],
    };
  } else {
    return {
      status: false,
      result: response['_data'],
      message: response['_message'],
    };
  }
}

function errorResponse(response) {
  return {
    status: false,
    data: null,
    message: response['resultMessage'],
  };
}

function successResponseNode(response) {
  if (response?.status) {
    return {
      status: true,
      result: response['result'],
      message: response['message'],
    };
  } else {
    return {
      status: false,
      result: response['result'],
      message: response['message'],
    };
  }
}

function errorResponseNode(response) {
  return {
    status: false,
    data: null,
    message: response['resultMessage'],
  };
}

// Get coursesList api
// export async function fetchModalCourses(fid) {
//   const params = fid ? '?franchise_id=' + fid : '';
//   try {
//     const response = await fetchModalService('GET', process.env.LEAD_API_BASE_URL + process.env.GET_LEAD_COURSE_LIST + params);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

export async function fetchModalCourses(fid) {
  const params = fid ? '?franchise_id=' + fid : '';
  try {
    const response = await fetchNodeService('GET', process.env.API_BASE_URL + process.env.GET_LEAD_COURSE_LIST + params);
    return response;
  } catch (err) {
    return null;
  }
};

// export async function getEducationList() {
//   try {
//     const response = await fetchModalService('GET', process.env.LEAD_API_BASE_URL + process.env.GET_EDUCATION,);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

export async function getEducationList() {
  try {
    const response = await fetchNodeService('GET', process.env.API_BASE_URL + process.env.GET_EDUCATION,);
    return response;
  } catch (err) {
    return null;
  }
};

// export async function leadStore(params) {
//   try {
//     const response = await fetchModalService('POST', process.env.LEAD_API_BASE_URL + process.env.LEAD_STORE, params);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

// export async function leadResendOtp(params) {
//   try {
//     const response = await fetchModalService('POST', process.env.LEAD_API_BASE_URL + process.env.LEAD_RESEND_OTP, params);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

// export async function leadVerifyOtp(params) {
//   try {
//     const response = await fetchModalService('POST', process.env.LEAD_API_BASE_URL + process.env.LEAD_VERIFY_OTP, params);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

export async function leadStore(params) {
  try {
    const response = await fetchNodeService('POST', process.env.API_BASE_URL + process.env.LEAD_STORE, params);
    return response;
  } catch (err) {
    return null;
  }
};

export async function leadResendOtp(params) {
  try {
    const response = await fetchNodeService('POST', process.env.API_BASE_URL + process.env.LEAD_RESEND_OTP, params);
    return response;
  } catch (err) {
    return null;
  }
};

export async function leadVerifyOtp(params) {
  try {
    const response = await fetchNodeService('POST', process.env.API_BASE_URL + process.env.LEAD_VERIFY_OTP, params);
    return response;
  } catch (err) {
    return null;
  }
};

// export async function leadStoreDA(params) {
//   try {
//     const response = await fetchModalService('POST', process.env.LEAD_API_BASE_URL + process.env.DA_LEAD_STORE, params);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

// export async function leadResendOtpDA(params) {
//   try {
//     const response = await fetchModalService('POST', process.env.LEAD_API_BASE_URL + process.env.DA_LEAD_RESEND_OTP, params);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

// export async function leadVerifyOtpDA(params) {
//   try {
//     const response = await fetchModalService('POST', process.env.LEAD_API_BASE_URL + process.env.DA_LEAD_VERIFY_OTP, params);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

export async function leadStoreDA(params) {
  try {
    const response = await fetchNodeService('POST', process.env.API_BASE_URL + process.env.DA_LEAD_STORE, params);
    return response;
  } catch (err) {
    return null;
  }
};

export async function leadResendOtpDA(params) {
  try {
    const response = await fetchNodeService('POST', process.env.API_BASE_URL + process.env.DA_LEAD_RESEND_OTP, params);
    return response;
  } catch (err) {
    return null;
  }
};

export async function leadVerifyOtpDA(params) {
  try {
    const response = await fetchNodeService('POST', process.env.API_BASE_URL + process.env.DA_LEAD_VERIFY_OTP, params);
    return response;
  } catch (err) {
    return null;
  }
};

// export async function eventRegister(params) {
//   try {
//     const response = await fetchModalService('POST', process.env.LEAD_API_BASE_URL + process.env.REGISTER_MASTER_EVENT, params);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

export async function eventRegister(params) {
  try {
    const response = await fetchNodeService('POST', process.env.API_BASE_URL + process.env.REGISTER_MASTER_EVENT, params);
    return response;
  } catch (err) {
    return null;
  }
};

// Apply now forms
export async function getCourseQuestions(cId) {
  try {
    const response = await fetchModalService('GET', process.env.LEAD_API_BASE_URL + process.env.GET_COURSE_QUESTIONS + '?crm_course_id=' + cId,);
    return response;
  } catch (err) {
    return null;
  }
};

export async function getCourseSubQuestions(cId, qId, opId) {
  try {
    const response = await fetchModalService('GET', process.env.LEAD_API_BASE_URL + process.env.GET_COURSE_SUB_QUESTIONS + '?crm_course_id=' + cId + '&&question_id=' + qId + '&&option_id=' + opId,);
    return response;
  } catch (err) {
    return null;
  }
};

export async function submitCourseQuestion(params) {
  try {
    const response = await fetchModalService('POST', process.env.LEAD_API_BASE_URL + process.env.SUBMIT_CRS_QUESTION, params);
    return response;
  } catch (err) {
    return null;
  }
};

// export async function getCountriesList() {
//   try {
//     const response = await fetchModalService('GET', process.env.LEAD_API_BASE_URL + process.env.COUNTRY_LIST);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };

export async function getCountriesList() {
  try {
    const response = await fetchNodeService('GET', process.env.API_BASE_URL + process.env.COUNTRY_LIST);
    return response;
  } catch (err) {
    return null;
  }
};

// export async function wsLeadStore(params) {
//   try {
//     const response = await fetcher('POST', process.env.WS_LEAD_STORE, params);
//     return response;
//   } catch (err) {
//     return null;
//   }
// };