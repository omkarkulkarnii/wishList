import axios from 'axios';

const API_URL = 'https://wishlink-backend.onrender.com/users'; // Adjust if needed

export const loginUser = async (email, password) => {
  try {
    const response = await fetch('https://wishlink-backend.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
 //   console.log('Login response:', data); // Add this to debug
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Signup failed';
  }
};
