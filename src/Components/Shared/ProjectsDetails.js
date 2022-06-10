import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectsContext } from '../../App';
import SideNav from '../SideNav/SideNav';
import './ProjectDetails.css';

const ProjectsDetails = () => {
    //receive dynamic id
    const { projectId } = useParams();

    //receive projects via context api
    const projects = useContext(ProjectsContext);

    //image set state
    const [image, setImage] = useState('');

    //selecting selected project
    const selectedProject = projects.filter(p => p?.id == projectId);

    const {
        fea1, fea2, fea3, fea4, fea5, fea6, fea7, fea8, fun1, fun2, fun3, fun4, fun5, fun6, fun7, fun8, img, img1, img2, img3, name, liveLink, serverRepo, clientRepo, tech
    } = selectedProject[0];



    return (
        <div className='project-container min-h-screen bg-cover text-white p-5'>
            <SideNav></SideNav>
            <div className='container'>
                <h2 className='text-6xl font-bold text-center py-10'>{name}</h2>
                <div className=' flex flex-col items-center mb-20'>
                    <div className='h-72 w-96 mb-3'>
                        <img className='w-full h-full'
                            src={image} alt="" />
                    </div>
                    <div className=' flex flex-wrap gap-1'>
                        <div onClick={() => setImage(img)} className='h-10 w-16 border-2 border-slate-300'> <img className='h-full w-full' src={img} alt="" /></div>

                        {img1 && <div onClick={() => setImage(img1)} className='h-10 w-16 border-2 border-slate-300'><img className='h-full w-full' src={img1} alt="" /></div>}

                        {img2 && <div onClick={() => setImage(img2)} className='h-10 w-16 border-2 border-slate-300'><img className='h-full w-full' src={img2} alt="" /></div>}

                        {img3 && <div onClick={() => setImage(img3)} className='h-10 w-16 border-2 border-slate-300'><img className='h-full w-full' src={img3} alt="" /></div>}
                    </div>
                </div>
                <div>
                    <h3 className=' text-3xl font-medium mb-4'>Features:</h3>
                    <ul className='grid grid-cols-1 gap-3 mb-10'>
                        <li>{fea1}</li>
                        <li>{fea2}</li>
                        <li>{fea3}</li>
                        <li>{fea4}</li>
                        <li>{fea5}</li>
                        <li>{fea6}</li>
                        <li>{fea7}</li>
                        <li>{fea8}</li>
                    </ul>
                    <h3 className=' text-3xl font-medium mb-4'>Functionality:</h3>
                    <ul className='grid grid-cols-1 gap-3'>
                        <li>{fun1}</li>
                        <li>{fun2}</li>
                        <li>{fun3}</li>
                        <li>{fun4}</li>
                        <li>{fun5}</li>
                        <li>{fun6}</li>
                        <li>{fun7}</li>
                        <li>{fun8}</li>
                    </ul>
                    <h3 className=' text-3xl font-medium mb-4'>Technologies:</h3>
                    <p>{tech}</p>
                    <div className=' flex justify-evenly flex-wrap'>
                        <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5">
                            <a className='flex items-center' href={liveLink}>
                                Visit Live Site <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                            </a>
                        </button>
                        <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5 flex items-center">
                            <a className='flex items-center' href={clientRepo}>
                                Client Side Code  <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                            </a>
                        </button>
                        <button className="button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5 flex items-center">
                            <a className='flex items-center' href={serverRepo}>
                                Server Side Code  <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;