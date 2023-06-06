import React from 'react';
import './topbar.css';
import FullLogoImage from '../../Assets/Logos/WithName.png';

const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='top-bar-logo'>
        <img src={FullLogoImage} alt='Just-Pine logo' />
      </div>
      <ul className='top-bar-list'>
        <li>
          <a
            style={{ color: 'black', textDecoration: 'none', cursor: 'none' }}
            href='#about'
          >
            ABOUT US
          </a>
        </li>
        <li>
          <a
            style={{ color: 'black', textDecoration: 'none', cursor: 'none' }}
            href='#services'
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            style={{ color: 'black', textDecoration: 'none', cursor: 'none' }}
            href='#contact'
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
