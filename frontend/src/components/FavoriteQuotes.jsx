import React, { useEffect, useState } from 'react';
import "./AllQuotes.css"; // Reuse the same styles
import { Link } from 'react-router-dom';
import { getFavoriteQuotes, toggleFavorite, deleteQuote } from '../services/api';

const FavoriteQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(null);

  useEffect(() => {
    fetchFavoriteQuotes();
  }, []);

  const fetchFavoriteQuotes = async () => {
    try {
      setLoading(true);
      const data = await getFavoriteQuotes();
      setQuotes(data);
      setError(null);
    } catch (error) {
      setError(error.message || "Something went wrong");
      console.error('Error fetching favorite quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      try {
        setDeleteLoading(id);
        await deleteQuote(id);
        setQuotes(quotes.filter(quote => quote.id !== id));
      } catch (error) {
        console.error('Error deleting quote:', error);
        alert(`Failed to delete quote: ${error.message}`);
      } finally {
        setDeleteLoading(null);
      }
    }
  };

  const handleToggleFavorite = async (id) => {
    try {
      const updatedQuote = await toggleFavorite(id);
      // If the quote is no longer a favorite, remove it from the list
      if (!updatedQuote.favorite) {
        setQuotes(quotes.filter(quote => quote.id !== id));
      } else {
        // Update the quote in the list
        setQuotes(quotes.map(quote => 
          quote.id === id ? {...quote, favorite: updatedQuote.favorite} : quote
        ));
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  if (loading) {
    return (
      <div className="all-quotes-container">
        <div className="loading-message">Loading favorite quotes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="all-quotes-container">
        <div className="error-message">{error}</div>
        <button className='retry-button' onClick={fetchFavoriteQuotes}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="all-quotes-container">
      <div className="quotes-header">
        <h1>Favorite Quotes</h1>
        <Link to="/quotes" className="add-quote-button">
          View All Quotes
        </Link>
      </div>
      {quotes.length === 0 ? (
        <div className="no-quotes-message">
          <p>No favorite quotes yet. Heart some quotes to add them here!</p>
          <Link to="/quotes" className="add-quote-button">
            Browse Quotes
          </Link>
        </div>
      ) : (
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
                <button 
                  className="favorite-button favorite-active"
                  onClick={() => handleToggleFavorite(quote.id)}
                  aria-label="Remove from favorites"
                >
                  ♥
                </button>
                <p className="quote-text">{quote.quote}</p>
                <div className="quote-details">
                  <p className="author-text">{quote.author}</p>
                  <p className="book-text">{quote.book}</p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(quote.id)}
                  disabled={deleteLoading === quote.id}
                >
                  {deleteLoading === quote.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteQuotes;