import React from 'react'
import "./AllQuotes.css";
import { Link } from 'react-router-dom';

const AllQuotes = () => {
  return (
    <div className="all-quotes-container">
      <div className="quotes-header">
        <h1>All Quotes</h1>
        <Link to="/add-quote" className="add-quote-button">
          Add New Quote
        </Link>
      </div>
      <div className="quotes-grid">
        <div className="quote-card">
          <div className="quote-card-header">
            <div className="header-dots">
              <div className="header-dot"></div>
              <div className="header-dot"></div>
              <div className="header-dot"></div>
            </div>
          </div>
          <div className="quote-card-body">
            <p className='quote-text'></p>
            <div className='quote-details'>
                <p className='author-text'></p>
                <p className='book-text'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuotes;
