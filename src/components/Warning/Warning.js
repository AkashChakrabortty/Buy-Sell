import React from 'react';

const Warning = () => {
    return (
        <div className='container text-center bg-white shadow-sm p-3 mt-2'>
            <h2>
            <span className='text-info fw-bold'>Warning!</span></h2>
            <p>
                if you are seller,please post valid product.If we find any scam , we will ban you permanently.
            </p>

            <p>
                if you are buyer,please contact your seller with your own responsibility.There is no refund policy.
            </p>
        </div>
    );
};

export default Warning;