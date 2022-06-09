import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import devPic from '../../images/myPic.png';

const Banner = () => {
    return (
        <div className='banner-container  bg-cover realative'>
            <div className="banner min-h-screen  grid grid-cols-1 lg:grid-cols-2 auto-cols-max">
                <div className='h-full flex items-end '>
                    <img className='' src={devPic} alt="" />
                </div>
                <div className=' h-full flex items-center bg-slate-900 lg:bg-transparent pb-10'>
                    <div>
                        <h1 className=' text-yellow-400 font-bold text-3xl lg:text-5xl'><span className='text-4xl lg:text-6xl'>I</span>'m <br /><span className='text-4xl lg:text-6xl'>MOHAMMAD </span> <br /><span className='text-5xl lg:text-7xl'>ABUL KASHEM</span></h1>
                        <h2 className='text-4xl lg:text-6xl font-bold text-white mt-2'>WEB DEVELOPER</h2>
                        <p className=' text-white mt-6 leading-loose text-lg'>I'm an Engineer Specialist in WEB DEVELOPMENT. Working on Both Frontend and Backend development. Keen interest in problem-solving. I have implemented full-stack technologies in my projects.</p>
                        <button className='button text-white font-medium text-lg border-2 border-yellow-400 rounded-full pl-5 mt-5 flex items-center mx-auto'><a href="https://drive.google.com/file/d/11Ybs2FGI18odplHrY_8NJeXxHRDfwXp2/view?usp=sharing" download="Md-Kashem-Resume.pdf" target={'_blank'}>Download Resume</a>
                            <FontAwesomeIcon icon={faDownload} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;