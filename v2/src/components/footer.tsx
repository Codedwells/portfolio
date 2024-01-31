import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

type ProjectsProps = {
	className?: string
}

export default function Footer({ className }: ProjectsProps) {
	return (
		<footer className={cn(className)}>
			<h1>Contact</h1>

			<div className='mt-4 space-y-2'>
				<Social
					title='Twitter'
					username='@codedwells'
					link='https://travellic.com'
				/>
				<Social
					title='Twitter'
					username='@codedwells'
					link='https://travellic.com'
				/>
				<Social
					title='Twitter'
					username='@codedwells'
					link='https://travellic.com'
				/>
			</div>
		</footer>
	)
}

type CardProps = {
	title: string
	username: string
	link: string
}

const Social = ({ title, username, link }: CardProps) => {
	return (
		<div className='flex gap-2'>
			<p className='text-sm text-gray-400 md:w-[15%]'>{title}</p>
			<div className='space-y-1 md:w-[85%]'>
				<a href={link} className='flex items-start text-sm'>
					<span>{username}</span>
					<ArrowUpRight size={16} />
				</a>
			</div>
		</div>
	)
}
