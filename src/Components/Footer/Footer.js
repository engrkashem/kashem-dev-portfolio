import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white p-10">
            <p className=' text-center mb-3'>Copyright &copy; Mohammad Abul Kashem</p>
            <hr />
            <div className="flex flex-wrap justify-center mt-3 text-yellow-400">
                <span className="mr-3">Quick Navigate:</span>
                <Link className="mr-3 " to={'/'}>Home</Link>
                <Link className="mr-3" to={'/about'}>About</Link>
                <Link className="mr-3" to={'/skills'} >Skills</Link>
                <Link className="mr-3" to={'/projects'} >Projects</Link>
                <Link className="mr-3" to={'/blogs'} >Blogs</Link>
            </div>
        </footer>
    );
};

export default Footer;