import heroImage from '../assets/hero.jpeg';
import { useEffect } from 'react';
import Typed from '../components/Typed';

import hashnode from '../assets/hashnode-icon-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import github from '../assets/logo-github-svgrepo-com.svg';
import twitter from '../assets/twitter-3-logo-svgrepo-com.svg';

const Home = () => {
	useEffect(() => {});
	return (
		<>
			<section className='flex items-center justify-center flex-col-reverse lg:flex-row  md:space-x-12'>
				<div className='flex flex-col text-[#1f2045] mt-8 md:px-12 md:mt-20 lg:pl-0 md:text-center lg:text-left'>
					<p className='font-[700] max-w-[400px] px-4 md:px-0 text-left text-[3rem] md:text-center lg:text-left  md:text-[4rem] md:max-w-[800px] lg:max-w-[500px] whitespace-normal leading-[4rem]'>
						Hello there, thanks for{' '}
						<span className='text-[#0188f7]'>visiting</span> 👋.&nbsp; I'm Abel.
					</p>
					<p className='mt-6 px-4 md:px-0 text-[1.5em] font-[500] md:ml-0  font-Raleway whitespace-normal'>
						I'm a developer. I solve problems using code.
					</p>
					<Typed />
					<div className='flex flex-wrap gap-4 mt-4 pl-4 lg:pr-0 md:pl-0 md:justify-center lg:justify-start'>
						<a
							className='border-2 p-2 md:p-3 rounded-full hover:border-slate-300 active:border-slate-500'
							href=''
						>
							<img
								className='w-8 hover:opacity-80 md:w-10'
								src={github}
								alt='Github icon'
							/>
						</a>
						<a
							className='border-2 p-2 md:p-3 rounded-full hover:border-slate-300 active:border-slate-500'
							href=''
						>
							<img
								className='w-8 hover:opacity-80 md:w-10 '
								src={twitter}
								alt='Twitter icon'
							/>
						</a>
						<a
							className='border-2 p-2 md:p-[8px] rounded-full hover:border-slate-300 active:border-slate-500'
							href=''
						>
							<img
								className='w-8 hover:opacity-80 md:w-12'
								src={linkedin}
								alt='LinkedIn icon'
							/>
						</a>
						<a
							className='border-2 p-2 md:p-3 rounded-full hover:border-slate-300 active:border-slate-500'
							href=''
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

			<article className='mt-16 lg:mt-32 md:px-14 lg:px-[17rem] md:text-center'>
				<h2 className='text-[2.4rem] px-6  text-[#1f2045] font-[700] md:text-[3rem] md:text-center'>
					My story
				</h2>
				<p className='text-left mt-2 px-[1.4rem] md:text-center font-Poppins font-[300] md:text-[1.2em] text-[#1e1f44] md:px-14 '>
					Abel is a Full-Stack Engineer with a strong passion for building
					dynamic and engaging user interfaces that are both accessible and
					inclusive. He has experience in TypeScript, Node.js, React, and
					Tailwind, and keeps himself updated with the latest industry trends
					while experimenting with new technologies. In his free time, Abel
					enjoys exploring new places, trying out new foods, and staying
					physically active through activities like hiking and cycling.
				</p>
			</article>
		</>
	);
};

export default Home;
