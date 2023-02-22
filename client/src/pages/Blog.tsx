import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

import Article from '../components/Article';
import { useFetch } from '../hooks/useFetch';

const Blog = () => {
	const options: RequestInit = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `https://abeldev.vercel.app`,
			'Content-Type': 'application/json',
			mode: 'no-cors'
		},
	};

	const [data, isLoading] = useFetch(
		'https://abeldev.vercel.app/api/v1/article/all',
		options
	);

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
				{data && (
					<Article
						articleType={'main'}
						slug={data.latest3[0].slug}
						description={data.latest3[0].brief}
						title={data.latest3[0].title}
						image={data.latest3[0].coverImage}
					/>
				)}

				{data && (
					<div className='flex flex-col items-center justify-center space-y-10 mt-6 md:mt-0 mb-[2rem]'>
						<Article
							articleType={'norm'}
							slug={data.latest3[1].slug}
							description={data.latest3[1].brief}
							title={data.latest3[1].title}
							image={data.latest3[1].coverImage}
						/>

						<Article
							articleType={'norm'}
							slug={data.latest3[2].slug}
							description={data.latest3[2].brief}
							title={data.latest3[2].title}
							image={data.latest3[2].coverImage}
						/>
					</div>
				)}
			</div>
			<hr className='hidden md:block' />

			{data && (
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-[2.5rem] lg:px-[8rem] mt-[3rem]'>
					{data.articles.map((curr) => {
						return (
							<Article
								key={uuid()}
								articleType={'norm'}
								slug={curr.slug}
								description={curr.brief}
								title={curr.title}
								image={curr.coverImage}
							/>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default Blog;
