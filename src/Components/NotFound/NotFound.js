import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found bg-cover min-h-screen'>
            <h2 className=' text-6xl font-bold text-blue-800 text-center pt-5'>The Page Not Found</h2> <Link className=' block text-center text-2xl mt-2 font-semibold text-blue-700' to={'/'}>Back to Home</Link>
        </div>
    );
};

export default NotFound;