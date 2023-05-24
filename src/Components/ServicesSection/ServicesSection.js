import React, { useEffect, useRef } from 'react';
import './ServicesSection.css';
import codeVideo from '../../Assets/Images/codeVideo.mp4';

const ServicesSection = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.playbackRate = 0.5;
  });

  return (
    <section className='services'>
      <div className='bigService'>
        <h1 className='bigServiceTitle'>TITLE</h1>
        <button className='bigServiceButton'>button</button>
        <video
          ref={videoRef}
          width='140'
          height='420'
          className='bigServiceVideo'
          controls={false}
          autoPlay={true}
          muted
          loop
        >
          <source src={codeVideo} type='video/mp4' />
        </video>
      </div>
      <div className='border'></div>
      <div className='border'></div>
    </section>
  );
};

export default ServicesSection;
