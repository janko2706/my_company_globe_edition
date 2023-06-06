import React from 'react';
import './services.css';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from './styles.module.css';
import chevronDown from './chevronDown.svg';
import { serviceArray } from '../ServiceArray/ServiceArray.js';

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={styles.chevron} src={chevronDown} alt='Chevron Down' />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

const Services = () => {
  return (
    <section className='services' id='services'>
      <div className='servicesTitle'>Services</div>
      <div>
        <Accordion transition transitionTimeout={250}>
          {serviceArray.map((item, index) => {
            return (
              <AccordionItem header={item.h1} key={index}>
                <div className={styles.itemsCont}>
                  <div className={styles.accordionText}>{item.p}</div>
                  <img src={item.src} alt={item.alt} height={250} width={400} />
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
