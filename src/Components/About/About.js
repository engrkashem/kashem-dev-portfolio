import React from 'react';
import SideNav from '../SideNav/SideNav';
import './About.css';
import myPic from '../../images/myPic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className='about-container bg-slate-900 min-h-screen'>
            <SideNav></SideNav>
            <div className='container text-white p-5'>
                <h2 className=' text-6xl font-semibold text-center py-10'>Biography</h2>
                <div className="hero glass min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={myPic} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h3 className="text-4xl font-bold">Mohammad Abul Kashem</h3>
                            <h4 className="text-2xl font-bold">Khulna, Bangladesh. (1991-Present)</h4>
                            <h4 className="text-xl font-bold">Cell: +8801787317444</h4>
                            <h4 className="text-xl font-bold">Email: kashem3091@gmail.com</h4>

                            <p className="py-3">Belong to a dignified pious Muslim family and memorized the HOLY QURAN at the age of 11 years. He passed SSC and HSC obtaining a 5.00 GPA out of 5 in both. Then he accomplished his BSc in Electrical and Electronic Engineering (EEE) in 2014 from Ahsanullah University of Science and Technology (AUST) securing his place among the top 5% of that year. </p>
                            <p>Mr. Kashem started his professional career as an Editor at Technical Publication where he was exposed to rigorous learning. Next, he switched to a LED light manufacturing plant as an Asst. Manager (Factory). At last, he worked as a Project Manager at Green Tech Engineering and resigned from there for family and personal issues.</p>
                            <p>Mr. Mohammad Abul Kashem has been passionate about programming and coding since his university life. Finally, he found a golden opportunity to transform his career as a developer and started working hard to make his cherished desire come true. He furnished himself by acquiring in-depth knowledge in HTML, CSS and its framework, JavaScript, C, C++,  React.js, Firebase, Node.js, Express.js, and MongoDB. TypeScript, React Native, MySQL, and Next.js is also familiar to him.</p>
                            <p>Mr. Kashem wishes everyone to keep him in everyday prayer.</p>
                            <p className='mt-4'>Nothing except GOD’s grace,</p>
                            <p>Mohammad Abul Kashem</p>
                            <button className="button border-2 border-yellow-400 pl-5 rounded-full flex items-center font-medium text-xl mt-10">Find Skills
                                <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-2xl p-4 bg-yellow-400 rounded-full'></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;