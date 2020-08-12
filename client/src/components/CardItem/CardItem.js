import React from 'react';
import './Styles.scss';
import { formatMoney, getSymbol } from '../../helpers/money';

const CardItem = ({ item }) => {
  const symbol = getSymbol();
  console.log(item);

  const Redirect = ({ children }) => (
    <a href={`/items/${item.id}`} title={item.title}>
      {children}
    </a>
  );

  return (
    <div className='card'>
      <Redirect>
        <img className='card__imagen' src={item.picture} alt={item.title} />
      </Redirect>
      <div className='card__description'>
        <div className='card__description--price'>
          {`${symbol} ${formatMoney(item.price.amount)}`}
        </div>
        <div className='card__description--title'>
          <Redirect>{item.title}</Redirect>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
