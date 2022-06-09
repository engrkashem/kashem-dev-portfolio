import React from 'react';
import project1Banner from '../../images/project1_banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Project1 = () => {
    return (
        <div className="hero glass text-white ">
            <div>
                <div className=' hero-content flex-col lg:flex-row-reverse'>
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
                    </div>
                </div>
                <div className='flex gap-5 p-5'>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://sks-inc.web.app/" target={'_blank'}>
                        Visit Web Site <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://github.com/engrkashem/SKS-Inc-client" target={'_blank'}>
                        Client Side Code <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://github.com/engrkashem/SKS-Inc-server" target={'_blank'}>
                        Server Side Code <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                </div>
            </div>
        </div>
    );
};

export default Project1;