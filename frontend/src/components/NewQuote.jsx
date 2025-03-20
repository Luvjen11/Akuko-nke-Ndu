import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createQuote } from '../services/api';
import './NewQuote.css';

const NewQuote = () => {
  const [formData, setFormData] = useState({
    quote: '',
    author: '',
    book: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
    // Make sure of sending data properly
      console.log("Sending data:", formData);
      await createQuote(formData);
      navigate('/');
    } catch (error) {
        console.error("Error details:", error);
      setError(error.message || 'Failed to add quote');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-quote-container">
      <div className="new-quote-content">
        <div className="quote-header">
          <h2 className="form-title">Add New Quote</h2>
          <div className="header-dots">
            <div className="header-dot"></div>
            <div className="header-dot"></div>
            <div className="header-dot"></div>
          </div>
        </div>

        <div className="new-quote-body">
          {error && <p className="error">{error}</p>}
          
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="form-group">
              <label htmlFor="quote">Quote</label>
              <textarea
                id="quote"
                name="quote"
                value={formData.quote}
                onChange={handleChange}
                required
                placeholder="Enter the quote text"
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                placeholder="Enter the author's name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="book">Book</label>
              <input
                type="text"
                id="book"
                name="book"
                value={formData.book}
                onChange={handleChange}
                required
                placeholder="Enter the book title"
              />
            </div>

            <div className="form-actions">
              <button 
                type="button" 
                className="cancel-button"
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="submit-button"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Quote'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewQuote;