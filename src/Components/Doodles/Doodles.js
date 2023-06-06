import React from 'react';
import 'css-doodle';

const Doodles = () => {
  const doodlesArray = [
    {
      title: 'expertise',
      text: 'We have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.',
      doodle: `  @grid: 20 / 20vmin;
      @shape: circle;
                background: var(--color-primary);
                scale: 1;
                opacity: 1;`,
    },
    {
      title: 'technology',
      text: 'We stay up to date with the latest trends and technologies in the IT industry.',
      doodle: `   :doodle {
@grid: 20 / 20vmin;
  }
background: var(--color-primary);
  transform: scale(@rand(.2, .9));`,
      seed: '2020',
    },
    {
      title: 'solutions',
      text: 'We take a personalized approach with every project, working closely with YOU.',
      doodle: `  :doodle {
@grid: 20 / 20vmin;
  @shape: circle;
}
@even {
  @shape: hypocycloid 4;
  background: var(--color-primary);
  transform: scale(2) rotate(-60deg);
}`,
    },
    {
      title: 'results',
      text: 'Reach YOUR goals with our IT solutions.',
      doodle: `
   @grid: 20 / 20vmin;
@place: center;
@size: calc(100% / 5 * @index);
opacity: calc(1.1 - 1 / 5 * @index);
z-index: calc(5 - @index);
background: var(--color-primary);`,
    },
  ];
  return (
    <div className='whyUsItemsCont'>
      {doodlesArray.map((item, index) => {
        return (
          <div className='squareAnim' key={index}>
            <css-doodle seed={item.seed && item.seed}>
              <style>{item.doodle}</style>
            </css-doodle>
            <div className='title'>{item.title}</div>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Doodles;
