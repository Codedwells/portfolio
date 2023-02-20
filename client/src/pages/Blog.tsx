import { Link } from 'react-router-dom';
import Article from '../components/Article';

const Blog = () => {
	return (
		<section className='md:mt-[2rem] bg-slate-50 pb-[2rem]'>
			<nav className='text-sm md:text-base font-Raleway pl-4 md:pl-[3.5rem] lg:pl-[14rem] font-[500] text-[#1f2045] bg-white'>
				<Link
					to={'/'}
					className=' text-[#3db9a6] hover:text-[#238879] active:text-[#1f2045] transition-colors duration-500'
				>
					Home
				</Link>
				/<p className='inline'>Articles</p>
			</nav>

			<div className='flex flex-col md:flex-row px-8 md:px-[3rem] lg:px-[8rem] py-2 justify-between mt-[3rem] md:mb-[2rem] lg:mb-[4rem] '>
				<Article
					articleType={'main'}
					slug={''}
					description={
						'MongoDB has been at the forefront of application development for developers...'
					}
					title={'How to Create a Database Using the MongoDB Atlas UI'}
					image={
						'https://cdn.hashnode.com/res/hashnode/image/upload/v1676841605798/3fee2fc7-b9cd-4314-82ae-63fdb2bc4ff3.jpeg'
					}
				/>
				<div className='flex flex-col items-center justify-center space-y-10 mt-6 md:mt-0 mb-[2rem]'>
					<Article
						slug={''}
						articleType={'norm'}
						description={
							'MongoDB has been at the forefront of application development for developers...'
						}
						title={'How to Create a Database Using the MongoDB Atlas UI'}
						image={
							'https://cdn.hashnode.com/res/hashnode/image/upload/v1676841605798/3fee2fc7-b9cd-4314-82ae-63fdb2bc4ff3.jpeg'
						}
					/>
					<Article
						slug={''}
						articleType={'norm'}
						description={
							'MongoDB has been at the forefront of application development for developers...'
						}
						title={'How to Create a Database Using the MongoDB Atlas UI'}
						image={
							'https://cdn.hashnode.com/res/hashnode/image/upload/v1676841605798/3fee2fc7-b9cd-4314-82ae-63fdb2bc4ff3.jpeg'
						}
					/>
				</div>
			</div>
			<hr />
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-[2.5rem] lg:px-[8rem] mt-[3rem]'>
				<Article
					slug={''}
					articleType={'norm'}
					description={
						'MongoDB has been at the forefront of application development for developers...'
					}
					title={'How to Create a Database Using the MongoDB Atlas UI'}
					image={
						'https://cdn.hashnode.com/res/hashnode/image/upload/v1676841605798/3fee2fc7-b9cd-4314-82ae-63fdb2bc4ff3.jpeg'
					}
				/>
				<Article
					slug={''}
					articleType={'norm'}
					description={
						'MongoDB has been at the forefront of application development for developers...'
					}
					title={'How to Create a Database Using the MongoDB Atlas UI'}
					image={
						'https://cdn.hashnode.com/res/hashnode/image/upload/v1676841605798/3fee2fc7-b9cd-4314-82ae-63fdb2bc4ff3.jpeg'
					}
				/>
				<Article
					slug={''}
					articleType={'norm'}
					description={
						'MongoDB has been at the forefront of application development for developers...'
					}
					title={'How to Create a Database Using the MongoDB Atlas UI'}
					image={
						'https://cdn.hashnode.com/res/hashnode/image/upload/v1676841605798/3fee2fc7-b9cd-4314-82ae-63fdb2bc4ff3.jpeg'
					}
				/>
				<Article
					slug={''}
					articleType={'norm'}
					description={
						'MongoDB has been at the forefront of application development for developers...'
					}
					title={'How to Create a Database Using the MongoDB Atlas UI'}
					image={
						'https://cdn.hashnode.com/res/hashnode/image/upload/v1676841605798/3fee2fc7-b9cd-4314-82ae-63fdb2bc4ff3.jpeg'
					}
				/>
			</div>
		</section>
	);
};

export default Blog;
