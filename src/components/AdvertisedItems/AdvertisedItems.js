import React, { useEffect, useState } from 'react';

const AdvertisedItems = () => {
    const [data,setData] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/advertiseItems')
        .then(res => res.json())
        .then(data => console.log(data))
    } ,[])
    return (
        <div>
            AdvertisedItems
        </div>
    );
};

export default AdvertisedItems;