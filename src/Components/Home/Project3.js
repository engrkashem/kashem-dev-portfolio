import React from 'react';
import project3Banner from '../../images/project3_banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Project3 = () => {
    return (
        <div className="hero glass text-white ">
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={project3Banner} className="max-w-sm rounded-lg shadow-2xl" alt='Project banner' />
                    <div>
                        <h1 className="text-5xl font-bold">Travel With Elina</h1>
                        <h2 className=' my-3 text-xl font-semibold'>Features & Technologies</h2>
                        <ul>
                            <li className='mb-2 '>Employing React.js, React Router, Bootstrap, etc coalesce with the authentication by Firebase.</li>
                            <li className='mb-2' >Custom active Links, Custom hook imposed. </li>
                            <li className='mb-2' >Users can choose or customize tour packages according to their choice and confirm bookings.</li>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-5 p-5'>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://travel-with-elina.web.app/" target={'_blank'}>
                        Visit Web Site <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://github.com/engrkashem/travel-guide-elina-client" target={'_blank'}>
                        Client Side Code <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                </div>
            </div>
        </div>
    );
};

export default Project3;