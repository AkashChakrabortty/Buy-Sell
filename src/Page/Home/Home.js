import React from 'react';
import AdvertisedItems from '../../components/AdvertisedItems/AdvertisedItems';
import Banner from '../../components/Banner/Banner';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;