import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyWindow, faUser, faSuitcase, faEnvelopeOpen, faBlog, faDesktop } from '@fortawesome/free-solid-svg-icons';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className='h-screen absolute right-0 flex items-center lg:pr-10'>
            <div className='grid grid-cols-1 gap-5 text-white'>
                <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                        isActive ? 'tooltip bg-yellow-400 border-2 border-yellow-400 uppercase font-semibold custom-button h-12 w-12 rounded-full flex justify-center items-center' : 'uppercase font-semibold custom-button h-12 w-12 rounded-full bg-slate-600 flex justify-center items-center tooltip'
                    }
                    data-tip="HOME"
                >
                    <div className=''>
                        <FontAwesomeIcon icon={faHouseChimneyWindow} className=" h-5"></FontAwesomeIcon>
                    </div>
                </NavLink>
                <NavLink
                    to={'/about'}
                    className={({ isActive }) =>
                        isActive ? 'tooltip bg-yellow-400 border-2 border-yellow-400 uppercase font-semibold custom-button h-12 w-12 rounded-full flex justify-center items-center' : 'uppercase font-semibold custom-button h-12 w-12 rounded-full bg-slate-600 flex justify-center items-center tooltip'
                    }
                    data-tip="ABOUT"
                >
                    <FontAwesomeIcon icon={faUser} className=" h-5"></FontAwesomeIcon>
                </NavLink>
                <NavLink
                    to={'/skills'}
                    className={({ isActive }) =>
                        isActive ? 'tooltip bg-yellow-400 border-2 border-yellow-400 uppercase font-semibold custom-button h-12 w-12 rounded-full flex justify-center items-center' : 'uppercase font-semibold custom-button h-12 w-12 rounded-full bg-slate-600 flex justify-center items-center tooltip'
                    }
                    data-tip="SKILLS"
                >
                    <FontAwesomeIcon icon={faDesktop} className=" h-5"></FontAwesomeIcon>
                </NavLink>
                <NavLink
                    to={'/projects'}
                    className={({ isActive }) =>
                        isActive ? 'tooltip bg-yellow-400 border-2 border-yellow-400 uppercase font-semibold custom-button h-12 w-12 rounded-full flex justify-center items-center' : 'uppercase font-semibold custom-button h-12 w-12 rounded-full bg-slate-600 flex justify-center items-center tooltip'
                    }
                    data-tip="PROJECTS"
                >
                    <FontAwesomeIcon icon={faSuitcase} className=" h-5"></FontAwesomeIcon>
                </NavLink>
                <button
                    to={'/contact'}
                    className={'uppercase font-semibold custom-button h-12 w-12 rounded-full bg-slate-600 flex justify-center items-center tooltip'
                    }
                    data-tip="CONTACT"
                >
                    <FontAwesomeIcon icon={faEnvelopeOpen} className=" h-5"></FontAwesomeIcon>
                </button>
                <NavLink
                    to={'/blogs'}
                    className={({ isActive }) =>
                        isActive ? 'tooltip bg-yellow-400 border-2 border-yellow-400 uppercase font-semibold custom-button h-12 w-12 rounded-full flex justify-center items-center' : 'uppercase font-semibold custom-button h-12 w-12 rounded-full bg-slate-600 flex justify-center items-center tooltip'
                    }
                    data-tip="BLOGS"
                >
                    <FontAwesomeIcon icon={faBlog} className=" h-5"></FontAwesomeIcon>
                </NavLink>
            </div>
        </div>
    );
};

export default SideNav;