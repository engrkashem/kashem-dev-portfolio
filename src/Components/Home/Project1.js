import React from 'react';
import project1Banner from '../../images/project1_banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Project1 = () => {
    const projects = {
        id: 1,
        name: 'SKS Inc.',
        bullet1: 'custom Active Links where route names and path names are sent as children. Conditional rendering is executed.',
        bullet2: 'User-protected and admin-protected routes, JWT token verification, 401, 403 status appended. ',
        bullet3: 'Admin dashboard is introduced. JWT and admin verifying middle tire functions are enacted on the server-side.',
        bullet4: 'Transformed the project into full-stack applying React.js, Node.js, Express.js, Firebase, React form hook, and MongoDB.',
        liveLink: 'https://sks-inc.web.app/',
        clientRepo: 'https://github.com/engrkashem/SKS-Inc-client',
        serverRepo: 'https://github.com/engrkashem/SKS-Inc-server'
    }
    return (
        <div className="hero glass text-white ">
            <div>
                <div className=' hero-content flex-col lg:flex-row-reverse'>
                    <img src={project1Banner} className="max-w-sm rounded-lg shadow-2xl" alt='Project banner' />
                    <div>
                        <h1 className="text-5xl font-bold">{projects.name}</h1>
                        <h2 className=' my-3 text-xl font-semibold'>Features & Technologies</h2>
                        <ul>
                            <li>{projects.bullet1}</li>
                            <li>{projects.bullet2}</li>
                            <li>{projects.bullet3}</li>
                            <li>{projects.bullet4}</li>
                        </ul>
                        <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5 flex items-center">
                            Details <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project1;