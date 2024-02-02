import { cn } from '@/lib/utils'
import {
	ArrowUpRight,
	Github,
	Linkedin,
	Newspaper,
	Twitter
} from 'lucide-react'

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
					icon={<Twitter size={16} />}
					username='@themoon_dev'
					link='https://twitter.com/themoon_dev'
				/>
				<Social
					title='Linkedin'
					icon={<Linkedin size={16} />}
					username='@devabel'
					link='https://linkedin.com/in/devabel'
				/>
				<Social
					title='Github'
					icon={<Github size={16} />}
					username='@codedwells'
					link='https://github.com/codedwells'
				/>
				<Social
					title='Blog'
					icon={<Newspaper size={16} />}
					username='@abeldev'
					link='https://blog.abeldev.site'
				/>
			</div>
		</footer>
	)
}

type CardProps = {
	title: string
	icon: React.ReactNode
	username: string
	link: string
}

const Social = ({ title, icon, username, link }: CardProps) => {
	return (
		<div className='flex gap-2'>
			<div className='flex items-center gap-1 md:w-[15%]'>
				{icon}
				<p className='text-sm text-gray-400'>{title}</p>
			</div>

			<div className='space-y-1 md:w-[85%]'>
				<a href={link} className='flex items-start text-sm'>
					<span>{username}</span>
					<ArrowUpRight size={16} />
				</a>
			</div>
		</div>
	)
}
