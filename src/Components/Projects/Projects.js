import React, { useContext } from 'react';
import { ProjectsContext } from '../../App';
import Project from '../Shared/Project';
import SideNav from '../SideNav/SideNav';
const Projects = () => {
    //load all projects
    const projects = useContext(ProjectsContext);
    return (
        <div className='bg-slate-900 min-h-screen p-5'>
            <SideNav></SideNav>
            <div className='container flex flex-col gap-10'>
                <h2 className='text-center font-bold text-6xl text-yellow-400 py-1 uppercase'>All Projects</h2>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }

            </div>
        </div>
    );
};

export default Projects;