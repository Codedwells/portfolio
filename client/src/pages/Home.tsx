import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Typed from '../components/Typed';
import Project from '../components/Project';

import heroImage from '../assets/hero.jpeg';
import hashnode from '../assets/hashnode-icon-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import github from '../assets/logo-github-svgrepo-com.svg';
import twitter from '../assets/twitter-3-logo-svgrepo-com.svg';
import js from '../assets/javascript.png';
import ts from '../assets/typescript.png';
import mongo from '../assets/mongodb.png';
import express from '../assets/express.png';
import react from '../assets/react.png';
import node from '../assets/nodejs.png';
import redux from '../assets/redux.png';
import tailwind from '../assets/tailwind.png';
import postman from '../assets/postman.png';
import figma from '../assets/figma.png';
import github2 from '../assets/github.png';

const Home = () => {
	const location = useLocation();
	const [show, setShow] = useState<boolean>(true);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const resumeRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (location.state?.show) {
			location.state.show = '';
		}
	}, [show]);

	useEffect(() => {
		if (location?.state?.show.includes('resume')) {
			setShow(!show);
			resumeRef.current?.scrollIntoView();
		}

		if (location?.state?.show.includes('contact')) {
			setShow(!show);
			contactRef.current?.scrollIntoView();
		}
	}, [location?.state]);

	const setForm = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		let target = e.target;

		if (target.name === 'name') {
			setFormData({ ...formData, name: target.value });
		} else if (target.name === 'email') {
			setFormData({ ...formData, email: target.value });
		} else if (target.name === 'subject') {
			setFormData({ ...formData, subject: target.value });
		} else {
			setFormData({ ...formData, message: target.value });
		}
	};

	const notify = (type: string, message: string) => {
		if (type === 'success') {
			toast.success(message, {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			return;
		}
		toast.error(message, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	const sendMessage = async (
		e: React.MouseEvent<HTMLButtonElement>
	): Promise<void> => {
		e.preventDefault();

		var emailRegex = /^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

		const { email, message, name, subject } = formData;

		if (!email || !emailRegex.test(email)) {
			notify('error', 'Email cannot be empty and has to be valid!!');
		} else if (!name) {
			notify('error', 'Name cannot be empty!!');
		} else if (!subject) {
			notify('error', 'Subject cannot be empty!!');
		} else if (!message) {
			notify('error', 'Message cannot be empty!!');
		} else {
			const options: RequestInit = {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Access-Control-Allow-Origin': `http://localhost:5000`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					message,
					name,
					subject,
				}),
			};

			fetch('http://localhost:5000/api/v1/messages', options);

			setFormData({ name: '', email: '', subject: '', message: '' });
		}

		notify(
			'success',
			'I have received your message. I will get back to you as soon as I see it.'
		);
	};

	return (
		<>
			<ToastContainer />

			<section className='flex items-center justify-center flex-col-reverse lg:flex-row  md:space-x-12'>
				<div className='flex flex-col text-[#1f2045] mt-8 md:px-12 md:mt-20 lg:mt-28 lg:pl-0 md:text-center lg:text-left'>
					<p className='font-[700] max-w-[400px] px-4 md:px-0 text-left text-[3rem] md:text-center lg:text-left  md:text-[4rem] md:max-w-[800px] lg:max-w-[500px] whitespace-normal leading-[4rem]'>
						Hello there, thanks for{' '}
						<span className='text-[#0188f7]'>visiting</span> 👋.&nbsp; I'm Abel.
					</p>
					<p className='mt-6 px-4 md:px-0 text-[1.5em] font-[500] md:ml-0  font-Raleway whitespace-normal'>
						I'm a developer. I solve problems using code.
					</p>
					<Typed color={'black'} seque={'stack'} />
					<div className='flex flex-wrap gap-4 mt-4 pl-4 lg:pr-0 md:pl-0 md:justify-center lg:justify-start'>
						<a
							className='border-2 p-2 md:p-3 rounded-full hover:border-slate-300 active:border-slate-500'
							href='https://github.com/Codedwells'
						>
							<img
								className='w-8 hover:opacity-80 md:w-10'
								src={github}
								alt='Github icon'
							/>
						</a>
						<a
							className='border-2 p-2 md:p-3 rounded-full hover:border-slate-300 active:border-slate-500'
							href='https://twitter.com/misiocha_abel'
						>
							<img
								className='w-8 hover:opacity-80 md:w-10 '
								src={twitter}
								alt='Twitter icon'
							/>
						</a>
						<a
							className='border-2 p-2 md:p-[8px] rounded-full hover:border-slate-300 active:border-slate-500'
							href='https://linkedin.com/in/devabel'
						>
							<img
								className='w-8 hover:opacity-80 md:w-12'
								src={linkedin}
								alt='LinkedIn icon'
							/>
						</a>
						<a
							className='border-2 p-2 md:p-3 rounded-full hover:border-slate-300 active:border-slate-500'
							href='https://developerup.hashnode.dev/'
						>
							<img
								className='w-8 hover:opacity-80 md:w-10'
								src={hashnode}
								alt='Hashnode icon'
							/>
						</a>
					</div>
				</div>

				<div className='relative hidden md:block md:w-[20rem] md:h-[20rem] lg:w-[25rem] mt-12 lg:h-[25rem] rounded-full overflow-hidden'>
					<img
						className='absolute inset-0 w-full h-full object-cover'
						src={heroImage}
						alt='hero image'
					/>
				</div>
			</section>

			<div className='overflow-x-hidden'>
				<article className='relative w-full mt-20 mb-14 md:mb-[7rem] md:mt-16  py-10 pb-[4rem] lg:mt-[9.6rem] md:px-14 lg:px-[17rem] md:text-center before:block before:absolute before:-inset-2 md:before:-inset-8 before:skew-y-[4deg] before:bg-gradient-to-r before:from-[#1E1F44] before:to-[#3D41DA]'>
					<div className='relative'>
						<h2 className='text-[2.4rem] px-6  text-white font-[700] md:text-[3rem] md:text-center'>
							My story
						</h2>
						<p className='text-left mt-2 px-[1.4rem] md:text-center font-Poppins font-[300] md:text-[1.2em] text-white md:px-14 '>
							Abel is a Full-Stack Engineer with a strong passion for building
							dynamic and engaging user interfaces that are both accessible and
							inclusive. He has experience in TypeScript, Node.js, React, and
							Tailwind, and keeps himself updated with the latest industry
							trends while experimenting with new technologies.
						</p>
						<p className='text-left mt-2 px-[1.4rem] md:text-center font-Poppins font-[300] md:text-[1.2em] text-white md:px-14 '>
							In his free time, Abel enjoys exploring new places, trying out new
							foods, and staying physically active through activities like
							hiking and cycling.
						</p>
					</div>

					<div className='hidden md:flex items-center justify-center absolute h-[9rem] -bottom-[6rem] left-0 bg-gradient-to-r from-[#1E1F44] to-[#3D41DA] w-full'>
						<Typed color={'white'} seque={'world'} />
					</div>
				</article>
			</div>

			<section className='md:mt-[10rem]  '>
				<div className='md:mx-12 lg:mx-[20rem]'>
					<h2 className='text-[#1f2045] pl-4 md:pl-0 text-[2.4rem] font-[700] md:text-[3rem] md:text-center'>
						My tools
					</h2>

					<div className='grid gap-4 grid-cols-3 place-items-center  md:grid-cols-4  p-4 mt-8'>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={js} alt='javascript' />
							JavaScript
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={ts} alt='javascript' />
							TypeScript
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={mongo} alt='javascript' />
							MongoDB
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={express} alt='javascript' />
							expressJS
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={react} alt='javascript' />
							ReactJS
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={node} alt='javascript' />
							NodeJS
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={redux} alt='javascript' />
							Redux
						</div>
						<div
							ref={resumeRef}
							className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'
						>
							<img className='w-[4rem]' src={tailwind} alt='javascript' />
							Tailwind
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={postman} alt='javascript' />
							Postman
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={figma} alt='javascript' />
							Figma
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={github2} alt='javascript' />
							Github
						</div>
						<div className='flex flex-col p-1  items-center border-2 rounded-md w-[100px]'>
							<img className='w-[4rem]' src={js} alt='javascript' />
							JavaScript
						</div>
					</div>
					<p className='mt-[3rem] font-Raleway font-[500] text-2xl text-center'>
						Download resume{' '}
						<a
							className='cursor-pointer text-[#4f99ea] hover:text-[#2b7cd3] active:text-[#4f99ea]'
							href=''
						>
							here.
						</a>
					</p>
				</div>

				<h2 className='text-[2.4rem] mt-[6rem] px-6 text-[#1f2045] font-[700] md:text-[3rem] md:text-center'>
					Projects
				</h2>
				<p className='px-[1.5rem] md:text-center font-[500] text-2xl mt-4 text-[#1f2045] font-Raleway'>
					Here are some of the projects I've worked on.
				</p>

				<article className='relative -mt-[3rem]'>
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
					<div className='relative py-28 px-2 w-screen projects'>
						<Project
							title='BoostCTR'
							techStack={`TypeScript+Tailwind+NodeJs+Express+MongoDB+Nginx`}
							liveLink='http://boostctr.io'
							shortDesc='This is a project I completed for H-educate is a database application built using TypeScript, Tailwind, Node.js, MongoDB, Express, and Nginx. This application is designed to provide users with a database of email subject lines that they can use in their marketing campaigns. The application uses JWT cookies for authentication, which ensures that only authorized users can access the database.'
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
				</article>
			</section>

			<section
				ref={contactRef}
				className='flex flex-col lg:flex-row md:justify-center -mt-[4rem] lg:space-x-4 md:p-6'
			>
				<div className=' flex flex-col items-center lg:w-[40%] p-1'>
					<p className='font-[700] w-full px-3 text-4xl md:text-center lg:text-left lg:text-5xl text-[#1f2045]'>
						Contact me
					</p>
					<p className='mt-[1.2rem] px-4 md:px-0 md:text-center lg:text-left lg:font-[500] md:text-xl text-[#1f2045] md:max-w-[42rem] lg:max-w-[36rem]'>
						Hello there! Have a question, comment, or just want to say hello? I
						would love to hear from you. Please fill out the form below and drop
						me a line, and I'll get back to you as soon as possible.
					</p>
				</div>

				<div className='mt-6 px-8 mb-[3rem]'>
					<form action='' className='flex flex-col space-y-4'>
						<div className='flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4 '>
							<input
								type='text'
								onChange={setForm}
								name='name'
								placeholder='Name'
								value={formData.name}
								required
								className='h-[3rem]  p-2 bg-slate-100 rounded rounded-l-none focus:outline-none border-l-[3px] border-transparent focus:border-l-blue-500 '
							/>
							<input
								onChange={setForm}
								autoComplete='false'
								type='text'
								name='email'
								placeholder='Email'
								value={formData.email}
								required
								className='h-[3rem]  p-2 bg-slate-100 rounded rounded-l-none focus:outline-none border-l-[3px] border-transparent focus:border-l-blue-500 '
							/>
						</div>
						<input
							onChange={setForm}
							type='text'
							name='subject'
							value={formData.subject}
							placeholder='Subject'
							required
							className='h-[3rem]  p-2 bg-slate-100 rounded rounded-l-none focus:outline-none border-l-[3px] border-transparent focus:border-l-blue-500 '
						/>
						<textarea
							onChange={setForm}
							name='message'
							cols={30}
							rows={10}
							value={formData.message}
							placeholder='Your message'
							required
							className='p-2 bg-slate-100 rounded rounded-l-none focus:outline-none border-l-[3px] border-transparent  focus:border-l-blue-500 '
						/>

						<div className='mx-auto '>
							<button
								onClick={sendMessage}
								className='text-white font-Raleway bg-gradient-to-r from-[#4158d0] via-[#c850c0] to-[#ffcc70] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-[600] rounded-lg text-lg  px-5 py-2.5 text-center mr-2 mb-2 w-[16rem]'
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Home;
