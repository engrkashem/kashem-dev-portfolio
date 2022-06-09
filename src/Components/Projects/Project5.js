import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import project5Banner from '../../images/project5_banner.png';

const Project5 = () => {
    return (
        <div className="hero glass text-white ">
            <div>
                <div className=' hero-content flex-col lg:flex-row-reverse'>
                    <img src={project5Banner} className="max-w-sm rounded-lg shadow-2xl" alt='Project banner' />
                    <div>
                        <h1 className="text-5xl font-bold">Treatise Chooser</h1>
                        <h2 className=' my-3 text-xl font-semibold'>Features & Technologies</h2>
                        <ul>
                            <li className='mb-2' >Font Awesome is applied </li>
                            <li className='mb-2 '>Marquee tag is used</li>
                            <li className='mb-2'>Implemented technologies are React.js, Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-5 p-5'>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://treatise-chooser.netlify.app/index.html" target={'_blank'}>
                        Visit Web Site <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                    <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5"> <a className=' flex items-center' href="https://github.com/engrkashem/treatise-chooser-for-confused-buyer" target={'_blank'}>
                        Client Side Code <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                    </a></button>
                </div>
            </div>
        </div>
    );
};

export default Project5;