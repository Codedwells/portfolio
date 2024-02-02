import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Abel Misiocha',
	description: "Abel Misiocha's personal website"
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
