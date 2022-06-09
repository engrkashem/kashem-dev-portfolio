import React, { useState } from 'react';
import ContactModal from '../Shared/ContactModal';
import SideNav from '../SideNav/SideNav';
import Banner from './Banner';
import './Home.css';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [closeModal, setCloseModal] = useState(false);

    return (
        <div className=' bg-slate-900'>
            <SideNav></SideNav>
            <Banner></Banner>
            <div className='mt-16 pb-10 px-5 flex flex-col gap-10'>
                <h2 className=' text-center text-5xl font-bold text-white mb-10'>PROJECT SHOWCASE</h2>
                <Project1></Project1>
                <Project2></Project2>
                <Project3></Project3>
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