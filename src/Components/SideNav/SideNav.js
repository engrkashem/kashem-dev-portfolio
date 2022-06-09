import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyWindow, faUser, faSuitcase, faEnvelopeOpen, faBlog, faDesktop } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
    return (
        <div className='h-full absolute right-0 text-white flex items-center pr-10'>
            <div className='grid grid-cols-1 gap-5'>
                <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                        isActive ? ' text-yellow-400 border-2 border-yellow-400 uppercase h-full block font-semibold custom-button' : 'uppercase font-semibold custom-button text-white'
                    }
                >
                    <FontAwesomeIcon icon={faHouseChimneyWindow} className=" h-9"></FontAwesomeIcon>
                </NavLink>
                <NavLink
                    to={'/about'}
                    className={({ isActive }) =>
                        isActive ? ' text-yellow-400 border-2 border-yellow-400 uppercase h-full block font-semibold custom-button' : 'uppercase font-semibold custom-button text-white'
                    }
                >
                    <FontAwesomeIcon icon={faUser} className=" h-9"></FontAwesomeIcon>
                </NavLink>
                <NavLink
                    to={'/skills'}
                    className={({ isActive }) =>
                        isActive ? ' text-yellow-400 border-2 border-yellow-400 uppercase h-full block font-semibold custom-button' : 'uppercase font-semibold custom-button text-white'
                    }
                >
                    <FontAwesomeIcon icon={faDesktop} className=" h-9"></FontAwesomeIcon>
                </NavLink>
                <NavLink
                    to={'/projects'}
                    className={({ isActive }) =>
                        isActive ? ' text-yellow-400 border-2 border-yellow-400 uppercase h-full block font-semibold custom-button' : 'uppercase font-semibold custom-button text-white'
                    }
                >
                    <FontAwesomeIcon icon={faSuitcase} className=" h-9"></FontAwesomeIcon>
                </NavLink>
                <NavLink
                    to={'/contact'}
                    className={({ isActive }) =>
                        isActive ? ' text-yellow-400 border-2 border-yellow-400 uppercase h-full block font-semibold custom-button' : 'uppercase font-semibold custom-button text-white'
                    }
                >
                    <FontAwesomeIcon icon={faEnvelopeOpen} className=" h-9"></FontAwesomeIcon>
                </NavLink>
                <NavLink
                    to={'/blogs'}
                    className={({ isActive }) =>
                        isActive ? ' text-yellow-400 border-2 border-yellow-400 uppercase h-full block font-semibold custom-button' : 'uppercase font-semibold custom-button text-white'
                    }
                >
                    <FontAwesomeIcon icon={faBlog} className=" h-9"></FontAwesomeIcon>
                </NavLink>
            </div>
        </div>
    );
};

export default SideNav;