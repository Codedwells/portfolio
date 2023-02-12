import heroImage from '../assets/hero.jpeg';
import { useEffect } from 'react';
import Typed from '../components/Typed';

const Home = () => {
	useEffect(() => {});
	return (
		<>
			<section className='flex items-center justify-center flex-col-reverse lg:flex-row  md:space-x-12'>
				<div className='flex flex-col text-[#1f2045] mt-8 md:pl-20 md:mt-20 lg:pl-0'>
					<p className='font-[700] max-w-[400px] px-4 md:px-0 text-left text-[3rem]  md:text-[4rem] md:max-w-[500px] whitespace-normal leading-[4rem]'>
						Hello there, thanks for{' '}
						<span className='text-[#0188f7]'>visiting</span> 👋.&nbsp; I'm Abel.
					</p>
					<p className='mt-6 mx-auto px-4 md:px-0 text-[1.5em] font-[500] font-Raleway whitespace-normal'>
						I'm a developer. I solve problems using code.
					</p>
					<Typed />
				</div>

				<div className='relative hidden md:block md:w-[20rem] md:h-[20rem] lg:w-[25rem] mt-12 lg:h-[25rem] rounded-full overflow-hidden'>
					<img
						className='absolute inset-0 w-full h-full object-cover'
						src={heroImage}
						alt='hero image'
					/>
				</div>
			</section>
		</>
	);
};

export default Home;
