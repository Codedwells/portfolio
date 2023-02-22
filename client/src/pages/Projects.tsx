import { Link } from 'react-router-dom';

import Project from '../components/Project';

import project1 from '../assets/project1.png';
import ctrhome from '../assets/projects/boostctr/home.png';
import ctrlogin from '../assets/projects/boostctr/login.png';
import ctrsignup from '../assets/projects/boostctr/signup.png';
import ctrcontact from '../assets/projects/boostctr/contact.png';

const Projects = () => {
	return (
		<section className='md:mt-[2rem]'>
			<nav className='text-sm md:text-base font-Raleway pl-4 md:pl-[3.5rem] lg:pl-[14rem] font-[500] text-[#1f2045] '>
				<Link
					to={'/'}
					className='text-[#3db9a6] hover:text-[#238879] active:text-[#1f2045] transition-colors duration-500'
				>
					Home
				</Link>
				/<p className='inline'>Projects</p>
			</nav>

			<article className='-mt-[5.6rem]'>
				<svg
					className='rotate-[180deg] z-10  relative top-[6.2rem]'
					fill='white'
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					width='100%'
					height='100'
					viewBox='0 20 50 80'
					preserveAspectRatio='none'
				>
					<path d='M0,101 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z'></path>
				</svg>

				<div className='relative py-28 w-screen projects px-4'>
					<Project
						title='BoostCTR'
						techStack={`TypeScript+Tailwind+NodeJs+Express+MongoDB+Nginx`}
						liveLink='http://boostctr.io'
						images={[ctrhome, ctrsignup, ctrlogin, ctrcontact]}
						longDesc={[
							'This is a project I completed for H-educate is a database application built using TypeScript, Tailwind, Node.js, MongoDB, Express, and Nginx. This application is designed to provide users with a database of email subject lines that they can use in their marketing campaigns. The application uses JWT cookies for authentication, which ensures that only authorized users can access the database.',
							'The application is built using a modular architecture, which makes it easy to scale and maintain. The backend is built using Node.js and Express, with MongoDB as the database. Nginx is used as the web server, which helps to improve performance and security',
							'Overall, this project demonstrates my skills in building robust and scalable applications using the latest technologies. It showcases my expertise in TypeScript, Tailwind, Node.js, MongoDB, Express, and Nginx, as well as my ability to implement secure authentication using JWT cookies.',
						]}
					/>
					
				</div>
				<svg
					className='rotate-[360deg]  relative bottom-[6.2rem]'
					fill='white'
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					width='100%'
					height='100'
					viewBox='0 20 50 80'
					preserveAspectRatio='none'
				>
					<path d='M0,103 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z'></path>
				</svg>
				<p className='relative bottom-[3.5rem] text-[#1f2045] font-[700] px-4 text-center text-2xl'>
					More coming soon!!!
				</p>
			</article>
		</section>
	);
};

export default Projects;
