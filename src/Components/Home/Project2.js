import React from 'react';
import project2Banner from '../../images/project2_banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Project2 = () => {
    return (
        <div className="hero glass text-white ">
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={project2Banner} className="max-w-sm rounded-lg shadow-2xl" alt='Project banner' />
                    <div>
                        <h1 className="text-5xl font-bold">Tech Hub</h1>
                        <h2 className=' my-3 text-xl font-semibold'>Features & Technologies</h2>
                        <ul>
                            <li className='mb-2 '>Revamp development by implementing Conditional rendering and Protected route enacted on the client-side.</li>
                            <li className='mb-2' >The stock of products in the warehouse keeps updated and wholesalers can place orders. </li>
                            <li className='mb-2' >Enhanced the project acceptance utilizing React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Firebase, React Form Hooks, and Axios.</li>
                        </ul>

                    </div>
                </div>
                <div className='flex gap-5 p-5'>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://tech-hub-warehouse.web.app/" target={'_blank'}>
                        Visit Web Site <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://github.com/engrkashem/tech-hub-client" target={'_blank'}>
                        Client Side Code <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://github.com/engrkashem/tech-hub-server" target={'_blank'}>
                        Server Side Code <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                </div>
            </div>
        </div>
    );
};

export default Project2;