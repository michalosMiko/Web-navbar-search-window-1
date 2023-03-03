import React, { useState } from 'react';
import './Rating.css';

// hodnocení hvězdy, procenta, super


function RatingComponent(props) {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [totalRating, setTotalRating] = useState(0);
  const [numRatings, setNumRatings] = useState(0);
  const [percentRating, setPercentRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTotalRating(totalRating + rating);
    setNumRatings(numRatings + 1);
    setPercentRating(Math.round(((totalRating + rating) / (numRatings + 1)) * 20));
    setSubmitted(true);
  }

  let stars = (
    <div className="rating-stars">
      <span className={`star ${rating >= 1 ? 'selected' : ''}`} onClick={() => handleClick(1)}>★</span>
      <span className={`star ${rating >= 2 ? 'selected' : ''}`} onClick={() => handleClick(2)}>★</span>
      <span className={`star ${rating >= 3 ? 'selected' : ''}`} onClick={() => handleClick(3)}>★</span>
      <span className={`star ${rating >= 4 ? 'selected' : ''}`} onClick={() => handleClick(4)}>★</span>
      <span className={`star ${rating >= 5 ? 'selected' : ''}`} onClick={() => handleClick(5)}>★</span>
    </div>
  );

  return (
    <div className="rating-container">
      {submitted ? (
        <div className="rating-results">
          <p>Děkujeme za Vaše hodnocení!</p>
          <p>Výsledné hodnocení: {totalRating}</p>
          <p>Počet hodnocení: {numRatings}</p>
          <p>Vaše hodnocení: {percentRating}%</p>
          <div className="rating-stars">
            <span className={`star ${rating >= 1 ? 'selected' : ''}`}>★</span>
            <span className={`star ${rating >= 2 ? 'selected' : ''}`}>★</span>
            <span className={`star ${rating >= 3 ? 'selected' : ''}`}>★</span>
            <span className={`star ${rating >= 4 ? 'selected' : ''}`}>★</span>
            <span className={`star ${rating >= 5 ? 'selected' : ''}`}>★</span>
          </div>
        </div>
      ) : (
        <div className="submit-button">
          {stars}
          <div className='rating-button'><button type="submit" onClick={handleSubmit}>Hodnocení</button></div>
        </div>
      )}
    </div>
  )
}

export default RatingComponent;
