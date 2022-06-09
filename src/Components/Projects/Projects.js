import React from 'react';
import Project1 from '../Home/Project1';
import Project2 from '../Home/Project2';
import Project3 from '../Home/Project3';
import SideNav from '../SideNav/SideNav';

const Projects = () => {
    return (
        <div className='bg-slate-900 min-h-screen p-5'>
            <SideNav></SideNav>
            <div className='container flex flex-col gap-10'>
                <h2 className=' text-center font-bold text-6xl text-yellow-400 py-1 uppercase'>All Projects</h2>
                <Project1></Project1>
                <Project2></Project2>
                <Project3></Project3>
            </div>
        </div>
    );
};

export default Projects;