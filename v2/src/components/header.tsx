import Image from 'next/image'

export default function Header() {
	return (
		<section className='flex gap-2'>
			<Image
				src='/profile_pic.png'
				alt="Abel Misiocha's headshot pic"
				width={600}
				height={600}
				className='h-24 w-24 rounded-full'
			/>

			<div className='flex flex-col justify-center'>
				<p className='text-lg tracking-tight'>Abel Misiocha</p>
				<p className='text-lg'>Software Engineer</p>
				<a href='https://github.com/codedwells' className='text-sm rounded-xl'>
					Github
				</a>
			</div>
		</section>
	)
}
