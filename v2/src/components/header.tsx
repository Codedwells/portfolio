import Image from 'next/image'

export default function Header() {
	return (
		<section className='flex gap-3'>
			<Image
				src='/profile_pic.png'
				alt="Abel Misiocha's headshot pic"
				width={600}
				height={600}
				className='h-24 w-24 rounded-full'
			/>

			<div className='flex flex-col justify-center gap-2'>
				<h1 className='text-lg leading-3 tracking-tight text-gray-300'>
					Abel Misiocha
				</h1>
				<h2 className='text-xs leading-3 text-gray-400'>
					Software Engineer from the moon
				</h2>
				<a
					href='https://github.com/codedwells'
                    target='_blank'
					className='w-fit leading-3 rounded-xl tracking-tight hover:opacity-80 bg-gray-800 px-2 py-1 text-xs text-gray-400'
				>
					Check out my GitHub
				</a>
			</div>
		</section>
	)
}
