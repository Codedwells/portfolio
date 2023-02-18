import { useState } from 'react';
import { Link } from 'react-router-dom';
type projectProps = {
	title: string;
	techStack: string;
	liveLink: string | '';
	github: string;
	shortDesc: string;
	longDesc: string;
};

const Projects = ({
	title,
	techStack,
	liveLink,
	github,
	shortDesc,
	longDesc,
}: projectProps) => {
	return (
		<>
			<div className='border p-6 shadow-md rounded-md md:mx-[6rem] mb-[2rem] lg:mx-[24rem] bg-slate-50'>
				<h1 className='font-[500] text-gray-700'>{title}</h1>
				<h3
					className='text-[#4f99ea] font-[600] whitespace-normal'
					style={{ wordWrap: 'break-word' }}
				>
					{techStack}
				</h3>
				<p
					className=' mt-4 max-w-[700px] font-[500] whitespace-normal'
					style={{ wordWrap: 'break-word' }}
				>
					{shortDesc},<Link to={'./projects'} className="text-slate-700 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#4158d0] via-[#c850c0] to-[#ffcc70] "> more...</Link>
				</p>

				<div className='flex items-center mt-4'>
					{liveLink && (
						<a href={liveLink} target={'_blank'}>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 24 24'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g>
									<path fill='none' d='M0 0h24v24H0z'></path>
									<path d='M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z'></path>
								</g>
							</svg>
						</a>
					)}
					{github && (
						<div className='flex -space-x-1 items-center'>
							<a href={github} target={'_blank'}>
								<svg
									className=' w-8'
									stroke='currentColor'
									fill='currentColor'
									strokeWidth='0'
									viewBox='0 0 24 24'
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g>
										<path fill='none' d='M0 0h24v24H0z'></path>
										<path d='M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z'></path>
									</g>
								</svg>
							</a>
							<span className='font-[500]'>code</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Projects;
