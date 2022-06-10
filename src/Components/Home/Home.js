import React, { useContext, useState } from 'react';
import ContactModal from '../Shared/ContactModal';
import SideNav from '../SideNav/SideNav';
import Banner from './Banner';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Project from '../Shared/Project';
import { ProjectsContext } from '../../App';

const Home = () => {
    //to close contact modal after submitting
    const [closeModal, setCloseModal] = useState(false);

    //load fake project data
    const projects = useContext(ProjectsContext);
    //slicing 3 projects out of 5
    const topProjects = projects.slice(0, 3);

    return (
        <div className=' bg-slate-900'>
            <SideNav></SideNav>
            <Banner></Banner>
            <div className='mt-16 pb-10 px-5 flex flex-col gap-10'>
                <h2 className=' text-center text-5xl font-bold text-white mb-10'>PROJECT SHOWCASE</h2>
                {
                    topProjects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }

            </div>
            <div className='p-10'>
                <label onClick={() => setCloseModal(true)} htmlFor="contact-modal" className="btn modal-button bg-yellow-400 px-10 text-lg rounded-full ">Contact Me <FontAwesomeIcon icon={faArrowRight} className="ml-1"></FontAwesomeIcon></label>
            </div>
            {
                closeModal && <ContactModal
                    setCloseModal={setCloseModal}
                ></ContactModal>
            }

        </div>
    );
};

export default Home;