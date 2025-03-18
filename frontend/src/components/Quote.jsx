import React from 'react'
import refresh from '../assets/refreshButton.png'
import "./Quote.css";

const Quote = () => {
  return (
    <div className="quote-container">
      <div className="quote-content">
        <div className="quote-header">
          <button className='refresh-button'>
            <img src={refresh} alt="Refresh" />
          </button>
          <div className="header-dots">
            <div className="header-dot"></div>
            <div className="header-dot"></div>
            <div className="header-dot"></div>
          </div>
        </div>
        
        <div className="quote-body">
          <p className="quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quae, repellendus. Nemo voluptas excepturi ratione.
          </p>
          <div className="quote-details">
            <p className="author">Author Name</p>
            <p className="book">Book Title</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
