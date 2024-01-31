import { cn } from '@/lib/utils'
import { MapPin } from 'lucide-react'

type WorkExperienceProps = {
	className?: string
}

export default function WorkExperience({ className }: WorkExperienceProps) {
	return (
		<section className={cn('text-sm', className)}>
			<h2 className='text-gray-300'>Work Experience</h2>

			<div className='mt-6 flex flex-col gap-8'>
				<Card
					timeline='2021 - Now'
					title='Software Engineer'
					location='Google'
					description='I have been building UIs with React since 2016. My main work is focused on building UIs, creating component libraries, creating design systems, and front-end architecture. I love being part of the design process, working with designers to create stunning screens, and optimizing the user experience'
				/>
				<Card
					timeline='2021 - Now'
					title='Software Engineer'
					location='Google'
					description='I have been building UIs with React since 2016. My main work is focused on building UIs, creating component libraries, creating design systems, and front-end architecture. I love being part of the design process, working with designers to create stunning screens, and optimizing the user experience'
				/>
				<Card
					timeline='2021 - Now'
					title='Software Engineer'
					location='Google'
					description='I have been building UIs with React since 2016. My main work is focused on building UIs, creating component libraries, creating design systems, and front-end architecture. I love being part of the design process, working with designers to create stunning screens, and optimizing the user experience'
				/>
			</div>
		</section>
	)
}

type CardProps = {
	timeline: string
	title: string
	location: string
	description: string
}

const Card = ({ timeline, title, location, description }: CardProps) => {
	return (
		<div className='flex flex-col-reverse md:flex-row gap-2'>
			<p className='md:w-[15%] text-sm text-gray-400'>{timeline}</p>
			<div className='md:w-[85%] space-y-1'>
				<h3>{title}</h3>
				<p className='flex items-center gap-1 text-sm text-gray-400'>
					<MapPin size={16} />
					<span>{location}</span>
				</p>
				<p className='text-sm text-gray-400'>{description}</p>
			</div>
		</div>
	)
}
