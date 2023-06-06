import React from 'react';
import './contacts.css';
import contactPic from '../../Assets/Images/callToAction.png';

const Contacts = () => {
  return (
    <section className='contact'>
      <img src={contactPic} alt='call to action, no backgound' />
    </section>
  );
};

export default Contacts;
