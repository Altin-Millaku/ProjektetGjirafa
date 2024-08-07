import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Slideri = styled.div`
  width: 100vw;
  height: 60vh;
  border-bottom: 3px solid #000;
  img{
    width: 100%;
    height: 100%;
  }
`

const Slider = ({ backgrounds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <Slideri>
      <img
        src={backgrounds[currentIndex]}
        alt={`Background ${currentIndex}`}
        className="background-image"
      />
    </Slideri>
  );
};

export default Slider;
