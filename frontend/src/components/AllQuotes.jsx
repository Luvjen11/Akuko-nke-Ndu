import React, { useEffect , useState} from 'react'
import "./AllQuotes.css";
import { Link} from 'react-router-dom';
import { getAllQuotes } from '../services/api';

const AllQuotes = () => {

    const [quotes, setQuotes] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        allQuotes();
    }, [])

    const allQuotes = async () => {
        try {
        setLoading(true);
        const {response} = await getAllQuotes();
        setQuotes(
            response.data
        );
        setError(null);
    } catch (error) {
        setError(error.message || "Something went wrong");
        console.error('Error fetching quotes:', error);  
    } finally {
        setLoading(false);
    }
    };

    if (loading) {
        return (
            <div className="all-quotes-container">
            <div className="loading-message">Loading quotes...</div>
          </div>
        );
    }

    if (error) {
        return (
            <div className="all-quotes-container">
            <div className="error-message">{error}</div>
            <button className='retry-button' onClick={allQuotes}>Try Again</button>
          </div>
        );
    }

  return (
    <div className="all-quotes-container">
      <div className="quotes-header">
        <h1>All Quotes</h1>
        <Link to="/add-quote" className="add-quote-button">
          Add New Quote
        </Link>
      </div>
      {quotes.length === 0 ? (<div className='no-quotes-message'>
        <p>No quotes found. Add your first quote!</p>
        <Link to="/add-quote" className="add-quote-button">
            Add Quote
          </Link>
      </div>) : (
      <div className="quotes-grid">
        {quotes.map((quote) => (
        <div className="quote-card" key={quote.id}>
          <div className="quote-card-header">
            <div className="header-dots">
              <div className="header-dot"></div>
              <div className="header-dot"></div>
              <div className="header-dot"></div>
            </div>
          </div>
          <div className="quote-card-body">
            <p className='quote-text'>{quote.quote}</p>
            <div className='quote-details'>
                <p className='author-text'>{quote.author}</p>
                <p className='book-text'>{quote.book}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default AllQuotes;
