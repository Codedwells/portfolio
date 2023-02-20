import { Link } from 'react-router-dom';

const Blog = () => {
	return (
		<>
			<section className='md:mt-[2rem]'>
				<nav className='text-sm md:text-base font-Raleway pl-4 md:pl-[3.5rem] lg:pl-[14rem] font-[500] text-[#1f2045]'>
					<Link
						to={'/'}
						className=' text-[#3db9a6] hover:text-[#238879] active:text-[#1f2045] transition-colors duration-500'
					>
						Home
					</Link>
					/<p className='inline'>Articles</p>
				</nav>
				<article></article>
			</section>
		</>
	);
};

export default Blog;
