// services/app.js

import axios from 'axios';

const API_BASE_URL = 'https://api.wemotions.app';
const FLIC_TOKEN = 'flic_499793eebb420cb63e03ca994179f5bcc5a4ede733b63ff3375f3030e5538271';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/create`, userData, {
      headers: {
        'Flic-Token': FLIC_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, credentials, {
      headers: {
        'Flic-Token': FLIC_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const getUserSearch = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search?type=user&query=nidhi`, {
      params: { type: 'user', query },
      headers: {
        'Flic-Token': FLIC_TOKEN,
      },
    });
    return response.data; // Assuming the API returns an array of user objects
  } catch (error) {
    console.error('Error fetching user search data:', error);
    throw error;
  }
};

export const postSearch = async (searchData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/search?type=post&query=we`, searchData, {
      headers: {
        'Flic-Token': FLIC_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error performing post search:', error);
    throw error;
  }
};

export const getFeed = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/feed?page=1`, {
      params: { page },
      headers: {
        'Flic-Token': FLIC_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching feed:', error);
    throw error;
  }
};

export const getComments = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get/votings`, {
      params: { post_id: postId },
      headers: {
        'Flic-Token': FLIC_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const getMyNotifications = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/notification`, {
      params: { page, page_size: pageSize },
      headers: {
        'Flic-Token': FLIC_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};








// Add more functions for other endpoints as needed
