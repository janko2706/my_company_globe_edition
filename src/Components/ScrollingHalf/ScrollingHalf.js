import React from 'react';
import './ScrollingHalf.css';
import './scrollinghalf.scss';
import { motion } from 'framer-motion';
// import headphonesImage from '../../Assets/Images/headphones.jpg';
// import handHoldingSoftware from '../../Assets/Images/handHoldingSoftware.png';
import platformDevelopement from '../../Assets/Images/platformDevelopement.jpg';
import MILifeDesignHERO from '../../Assets/Images/MILifeDesignHERO.png';
import softwareDevelopement from '../../Assets/Images/softwareDevelopement.png';
import mobileDevelopement from '../../Assets/Images/mobileDevelopement.png';
import AIHead from '../../Assets/Images/AIHead.webp';
import calendarWithCoffe from '../../Assets/Images/calendarWithCoffe.jpg';
import callToAction from '../../Assets/Images/callToAction.png';
const ScrollingHalf = () => {
  const serviceArray = [
    {
      type: 'section',
      h1: 'REIMAGINE what is possible',
      p: 'EMPOVERING business',
    },
    { type: 'figure', src: calendarWithCoffe, alt: 'calendar with coffe' },
    { type: 'figure', src: MILifeDesignHERO, alt: 'a cover page of a website' },
    {
      type: 'section',
      h1: 'WEB Design',
      p: 'Create visually appealing websites with custom designs, seamless functionality, and user-friendly interfaces.',
    },
    {
      type: 'figure',
      src: softwareDevelopement,
      alt: 'abstract representation of software developement',
    },
    {
      type: 'section',
      h1: 'Software Development',
      p: 'Craft reliable and innovative software solutions tailored to your specific requirements.',
    },
    {
      type: 'figure',
      src: platformDevelopement,
      alt: 'abstract representation of platform developement',
    },
    {
      type: 'section',
      h1: 'Platform Development',
      p: 'Build robust, secure, and scalable platforms for streamlined operations and enhanced collaboration.',
    },
    {
      type: 'figure',
      src: AIHead,
      alt: 'abstract representation of AI',
    },
    {
      type: 'section',
      h1: 'AI solutions',
      p: 'Harness the power of AI to optimize processes, gain insights, and drive efficiency.',
    },
    {
      type: 'figure',
      src: mobileDevelopement,
      alt: 'abstract representation of mobile developement',
    },

    {
      type: 'section',
      h1: 'Mobile App Development',
      p: 'Create intuitive and feature-rich mobile applications for iOS and  Android platforms',
    },
    {
      type: 'figure',
      src: callToAction,
      alt: 'ready to change your business representation',
    },

    {
      type: 'section',
      h1: 'Give us a call',
      p: 'Por una web con mucho estilo, para argonautas con buen gusto.',
    },
  ];
  return (
    <article>
      {serviceArray.map((item, key) => {
        if (item.type === 'section') {
          return (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <div>
                <h1>{item.h1}</h1>
                <p>{item.p}</p>
              </div>
            </motion.section>
          );
        } else {
          return (
            <motion.figure
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <img src={item.src} alt={item.alt} />
            </motion.figure>
          );
        }
      })}
    </article>
  );
};

export default ScrollingHalf;
