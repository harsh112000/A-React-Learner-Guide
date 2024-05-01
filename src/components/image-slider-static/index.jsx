import React, { useState, useEffect } from 'react';

const items = [
  'https://www.colorcombos.com/images/colors/FFCC00.png',
  'https://www.colorcombos.com/images/colors/0066CC.png',
  'https://www.colorcombos.com/images/colors/33CC33.png',
  'https://www.colorcombos.com/images/colors/FF0033.png',
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoading(false);
    img.src = items[index];
    setLoading(true);
  }, [index]);

  const handleClick = (direction) => {
    if (direction === 'prev') {
      setIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    } else {
      setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className='carousel'>
      <button onClick={() => handleClick('prev')}>
        Previous
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <img
          src={items[index]}
          alt={`Image ${index + 1}`}
        />
      )}
      <button onClick={() => handleClick('next')}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
