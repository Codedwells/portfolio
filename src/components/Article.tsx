type Props = {
	articleType: 'main' | 'norm';
	title: string;
	description: string;
	image: string;
	slug: string;
};

const Article = ({ articleType, title, description, image ,slug}: Props) => {
	return (
		<article className='max-w-[50rem]'>
			<img
				src={image}
				alt='article image'
				className={`rounded-lg ${
					articleType === 'main'
						? ' md:w-[350px] lg:w-[800px]'
						: 'md:w-[350px] lg:w-[500px]'
				}`}
			/>
			<h1
				className={`text-[#2c3032] hover:text-[#3c4549] transition-colors duration-300 font-[700] p-1 lg:px-4 ${
					articleType === 'norm'
						? 'lg:max-w-[31.2rem] text-[20px]'
						: 'md:max-w-[24rem] lg:max-w-none text-[20px] md:text-[30px] lg:text-[36px]'
				}`}
			>
				<a href={`https://developerup.hashnode.dev/${slug}`} target='_blank' rel='noopener noreferrer'>
					{title}
				</a>
			</h1>
			<p
				className={`font-Raleway font-[500] p-1 text-[#2c3032] text-sm md:text-base lg:px-4 ${
					articleType === 'norm'
						? 'max-w-[28rem]'
						: 'md:max-w-[85%] lg:max-w-[70%]'
				}`}
			>
				{description}
			</p>
		</article>
	);
};

export default Article;
