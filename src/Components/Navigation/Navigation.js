import React from 'react';
import './navigation.scss';

const Navigation = () => {
  return (
    <div style={{ zIndex: '999' }}>
      <input
        type='checkbox'
        id='main-navigation-toggle'
        className='btn btn--close'
        title='Toggle main navigation'
      />
      <label for='main-navigation-toggle'>
        <span></span>
      </label>

      <nav id='main-navigation' className='nav-main'>
        <ul className='menu'>
          <li className='menu__item'>
            <a className='menu__link' href='#0'>
              Home
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='#0'>
              Services
            </a>
            <ul className='submenu'>
              <li className='menu__item'>
                <a className='menu__link' href='#0'>
                  Print Design
                </a>
              </li>
              <li className='menu__item'>
                <a className='menu__link' href='#0'>
                  Web Design
                </a>
              </li>
              <li className='menu__item'>
                <a className='menu__link' href='#0'>
                  Mobile App Development
                </a>
              </li>
            </ul>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='#0'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
