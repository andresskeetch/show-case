import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemsActions from '../../redux/reducers/items.reducer';
import './Styles.scss';
import { formatMoney, getSymbol } from '../../helpers/money';
import Condition from '../../helpers/condition';

const ItemDetail = ({ match }) => {
  const dispatch = useDispatch();

  const { id } = match.params;
  const { itemSelected } = useSelector(({ search }) => search);
  console.log(itemSelected);
  useEffect(() => {
    dispatch(ItemsActions.getItemById(id));
  }, []);

  const itemsSolds = () => {
    // may validate to retun only solds.
    return ` - ${itemSelected.sold_quantity} vendidos`;
  };

  const symbol = getSymbol();

  return (
    <div className='container'>
      <div className='container__panel'>
        <div className='container__panel--content'>
          <div className='content__image'>
            <img src={itemSelected.picture} alt={itemSelected.title} />
          </div>
          <div className='content__description'>
            <h4 className='content__description--condition'>
              {Condition[itemSelected.condition]}
              {itemsSolds()}
            </h4>
            <h2 className='content__description--title'>
              {itemSelected.title}
            </h2>
            <div className='content__description--price'>
              <div className='detail__amount'>
                {`${symbol} ${formatMoney(itemSelected.price.amount)}`}
              </div>
              <div className='detail__decimal'>
                {itemSelected.price.decimals}
              </div>
            </div>
            <button className='detail__shop' type='button'>
              Comprar
            </button>
          </div>
        </div>
        <div className='container__panel--footer'>
          <h3 className='footer__title'>Descripcion del producto</h3>
          <p className='footer__description'>{itemSelected.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
