import React from 'react';
import './contacts.css';
import contactPic from '../../Assets/Images/callToAction.png';

const Contacts = () => {
  return (
    <section className='contact' id='contact'>
      <h1 class='section-header'>Contact</h1>
      <div className='contactCont'>
        <img src={contactPic} alt='call to action, no backgound' />

        <div class='contact-wrapper'>
          <div class='direct-contact-container'>
            <ul class='contact-list'>
              <li class='list-item'>
                <span class='contact-text place'>Just-Pine Obrt</span>
              </li>

              <li class='list-item'>
                <span class='contact-text phone'>
                  <a href='tel:1-212-555-5555' title='Give me a call'>
                    (+385) 992166806
                  </a>
                </span>
              </li>

              <li class='list-item'>
                <span class='contact-text gmail'>
                  <a
                    href='mailto:bogovicjan@gmail.com'
                    title='Send me an email'
                  >
                    bogovicjan@gmail.com
                  </a>
                </span>
              </li>
            </ul>

            <hr />

            <div class='copyright'>&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
