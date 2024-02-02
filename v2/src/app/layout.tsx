import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Abel Misiocha',
	description: "Abel Misiocha's personal website",
	metadataBase: new URL('https://abeldev-porfolio.vercel.app'),
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: '/',
		images: '/opengraph-image.webp'
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	category: 'Personal Website',
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-gray-950`}>
				{children}
				<Toaster />
			</body>
		</html>
	)
}
