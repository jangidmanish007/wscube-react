import { fetcher } from "@/_utils/ApiBase";

// top recuriters data
export const getPortfolioList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.PORTFOLIO_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
}

export const portfolioCategoryDetails = async (params) => {
  try {
    const response = await fetcher('GET', process.env.PORTFOLIO_CATEGORY_DETAILS, params);
    return response;
  } catch (err) {
    return null;
  }
}


export const portfolioDetails = async (params) => {
  try {
    const response = await fetcher('GET', process.env.PORTFOLIO_DETAILS, params);
    return response;
  } catch (err) {
    return null;
  }
}



export const getProjectList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.PORTFOLIO_PROJECTS, params);
    return response;
  } catch (err) {
    return null;
  }
}


export const getAwardsList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.PORTFOLIO_AWARDS, params);
    return response;
  } catch (err) {
    return null;
  }
}

export const getPortfolioCategoryList = async (params) => {
  try {
    const response = await fetcher('GET', process.env.PORTFOLIO_CATEGORY_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
}


export const getTechnicalSkills = async () => {
  try {
    const response = await fetcher('GET', process.env.GET_TECHNICIAL_SKILLS);
    return response;
  } catch (err) {
    return null;
  }
}

export const portfolioDetailsForAdmin = async (params) => {
  try {
    const response = await fetcher('GET', process.env.PORTFOLIO_DETAILS_FOR_ADMIN, params);
    return response;
  } catch (err) {
    return null;
  }
}