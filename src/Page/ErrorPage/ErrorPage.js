import React from 'react';
import img from './404-error-page-not-found.jpg';
const ErrorPage = () => {
    return (
        <div>
            <img src={img} alt="404 not found" className='img-fluid'/>
        </div>
    );
};

export default ErrorPage;