import axios from "axios"

const API_BASE_URL = "http://localhost:8080/Akuko-nke-Ndu/quotes"

export const getAllQuotes = () => axios.get(API_BASE_URL);
export const getRandomQuotes = () => axios.get(API_BASE_URL + '/ random');
export const createQuote = (quote) => axios.post(API_BASE_URL, quote);
export const deleteQuote = (quoteId) => axios.delete(API_BASE_URL + "/" + quoteId);