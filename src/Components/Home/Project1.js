import React from 'react';
import project1Banner from '../../images/project1_banner.png';

const Project1 = () => {
    return (
        <div className="hero glass text-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={project1Banner} className="max-w-sm rounded-lg shadow-2xl" alt='Project banner' />
                <div>
                    <h1 className="text-5xl font-bold">SKS Inc.</h1>
                    <h2 className=' my-3 text-xl font-semibold'>Features & Technologies</h2>
                    <ul>
                        <li className='mb-2 '>custom Active Links where route names and path names are sent as children. Conditional rendering is executed.</li>
                        <li className='mb-2' >User-protected and admin-protected routes, JWT token verification, 401, 403 status appended. </li>
                        <li className='mb-2' >Admin dashboard is introduced. JWT and admin verifying middle tire functions are enacted on the server-side.</li>
                        <li className='mb-2'>Transformed the project into full-stack applying React.js, Node.js, Express.js, Firebase, React form hook, and MongoDB.</li>
                    </ul>
                    <button className="btn bg-yellow-400 px-10 text-lg rounded-full">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project1;