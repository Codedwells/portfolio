import { Link } from 'react-router-dom';
import uuidv4 from 'react-uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

type projectProps = {
	title: string;
	techStack: string;
	liveLink?: string;
	github?: string;
	shortDesc?: string;
	longDesc?: string[];
	images?: string[];
	scale?: number;
};

const Project = ({
	title,
	techStack,
	liveLink,
	github,
	shortDesc,
	longDesc,
	images,
}: projectProps) => {
	return (
		<section
			className={`border border-[#0f172a] shadow-md ${
				longDesc ? 'rounded-b-md' : 'rounded-md'
			} md:mx-[6rem] lg:mx-[24rem] bg-[#0f172a] ${
				longDesc ? 'mb-[3rem] md:mb-[4rem] lg:mb-[8rem]' : 'mb-[2rem]'
			}`}
		>
			<Swiper
				className='mySwiper overflow-hidden'
				slidesPerView={'auto'}
				centeredSlides={true}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
			>
				{longDesc &&
					images!.map((curr) => {
						return (
							<SwiperSlide key={uuidv4()}>
								<img
									src={curr}
									alt='project image'
									className='transition-all duration-500  bg-cover hover:scale-150'
								/>
							</SwiperSlide>
						);
					})}
			</Swiper>

			<article className='p-6'>
				<h1 className='font-[600] text-xl text-[#e2e8f0]'>{title}</h1>
				<h3
					className='text-[#14b7a5] mt-3 font-[600] whitespace-normal'
					style={{ wordWrap: 'break-word' }}
				>
					{techStack}
				</h3>
				<div
					className=' mt-2 max-w-[700px] font-[500] whitespace-normal'
					style={{ wordWrap: 'break-word' }}
				>
					{shortDesc ? (
						<p className='text-[#e2e8f0]'>{shortDesc + ','}</p>
					) : (
						longDesc?.map((curr) => {
							return (
								<p className='mt-2 text-[#e2e8f0]' key={uuidv4()}>
									{curr}
								</p>
							);
						})
					)}

					{shortDesc && (
						<Link
							to={'./projects'}
							className='text-[#14b7a5] hover:text-transparent bg-clip-text bg-gradient-to-r from-[#c850c0] to-[#ffcc70] '
						>
							{' '}
							more...
						</Link>
					)}
				</div>

				<div className='flex items-center mt-4'>
					{liveLink && (
						<a href={liveLink} target={'_blank'} className="text-[#e2e8f0] hover:text-emerald-600 transition-all">
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
						<a
							href={github}
							target={'_blank'}
							className='flex -space-x-1 items-center text-[#e2e8f0] hover:text-emerald-600 transition-all'
						>
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
							<span className='font-[500]'>code</span>
						</a>
					)}
				</div>
			</article>
		</section>
	);
};

export default Project;
