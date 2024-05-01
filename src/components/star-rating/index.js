import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClicked = index => {
        setRating(index);
        console.log()
    };

    const handleHover = index => {
        setHover(index);
    };

    const handleLeave = () => {
        setHover(0);
    };

    return (
        <div className="star-rating-container">
            <h2 className="star-rating-heading">React Star Rating</h2>
            <div className="star-rating">
                {[...Array(noOfStars)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                        <FaStar
                            key={index}
                            className={starValue <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => handleClicked(starValue)}
                            onMouseMove={() => handleHover(starValue)}
                            onMouseLeave={handleLeave}
                            size={30}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default StarRating;
