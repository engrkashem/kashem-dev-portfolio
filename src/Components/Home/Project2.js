import React from 'react';
import project2Banner from '../../images/project2_banner.png';

const Project2 = () => {
    return (
        <div className="hero glass text-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={project2Banner} className="max-w-sm rounded-lg shadow-2xl" alt='Project banner' />
                <div>
                    <h1 className="text-5xl font-bold">SKS Inc.</h1>
                    <h2 className=' my-3 text-xl font-semibold'>Features & Technologies</h2>
                    <ul>
                        <li className='mb-2 '>Revamp development by implementing Conditional rendering and Protected route enacted on the client-side.</li>
                        <li className='mb-2' >The stock of products in the warehouse keeps updated and wholesalers can place orders. </li>
                        <li className='mb-2' >Enhanced the project acceptance utilizing React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Firebase, React Form Hooks, and Axios.</li>
                    </ul>
                    <button className="btn bg-yellow-400 px-10 text-lg rounded-full">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project2;