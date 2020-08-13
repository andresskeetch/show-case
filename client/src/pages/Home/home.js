import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ItemsActions from '../../redux/reducers/items.reducer';
import { useSelector } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem';
import './Styles.scss';

const Home = (props) => {
  const dispatch = useDispatch();
  const { items } = useSelector(({ search }) => search);

  const query = new URLSearchParams(props.location.search);
  const search = query.get('search');
  useEffect(() => {
    dispatch(ItemsActions.getItems(search));
  }, []);

  return (
    <div className='container'>
      <div className='container__panel'>
        {items.map((item) => (
          <CardItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
