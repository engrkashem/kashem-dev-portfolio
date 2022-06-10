import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectsContext } from '../../App';

const ProjectsDetails = () => {
    const { projectId } = useParams();
    const projects = useContext(ProjectsContext);
    const selectedProject = projects.filter(p => p?.id == projectId)
    console.log(selectedProject)
    return (
        <div>
            <h2>Project Details, ID: {projectId}</h2>
        </div>
    );
};

export default ProjectsDetails;