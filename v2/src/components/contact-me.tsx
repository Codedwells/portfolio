'use client'

import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { Loader, MailCheck, Send, XCircle } from 'lucide-react'

type ContactMeProps = {
	className?: string
}

export default function ContactMe({ className }: ContactMeProps) {
	const [isSending, setIsSending] = useState(false)
	const [message, setMessage] = useState({ message: '', email: '' })
	const form = useRef(null)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		setIsSending(true)
		e.preventDefault()

		if (form.current) {
			if (message.message === '' || message.email === '') {
				console.log(form.current)
				toast('Please fill in all fields in the form provided', {
					unstyled: true,
					classNames: {
						toast: 'bg-red-700/50 text-gray-400 leading-3 py-3 px-4 flex items-center gap-2 text-sm rounded-lg border border-red-700'
					},
					icon: <XCircle size={24} />,
					duration: 5000
				})
				return setIsSending(false)
			}

			emailjs
				.sendForm(
					`${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
					'template_ah42zvb',
					form.current,
					{
						publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
					}
				)
				.then(
					() => {
						toast(
							'I just received your message! I will get back to you soon',
							{
								unstyled: true,
								classNames: {
									toast: 'bg-emerald-600/80 text-gray-400 py-3 leading-3 flex items-center gap-4 px-4 text-sm rounded-lg border border-emerald-600'
								},
								icon: <MailCheck size={24} />,
								duration: 5000
							}
						)

						// Reset form
						setMessage({ message: '', email: '' })

						setIsSending(false)
					},
					() => {
						toast(
							'Oops! Something went wrong. Remember you can always reach me on X.',
							{
								unstyled: true,
								classNames: {
									toast: 'bg-red-700/50 text-gray-400 leading-3 py-3 px-4 flex items-center gap-2 text-sm rounded-lg border border-red-700'
								},
								icon: <XCircle size={24} />,
								duration: 5000
							}
						)
						setIsSending(false)
					}
				)
		}
	}

	return (
		<div
			className={cn(
				'relative rounded-2xl bg-gray-800 px-7 py-6',
				className
			)}
		>
			<Pointer className='absolute -top-2.5 left-8 text-gray-800' />

			<p className='text-sm'>
				Hello there! I would love to hear from you.
			</p>

			<form
				ref={form}
				onSubmit={handleSubmit}
				className='mt-3 flex gap-2'
			>
				<div className='flex flex-1 flex-col gap-2 md:flex-row'>
					<input
						type='text'
						name='message'
						placeholder='Leave a message...'
						className='border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md bg-gray-900 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50'
						value={message.message}
						onChange={(e) =>
							setMessage({ ...message, message: e.target.value })
						}
					/>
					<input
						type='email'
						placeholder='Email'
						name='user_email'
						className='border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md bg-gray-900 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50'
						value={message.email}
						onChange={(e) =>
							setMessage({ ...message, email: e.target.value })
						}
					/>
				</div>

				<button
					type='submit'
					className='flex w-fit items-center justify-center gap-1  rounded-md bg-gray-900 px-6 py-1 text-xs leading-3 tracking-tight text-gray-400 hover:opacity-80 md:px-2'
				>
					{isSending ? (
						<Loader size={15} className='mx-2 animate-spin' />
					) : (
						<>
							<Send className='' size={15} />
							<span className='hidden md:inline'>Send</span>
						</>
					)}
				</button>
			</form>
		</div>
	)
}

const Pointer = ({ className }: { className?: string }) => {
	return (
		<svg
			width='26'
			height='12'
			viewBox='0 0 26 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<mask
				id='mask0'
				mask-type='alpha'
				maskUnits='userSpaceOnUse'
				x='0'
				y='0'
				width='26'
				height='10'
			></mask>
			<g mask='url(#mask0)'>
				<g filter='url(#filter0_d)'>
					<path
						d='M11.5858 3.41422C12.3668 2.63317 13.6332 2.63317 14.4142 3.41422L19.6569 8.65685C21.1571 10.1571 23.192 11 25.3137 11H26V12H0V11H0.686293C2.80802 11 4.84286 10.1571 6.34315 8.65685L11.5858 3.41422Z'
						fill='rgb(31 41 55)'
					></path>
					<path
						d='M26.5 11V10.5H26H25.3137C23.3246 10.5 21.4169 9.70982 20.0104 8.3033L14.7678 3.06066C13.7915 2.08435 12.2085 2.08435 11.2322 3.06066L5.98959 8.3033C4.58307 9.70982 2.67542 10.5 0.686293 10.5H0H-0.5V11V12V12.5H0H26H26.5V12V11Z'
						stroke='black'
						strokeOpacity='0.05'
					></path>
				</g>
			</g>
			<path
				d='M11.5858 3.41422C12.3668 2.63317 13.6332 2.63317 14.4142 3.41422L19.6569 8.65685C21.1571 10.1571 23.192 11 25.3137 11H26V12H0V11H0.686293C2.80802 11 4.84286 10.1571 6.34315 8.65685L11.5858 3.41422Z'
				fill='rgb(31 41 55)'
			></path>
			<defs>
				<filter
					id='filter0_d'
					x='-5'
					y='-1.17157'
					width='36'
					height='19.1716'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood
						floodOpacity='0'
						result='BackgroundImageFix'
					></feFlood>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					></feColorMatrix>
					<feOffset dy='1'></feOffset>
					<feGaussianBlur stdDeviation='2'></feGaussianBlur>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'
					></feColorMatrix>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow'
					></feBlend>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow'
						result='shape'
					></feBlend>
				</filter>
			</defs>
		</svg>
	)
}
