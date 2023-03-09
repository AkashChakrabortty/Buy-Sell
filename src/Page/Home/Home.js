import React from 'react';
import AdvertisedItems from '../../components/AdvertisedItems/AdvertisedItems';
import Banner from '../../components/Banner/Banner';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import Warning from '../../components/Warning/Warning';
const Home = () => {
    return (
      <div className='col-12 col-sm-10 mx-auto mt-2'>
        <Banner></Banner>
        <hr />
        <AdvertisedItems></AdvertisedItems>
        <ProductCategories></ProductCategories>
        <hr />
        <Warning></Warning>
        <hr />
      </div>
    );
};

export default Home;