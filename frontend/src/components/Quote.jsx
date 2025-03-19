import React, {useEffect, useState} from 'react'
import refresh from '../assets/refreshButton.png'
import "./Quote.css";
import { getRandomQuotes } from '../services/api';
import { Link } from 'react-router-dom';

const Quote = () => {

  const [quote, setQuote] = useState({
    quote: "",
    author: "",
    book: "",
    loading: true,
    error: null
  });
  
  
  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = async () => {
    try {
      setQuote(prev => ({...prev, loading:true, error:null}));
      const {data} = await getRandomQuotes();
      setQuote({
        quote: data?.quote || "No quote available",
        author: data?.author || "Unknown author",
        book: data?.book || "Unknown book",
        loading: false,
      });
    } catch(error) {
      setQuote(prev => ({ ...prev, loading:false, error:error.message  || "Something went wrong"}));
    }
  };

  return (
    <div className="quote-container">
      <div className="quote-content">
        <div className="quote-header">
          <button className="refresh-button" onClick={(getQuote)} disabled={quote.loading}>
            <img src={refresh} alt="Refresh" />
          </button>
          <div className="header-dots">
            <div className="header-dot"></div>
            <div className="header-dot"></div>
            <div className="header-dot"></div>
          </div>
        </div>

        <div className="quote-body">
        <p className="quote">{quote.quote}</p>
          {quote.error && <p className="error">{quote.error}</p>}
          <div className="quote-details">
            <p className="author">{quote.author}</p>
            <p className="book">{quote.book}</p>
          </div>
        </div>
      </div>
      <Link to="/add-quote" className="add-quote-button">
            Add New Quote
          </Link>
    </div>
  );
}

export default Quote;
