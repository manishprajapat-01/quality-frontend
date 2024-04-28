import React from 'react';
import avtar from '../../assets/images/user/avatar-1.jpg'
const RandomImage = ({ src, alt }) => {
  // Function to check if image loads successfully
//   console.log(src,alt)
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject('Failed to load image');
      img.src = src;
    });
  };

 
  return (
    <img
      src={src}
      alt={alt}
      className='img-50'
      onError={(e) => {
        loadImage(avtar)
          .then((randomSrc) => {
            e.target.src = randomSrc;
          })
      }}
    />
  );
};

export default RandomImage;
