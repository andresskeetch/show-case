import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ItemsActions from '../../redux/reducers/items.reducer';
import './Styles.scss';

const Header = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState();

  const handleSearch = () => {
    dispatch(ItemsActions.getItems(search));
  };

  const handleEnter = (e) => {
    if (e.which === 13 || e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <nav className='nav'>
      <div className='nav__logo' onClick={() => dispatch(push('/'))}></div>
      <div className='nav__container--search'>
        <input
          type='text'
          autoComplete='off'
          placeholder='Nunca dejes de buscar'
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleEnter}
        />
        <input type='button' className='search__icon' onClick={handleSearch} />
      </div>
    </nav>
  );
};

export default Header;
