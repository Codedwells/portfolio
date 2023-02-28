import { useRef, useState } from 'react';
import {
	Outlet,
	Link,
	NavLink,
	useNavigate,
} from 'react-router-dom';
import '../index.css';

import icon from '../assets/icon.svg';
import email from '../assets/email-svgrepo-com.svg';

const Navbar = () => {
	const [opened, setOpened] = useState<boolean>(false);
	const navigate = useNavigate();

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

	const showResume = (): void => {
		showMenu();
		navigate('/', { replace: true, state: { show: `resume${Date.now()}` } });
	};

	const showContact = (): void => {
		showMenu();
		navigate('/', { replace: true, state: { show: `contact${Date.now()}` } });
	};

	return (
		<>
			<nav className='flex justify-between  md:border-none md:px-8 md:p-4 lg:px-[13rem]'>
				<div className='flex items-center space-x-2 pl-4 pr-1'>
					<Link to={'/'}>
						<img className='w-8 md:12 cursor-pointer' src={icon} alt='logo' />
					</Link>
					<Link to={'/'}>
						<p className='text-[#e2e8f0] text-3xl font-bold cursor-pointer'>
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
						stroke='#0a8879'
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
					className={`absolute bg-[#0f172a] ${
						opened ? 'flex' : 'hidden'
					} flex-col border-[#1a3d5b] border-b border-t z-20 items-center justify-center space-y-4 text-xl top-[70px] left-0 right-0 bottom-[40%] md:flex md:border-none md:space-y-0 md:text-base md:flex-row md:static md:space-x-8 md:items-center transition-all duration-1000 ease-in-out`}
				>
					<NavLink
						to={'/projects'}
						onClick={showMenu}
						id='link'
						className={`cursor-pointer font-[500] active:text-[#8b8ead] transition-all`}
						style={({ isActive }) => ({
							color: isActive ? '#3db9a6' : '#e2e8f0',
						})}
					>
						Projects
					</NavLink>

					<li
						onClick={showResume}
						id='link'
						className='cursor-pointer text-[#e2e8f0] font-[500] active:text-[#8b8ead] transition-all'
					>
						Resume
					</li>
					<li
						onClick={showContact}
						id='link'
						className='cursor-pointer text-[#e2e8f0] font-[500] active:text-[#8b8ead] transition-all'
					>
						Contact
					</li>

					<NavLink
						to={'/blog'}
						onClick={showMenu}
						id='link'
						className={`cursor-pointer font-[500] active:text-[#8b8ead] transition-all`}
						style={({ isActive }) => ({
							color: isActive ? '#3db9a6' : '#e2e8f0',
						})}
					>
						Blog
					</NavLink>
				</ul>
			</nav>

			<Outlet />

			<footer className='text-sm font-[700] font-Raleway text-[#e2e8f0] bg-[#1e293b] text-center p-1 md:p-3'>
				<div className='flex flex-col md:flex-row mt-2 items-center justify-center text-center md:space-x-6'>
					<div className='flex space-x-2'>
						<img width={'19px'} src={email} alt='email me' />
						<a
							href='mailto:abel@abeldev.site'
							className=' hover:text-[#1e9688] '
						>
							abel@abeldev.site
						</a>
					</div>
					<p>&copy; 2023 </p>
				</div>
			</footer>
		</>
	);
};

export default Navbar;
