import React from 'react'
import { Navigate } from 'react-router-dom';

const NewQuote = () => {
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
          <form className="quote-form">
            <div className="form-group">
              <label htmlFor="quote">Quote</label>
              <textarea
                id="quote"
                name="quote"
                required
                placeholder="Enter the quote text"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                required
                placeholder="Enter the author"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="book">Book</label>
              <input
                type="text"
                id="book"
                name="book"
                required
                placeholder="Enter the book"
              ></input>
            </div>
            <div className='form-actions'>
              <button type="button" className="cancel-button" >Cancel</button>
              <button type='submit' className='submit-button' >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewQuote
