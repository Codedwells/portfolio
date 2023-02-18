import { useRef, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../index.css';

import icon from '../assets/icon.svg';
import email from '../assets/email-svgrepo-com.svg';

const Navbar = () => {
	const [opened, setOpened] = useState<boolean>(false);

	const hamburger = useRef<HTMLButtonElement>(null);
	const showMenu = (): void => {
		setOpened((prev) => !prev);
		const currentState = hamburger.current!.getAttribute('data-state');

		if (!currentState || currentState === 'closed') {
			hamburger.current!.setAttribute('data-state', 'opened');
			hamburger.current!.setAttribute('aria-expanded', 'true');
		} else {
			hamburger.current!.setAttribute('data-state', 'closed');
			hamburger.current!.setAttribute('aria-expanded', 'false');
		}
	};

	return (
		<>
			<nav className='flex justify-between  md:border-none md:px-8 md:p-4 lg:px-[13rem]'>
				<div className='flex items-center space-x-2 pl-4 pr-1'>
					<Link to={'/'}>
						<img className='w-8 md:12 cursor-pointer' src={icon} alt='logo' />
					</Link>
					<Link to={'/'}>
						<p className='text-[#363853] text-3xl font-bold cursor-pointer'>
							Abel
						</p>
					</Link>
				</div>

				<button
					onClick={showMenu}
					ref={hamburger}
					className='button-three flex items-center justify-center md:hidden'
					aria-controls='primary-navigation'
					aria-expanded='false'
				>
					<svg
						stroke='#363853'
						fill='none'
						className='hamburger'
						viewBox='-10 -10 120 120'
						width='70'
					>
						<path
							className='line'
							strokeWidth='10'
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70'
						></path>
					</svg>
				</button>
				<ul
					className={`absolute ${
						opened ? 'flex' : 'hidden'
					} flex-col border-b border-t  items-center justify-center space-y-4 text-xl top-[70px] left-0 right-0 bottom-[40%] bg-white md:flex md:border-none md:space-y-0 md:text-base md:flex-row md:static md:space-x-8 md:items-center transition-all duration-1000 ease-in-out`}
				>
					<li
						onClick={showMenu}
						id='link'
						className='cursor-pointer text-[#363853] font-[500] active:text-[#8b8ead] transition-all'
					>
						<Link to={'/projects'}>Projects</Link>
					</li>
					<li
						onClick={showMenu}
						id='link'
						className='cursor-pointer text-[#363853] font-[500] active:text-[#8b8ead] transition-all'
					>
						About
					</li>
					<li
						onClick={showMenu}
						id='link'
						className='cursor-pointer text-[#363853] font-[500] active:text-[#8b8ead] transition-all'
					>
						Resume
					</li>
					<li
						onClick={showMenu}
						id='link'
						className='cursor-pointer text-[#363853] font-[500] active:text-[#8b8ead] transition-all'
					>
						<Link to={'/blog'}>Blog</Link>
					</li>
				</ul>
			</nav>

			<Outlet />

			<footer className=' bg-[#f1f5f9] text-center p-3'>
				<div className='flex flex-col md:flex-row mt-2 items-center justify-center text-center md:space-x-6'>
					<div className='flex space-x-2'>
						<img width={'19px'} src={email} alt='email me' />
						<a href='mailto:abel@abeldev.site' className=' hover:text-transparent bg-clip-text bg-gradient-to-r from-[#4158d0] via-[#c850c0] to-[#ffcc70] '>abel@abeldev.site</a>
					</div>
					<p>&copy; 2023 </p>
				</div>
			</footer>
		</>
	);
};

export default Navbar;
