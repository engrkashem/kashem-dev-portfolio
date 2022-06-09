import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import project4Banner from '../../images/project4_banner.png';

const Project4 = () => {
    return (
        <div className="hero glass text-white ">
            <div>
                <div className=' hero-content flex-col lg:flex-row-reverse'>
                    <img src={project4Banner} className="max-w-sm rounded-lg shadow-2xl" alt='Project banner' />
                    <div>
                        <h1 className="text-5xl font-bold">Product Analysis</h1>
                        <h2 className=' my-3 text-xl font-semibold'>Features & Technologies</h2>
                        <ul>
                            <li className='mb-2 '>custom Active Links. Conditional rendering is executed.</li>
                            <li className='mb-2' >User-protected routes and does not redirect to login after reloading  </li>
                            <li className='mb-2'>Executed Technologies are React.js, Recharts, Firebase,React Router, React Firebase Hook, Vanilla CSS.</li>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-5 p-5'>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://react-event-manager.netlify.app/" target={'_blank'}>
                        Visit Web Site <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://github.com/engrkashem/product-analysis-clients" target={'_blank'}>
                        Client Side Code <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                </div>
            </div>
        </div>
    );
};

export default Project4;