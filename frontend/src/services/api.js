import axios from "axios";

const API_BASE_URL = "http://localhost:8080/Akuko-nke-Ndu/quotes";

// Create an axios instance with timeout and better defaults
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

export const getAllQuotes = () => axios.get(API_BASE_URL);
export const getRandomQuotes = async () => {
  try {
    const response = await apiClient.get("/random");
    // Add validation
    if (!response.data || !response.data.quote) {
        throw new Error("Invalid response format");
    }
    return response;
  } catch (error) {
    // Add error logging
    console.error("API Error:", error);
    if (error.response) {
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Network Error");
    } else {
      throw new Error("Request configuration Error");
    }
    
  }
};

export const createQuote = (quote) => axios.post(API_BASE_URL, quote);
export const deleteQuote = (quoteId) =>
  axios.delete(API_BASE_URL + "/" + quoteId);
