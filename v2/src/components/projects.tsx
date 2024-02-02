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
					title='Travellic'
					description='A bus booking system that simplifies planned travels'
				/>

				<Card
					timeline='2024'
					image='/travellic.png'
					height={2424}
					width={1547}
					title='Travellic'
					description='A bus booking system that simplifies planned travels'
				/>

				<Card
					timeline='2024'
					image='/travellic.png'
					height={2424}
					width={1547}
					title='Travellic'
					description='A bus booking system that simplifies planned travels'
				/>
			</div>
		</section>
	)
}

type CardProps = {
	timeline: string
	title: string
	image: string
	width: number
	height: number
	description: string
}

const Card = ({
	image,
	width,
	height,
	timeline,
	title,
	description
}: CardProps) => {
	return (
		<div className='flex flex-col-reverse gap-2 md:flex-row'>
			<p className='text-sm text-gray-400 md:w-[15%]'>{timeline}</p>
			<div className='space-y-1 md:w-[85%]'>
				<h3>{title}</h3>

				<p className='text-sm text-gray-400'>{description}</p>

				<div className='pt-2'>
					<Image
						src={image}
						width={width}
						height={height}
						alt={`${title} screenshot`}
						className='md:w-[350px] lg:w-[200px] rounded-md shadow-md'
					/>
				</div>
			</div>
		</div>
	)
}
