import React from 'react';
import project3Banner from '../../images/project3_banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Project3 = () => {
    const projects = {
        id: 1,
        name: 'SKS Inc.',
        bullet1: 'Employing React.js, React Router, Bootstrap, etc coalesce with the authentication by Firebase.',
        bullet2: 'Custom active Links, Custom hook imposed. ',
        bullet3: 'Users can choose or customize tour packages according to their choice and confirm bookings.',
        liveLink: 'https://travel-with-elina.web.app/',
        clientRepo: 'https://github.com/engrkashem/travel-guide-elina-client',
        serverRepo: 'https://github.com/engrkashem/tech-hub-server'
    }
    return (
        <div className="hero glass text-white ">
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={project3Banner} className="max-w-sm rounded-lg shadow-2xl" alt='Project banner' />
                    <div>
                        <h1 className="text-5xl font-bold">Travel With Elina</h1>
                        <h2 className=' my-3 text-xl font-semibold'>Features & Technologies</h2>
                        <ul>
                            <li>{projects.bullet1}</li>
                            <li>{projects.bullet2}</li>
                            <li>{projects.bullet3}</li>

                        </ul>
                        <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5 flex items-center">
                            Visit Web Site <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project3;