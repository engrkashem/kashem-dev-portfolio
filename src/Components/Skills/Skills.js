import React from 'react';
import SideNav from '../SideNav/SideNav';

const Skills = () => {
    const expertise = ['HTML', 'CSS', 'JavaScript', 'React.Js', 'Node.Js', 'Express.Js', 'MongoDB', 'Bootstrap', 'Tailwind CSS', 'C Language', 'C++'];
    const familiar = ['TypeScript', 'React Native', 'Next.Js', 'MySQL']
    return (
        <div className='bg-slate-900 h-screen'>
            <SideNav></SideNav>
            <div className='container p-5 text-white'>
                <h2 className=' text-6xl text-center font-bold py-10'>Skills</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-10 md:p-20'>
                    <div className=''>
                        <h3 className=' text-3xl text-yellow-400 font-semibold py-5'>Expert At-</h3>
                        <ul>
                            {expertise.map(s => <li>{s}</li>)}
                        </ul>
                    </div>
                    <div className=''>
                        <h3 className=' text-3xl text-yellow-400 font-semibold py-5'>Familiar With-</h3>
                        <ul>
                            {familiar.map(s => <li>{s}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;