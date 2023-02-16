import { TypeAnimation } from 'react-type-animation';

type propType = {
	color: string;
};

const Typed = ({ color }:propType) => {
	return (
		<TypeAnimation
			sequence={[
				'JavaScript ...',
				1000,
				'React ...',
				2000,
				'React Nodejs ...',
				3000,
				'TypeScript ...',
				2000,
				() => {},
			]}
			wrapper='div'
			cursor={true}
			repeat={Infinity}
			style={{
				fontSize: '1.4em',
				fontFamily: 'Raleway',
				color,
				fontWeight: 500,
				marginLeft: `${window.innerWidth < 484 ? '1rem' : 0}`,
			}}
		/>
	);
};

export default Typed;
