import axios from "axios";

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/Akuko-nke-Ndu/quotes";

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
    // Ensure favorite field is set
    const quoteWithFavorite = {
      ...quote,
      favorite: quote.favorite !== undefined ? quote.favorite : false
    };
    
    console.log("Sending quote data:", JSON.stringify(quoteWithFavorite));
    const response = await apiClient.post("", quoteWithFavorite, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Server response:", response);
    return response;
  } catch (error) {
    // Add more detailed error logging
    console.error("API Error:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
      throw new Error(`Server Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
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

export const toggleFavorite = async (quoteId) => {
  try {
    const response = await apiClient.put(`/${quoteId}/favorite`);
    return response.data;
  } catch (error) {
    console.error("Toggle favorite error:", error);
    if (error.response) {
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Network Error");
    } else {
      throw new Error("Request configuration Error");
    }
  }
};

export const getFavoriteQuotes = async () => {
  try {
    const response = await apiClient.get("/favorites");
    return response.data;
  } catch (error) {
    console.error("Get favorites error:", error);
    if (error.response) {
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Network Error");
    } else {
      throw new Error("Request configuration Error");
    }
  }
};
