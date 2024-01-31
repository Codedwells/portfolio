import Header from '@/components/header'
import ContactMe from '@/components/contact-me'
import About from '@/components/about'
import WorkExperience from '@/components/work-experience'
import Projects from '@/components/projects'
import Footer from '@/components/footer'

export default function Home() {
	return (
		<main className='mx-auto flex min-h-screen max-w-xl flex-col px-6 py-12 text-gray-300'>
			<Header />
			<ContactMe className='mt-5' />
			<About className='mt-9' />
			<WorkExperience className='mt-12' />
			<Projects className='mt-16' />
			<Footer className='mt-16' />
		</main>
	)
}
