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
					timeline='Nov 2023 - Now'
					title='Fullstack Engineer'
					location='The MoonHQ'
					description={[
						'Designed and developed databases and interactive user interfaces',
						'Developed and maintained core product services by using TypeScript',
						'Built and documented new features and APIs and support fellow engineers with API integrations'
					]}
				/>
				<Card
					timeline='Nov 2022 - Oct 2023'
					title='FullStack Engineer'
					location='H-educate'
					description={[
						'Collaborated with the team using agile methodologies to achieve project goals and track progress',
						' Redesigned and implemented better Sign up flow on freeAIkit platform, improving user engagement and retention',
						'Utilized technical skills to design and develop databases and create interactive user interfaces'
					]}
				/>
				<Card
					timeline='Nov 2021 - Feb 2021'
					title='Software Engineer Intern'
					location='Joseck Consultancy'
					description={[
						'Analyzed problems and worked with a team to develop solutions',
						'Explored new technologies and approaches used to steamline processes',
						'Collaborated with senior management on new initiatives to build self confidence'
					]}
				/>
			</div>
		</section>
	)
}

type CardProps = {
	timeline: string
	title: string
	location: string
	description: string[]
}

const Card = ({ timeline, title, location, description }: CardProps) => {
	return (
		<div className='flex flex-col-reverse gap-2 md:flex-row'>
			<p className='text-xs text-gray-400 md:w-[22%]'>{timeline}</p>
			<div className='space-y-1 md:w-[78%]'>
				<h3>{title}</h3>
				<p className='flex items-center gap-1 text-sm text-gray-400'>
					<MapPin size={16} />
					<span>{location}</span>
				</p>
                <ul className='md:list-disc'>
				{description.map((desc, i) => {
					return (
						<li key={i} className='text-sm text-gray-400'>
							{desc}
						</li>
					)
				})}
                </ul>
			</div>
		</div>
	)
}
