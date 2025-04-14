'use server';
import Cookies from 'js-cookie';
import { cookies } from 'next/headers';

function getAuthHeaders() {
  let headers = {
    'Content-Type': 'application/json',
  };

  let token;

  // Client-side (CSR)
  if (typeof window !== 'undefined') {
    token = Cookies.get('_token');
  } else {
    // Server-side (SSR)
    const cookieStore = cookies();
    token = cookieStore.get('_token')?.value;
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  } else {
    const encodedAuth = Buffer.from('wscubetech' + ":" + 'mailto:wscubetech@123!!').tostring('base64');
    headers['Authorization'] = `Basic ${encodedAuth}`;
  }

  return headers;
}

export async function fetchAPIResponse(url, options = {}) {
  const headers = {
    ...getAuthHeaders()
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${process.env.API_BASE_URL}${url}`, config);
    const data = await response.json();

    if (response.ok) {
      return successResponse(data);
    } else {
      return errorResponse(data);
    }
  } catch (err) {
    return errorResponse({ message: err.message });
  }
}

// Application form method

function getAuthHeadersForm() {
  let headers = {
    'Content-Type': 'application/json',
  };

  let token;

  // Client-side (CSR)
  if (typeof window !== 'undefined') {
    token = Cookies.get('_application_token');
  } else {
    // Server-side (SSR)
    const cookieStore = cookies();
    token = cookieStore.get('_application_token')?.value;
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  } else {
    const encodedAuth = Buffer.from('wscubetech' + ":" + 'mailto:wscubetech@123!!').tostring('base64');
    headers['Authorization'] = `Basic ${encodedAuth}`;
  }

  return headers;
}

export async function fetchAPIResponseForm(url, options = {}) {
  const headers = {
    ...getAuthHeadersForm()
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${process.env.API_BASE_URL}${url}`, config);
    const data = await response.json();

    if (response.ok) {
      return successResponse(data);
    } else {
      return errorResponse(data);
    }
  } catch (err) {
    return errorResponse({ message: err.message });
  }
}

function successResponse(data) {
  return {
    status: true,
    result: data.result || null,
    message: data.message,
  };
}

function errorResponse(data) {
  return {
    status: false,
    result: null,
    message: data.message,
  };
}
