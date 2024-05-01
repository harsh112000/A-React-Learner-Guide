import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './index.css';
const ImageSlider = ({ url, page = 1, limit = 1 }) => {
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [errorMessages, setErrorMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessages([e.message]);
    }
  };

  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);
  
  console.log(images);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (errorMessages.length > 0) {
    return <div>An error occurred! {errorMessages}</div>;
  }
  const handlePrevious = () => {
    setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1)
  }
  const handleNext = () => {
    setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1)
  }

  return (
    <div className='container'>
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
      {images && images.length ?
        images.map((imageItem, index) => (
          <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={imageIndex === index ? "current-image" : "current-image hide-current-image"}
          />
        ))
      : null}
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
      <span className="circle-indicator">
        {images && images.length ? images.map((_, index) => (
          <button key={index} className={
            imageIndex === index ? "current-indicator": "current-indicator hide-current-indicator"
            
          } 
          button onClick={() => setImageIndex(index)}
          >

          </button>
        )) : null}
      </span>
    </div>
  );
};

export default ImageSlider;
