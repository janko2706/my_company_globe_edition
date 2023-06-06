import React from 'react';
import './cursor.scss';
const Cursor = () => {
  const mainCursor = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);
  return (
    <div className={`cursor-wrapper`}>
      <div className='main-cursor ' ref={mainCursor}>
        <div className='main-cursor-background'></div>
      </div>
    </div>
  );
};

export default Cursor;
