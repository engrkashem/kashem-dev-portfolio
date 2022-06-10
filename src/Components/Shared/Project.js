import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const navigate = useNavigate();
    const { id, bullet1, bullet2, bullet3, bullet4, img, name, tech } = project;

    return (
        <div className="hero glass text-white ">
            <div>
                <div className=' hero-content flex-col lg:flex-row-reverse'>
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='Project banner' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <h2 className=' mt-3 text-xl font-semibold'>Features</h2>
                        <ul className='grid grid-cols-1 gap-2'>
                            <li>{bullet1}</li>
                            <li>{bullet2}</li>
                            <li>{bullet3}</li>
                            <li>{bullet4}</li>
                        </ul>
                        <h2 className=' mt-3 text-xl font-semibold'>Technologies</h2>
                        <p>{tech}</p>
                        <button onClick={() => navigate(`/home/${id}`)} className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5 flex items-center">
                            Details <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;