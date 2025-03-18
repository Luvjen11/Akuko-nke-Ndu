import React from 'react'
import quoteHolder from '../assets/quote-holder.png'
import refresh from '../assets/refresh.png'

const Quote = () => {
  return (
    <div className="quote-container">
      <div className="quote-content">
        <img
          src={quoteHolder}
          alt="Quote Background"
          className="quote-holder"
        />
        <div className="quote-text">
          <p className="quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            repellendus.
          </p>
          <div className="quote-details">
            <p className="book">Book</p>
            <p className="author">Author</p>
          </div>
        </div>
      </div>
      <button className='refresh-button'><img src={refresh} alt="Refresh" /></button>
    </div>
  );
}

export default Quote
