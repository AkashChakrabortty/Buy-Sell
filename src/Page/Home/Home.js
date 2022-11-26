import React from 'react';
import AdvertisedItems from '../../components/AdvertisedItems/AdvertisedItems';
import Banner from '../../components/Banner/Banner';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import Warning from '../../components/Warning/Warning';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <Warning></Warning>
        </div>
    );
};

export default Home;