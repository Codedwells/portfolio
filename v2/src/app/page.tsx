import Header from '@/components/header'
import ContactMe from '@/components/contact-me'
import About from '@/components/about'
import WorkExperience from '@/components/work-experience'

export default function Home() {
	return (
		<main className='mx-auto text-gray-300 flex min-h-screen max-w-xl flex-col px-4 py-12'>
			<Header />
            <ContactMe className='mt-4'/>
            <About className='mt-8'/>
            <WorkExperience className='mt-12'/>
		</main>
	)
}
