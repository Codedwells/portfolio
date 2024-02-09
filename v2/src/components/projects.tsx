import { cn } from '@/lib/utils'
import Image from 'next/image'

type ProjectsProps = {
	className?: string
}

export default function Projects({ className }: ProjectsProps) {
	return (
		<section className={cn(className)}>
			<h1>Projects</h1>

			<div className='mt-4 space-y-6'>
				<Card
					timeline='2024'
					image='/travellic.png'
					height={2424}
					width={1547}
					title='Travellic landing page'
					description='A bus booking system that simplifies planned travels. Built with Next.js,TypeScript and TailwindCSS'
					link='https://travellic.vercel.app'
				/>

				<Card
					timeline='2024'
					image='/opengraph-image.webp'
					height={2424}
					width={1547}
					title='v2 of My Personal Website'
					description='My personal website built with Next.js, TypeScript , TailwindCSS and EmailJs'
					link='#'
				/>

				<Card
					timeline='2024'
					image='/moon.png'
					height={2424}
					width={1547}
					title='The MoonHQ landing page'
					description='The MoonHQ company website. Built with Next.js,TypeScript, TailwindCSS and Supabase.'
					link='https://moonhq.org/'
				/>

				<Card
					timeline='2024'
					image='/flow.webp'
					height={2424}
					width={1547}
					title='Flow Node Editor'
					description='A simple node editor. Build with Solid.js and TailwindCSS.'
					link='https://node-flow-editor.netlify.app/'
				/>

				<Card
					timeline='2023'
					image='/freeaikit.png'
					height={2424}
					width={1547}
					title='FreeAIkit Web App'
					description='A platform for free AI tools and resources. Built with Next.js, TypeScript, TailwindCSS, NodeJs, NGINX and MongoDB'
					link='https://freeaikit.com/'
				/>

				<Card
					timeline='2023'
					image='/agrisolve.png'
					height={2424}
					width={1547}
					title='Leaf Web App'
					description='Leaf Web App for AgriSolve. Built with Next.js, TypeScript, TailwindCSS (Hackathon Project)'
					link='https://agri-solve.vercel.app/'
				/>

				<Card
					timeline='2023'
					image='/bookbindr.png'
					height={2424}
					width={1547}
					title='BookBindr'
					description='A book matching platform for readers. Built with Next.js, TypeScript, TailwindCSS, NodeJs'
					link='https://book-bindr.vercel.app/'
				/>

				<Card
					timeline='2023'
					image='/borgen.webp'
					height={2424}
					width={1547}
					title='Borgen'
					description='The custom logger for your Node.js applications'
					link='https://www.npmjs.com/package/borgen'
				/>

				<Card
					timeline='2023'
					image='/abeldev.png'
					height={2424}
					width={1547}
					title='v1 of My Personal Website'
					description='My personal website built with React.js and TailwindCSS'
					link='https://abeldev.site/'
				/>

				<Card
					timeline='2022'
					image='/jokes.png'
					height={2424}
					width={1547}
					title='Jokes Outright'
					description='A humor website for jokes and memes. Built with React.js'
					link='https://jokesoutright.netlify.app/'
				/>

				<Card
					timeline='2021'
					image='/v0_porfolio.webp'
					height={2424}
					width={1547}
					title='v0 of My Personal Website'
					description='My personal website built with HTML, CSS and JavaScript'
					link='https://codedwells.github.io/'
				/>
			</div>
		</section>
	)
}

type CardProps = {
	timeline: string
	title: string
	image: string
	link: string
	width: number
	height: number
	description: string
}

const Card = ({
	image,
	width,
	height,
	timeline,
	link,
	title,
	description
}: CardProps) => {
	return (
		<div className='flex flex-col-reverse gap-2 md:flex-row'>
			<p className='text-sm text-gray-400 md:w-[15%]'>{timeline}</p>
			<div className='space-y-1 md:w-[85%]'>
				<a
					href={link}
					target='_blank'
					className='underline-offset-2 hover:underline'
				>
					{title}
				</a>

				<p className='text-sm text-gray-400'>{description}</p>

				<div className='pt-2'>
					<Image
						src={image}
						width={width}
						height={height}
						alt={`${title} screenshot`}
						className='rounded-md shadow-md md:w-[350px] lg:w-[200px]'
					/>
				</div>
			</div>
		</div>
	)
}
