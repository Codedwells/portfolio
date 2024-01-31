import { cn } from '@/lib/utils'

type AboutProps = {
	className?: string
}

export default function About({ className }: AboutProps) {
	return (
		<section className={cn('text-sm text-gray-400', className)}>
			<h1 className='text-sm text-gray-300'>About</h1>

			<p className='leading-4 mt-2'>
				Hey there! I'm Abel, a passionate software engineeri
				specializing on web development.
			</p>

			<p className='leading-4 mt-3'>
				Specialties: JavaScript, TypeScript, React, Next.js, Nodejs,
				TailwindCSS
			</p>

			<p className='leading-4 mt-3'>
				Other interests: Rust, Go, WebAssembly, HTML, Games on the web
			</p>
		</section>
	)
}
