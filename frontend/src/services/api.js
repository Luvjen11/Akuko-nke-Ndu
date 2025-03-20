import axios from "axios";

const API_BASE_URL = "http://localhost:8080/Akuko-nke-Ndu/quotes";

// Create an axios instance with timeout and better defaults
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getAllQuotes = async () => {
  try {
    const response = await apiClient.get("");
    return response.data;
  } catch (error) {
    console.error("Get all quotes error:", error);
    if (error.response) {
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Network Error");
    } else {
      throw new Error("Request configuration Error");
    }
  }
};
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

export const createQuote = async (quote) => {
  try {
    const response = await apiClient.post("", quote, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    // Add error logging
    console.error("API Error:", error);
    if (error.response) {
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error(
        "Network Error - Please check if the backend server is running"
      );
    } else {
      throw new Error("Request configuration Error");
    }
  }
};

export const deleteQuote = async (quoteId) => {
  try {
    const response = await apiClient.delete(`/${quoteId}`);
    return response.data;
  } catch (error) {
    console.error("Delete quote error:", error);
    if (error.response) {
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Network Error");
    } else {
      throw new Error("Request configuration Error");
    }
  }
};
