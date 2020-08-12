import React from 'react';
import './Styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <nav className='nav'>
      <div className='nav__logo'></div>
      <div className='nav__container--search'>
        <input
          type='text'
          autoComplete='off'
          placeholder='Nunca dejes de buscar'
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
