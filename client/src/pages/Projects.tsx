import { Link } from 'react-router-dom';

import Project from '../components/Project';

import ctrhome from '../assets/projects/boostctr/home.png';
import ctrlogin from '../assets/projects/boostctr/login.png';
import ctrsignup from '../assets/projects/boostctr/signup.png';
import ctrcontact from '../assets/projects/boostctr/contact.png';

import borgenWeb from '../assets/projects/borgen/website.png'
import borgenNpm from '../assets/projects/borgen/npm.png'

const Projects = () => {
	return (
		<section className='md:mt-[2rem]'>
			<nav className='text-sm md:text-base font-Raleway pl-4 md:pl-[3.5rem] lg:pl-[14rem] font-[500] text-[#92a1b6] '>
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
					fill='#0f172a'
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
							'Overall, this project demonstrates my skills in building robust and scalable applications using the latest technologies. It showcases my skills in TypeScript, Tailwind, Node.js, MongoDB, Express, and Nginx, as well as my ability to implement secure authentication using JWT cookies.',
						]}
					/>

					<Project
						title='Borgen'
						techStack={`TypeScript+NodeJs+Express+Chalk`}
						liveLink='https://codedwells.github.io/Borgen'
						github='https://github.com/Codedwells/Borgen'
						images={[borgenNpm,borgenWeb]}
						longDesc={[
							"Borgen is a customizable HTTP logger middleware that allows developers to easily track HTTP requests and responses in their Node.js applications. With its customizable color scheme, Borgen makes it easy to identify different types of requests and responses, providing invaluable insight into how your application is performing. Whether you're building a small web app or a large-scale enterprise application, Borgen can help you stay on top of your HTTP traffic.",
							"One of the key features of Borgen is its flexibility. Built using TypeScript, Borgen is highly customizable, allowing you to tailor it to your specific needs. With its simple, intuitive API, you can easily configure Borgen to log exactly the information you need, without any unnecessary clutter.",
							"Another great feature of Borgen is its integration with the popular Express framework. With Borgen, you can quickly and easily add HTTP logging to your Express applications, making it easy to keep track of requests and responses. And with its dependency on the widely-used Chalk library, your logs will be colorful and easy to read, helping you to quickly identify issues and troubleshoot problems.",
							"Whether you're a seasoned developer or just starting out, Borgen is a powerful tool that can help you take your Node.js applications to the next level. So why not give it a try today and see for yourself what a difference it can make?"
						]}
					/>
				</div>
				<svg
					className='rotate-[360deg]  relative bottom-[6.2rem]'
					fill='#0f172a'
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					width='100%'
					height='100'
					viewBox='0 20 50 80'
					preserveAspectRatio='none'
				>
					<path d='M0,103 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z'></path>
				</svg>
				<p className='relative bottom-[3.5rem] text-[#e2e8f0] font-[700] px-4 text-center text-2xl'>
					More coming soon!!!
				</p>
			</article>
		</section>
	);
};

export default Projects;
