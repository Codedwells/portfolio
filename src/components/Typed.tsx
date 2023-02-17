import { TypeAnimation } from 'react-type-animation';

type propType = {
	color: string;
	seque: string;
};

const Typed = ({ color, seque }: propType) => {
	return (
		<TypeAnimation
			sequence={
				seque === 'stack'
					? [
							'JavaScript ...',
							1000,
							'React ...',
							2000,
							'React Nodejs ...',
							3000,
							'TypeScript ...',
							2000,
							() => {},
					  ]
					: [
							'Hello World...',
							3000,
							'Hello World!!! iHola Mundo...',
							4000,
							'Hello Welt...',
							2000,
							'Ciao Mondo...',
							2500,
					  ]
			}
			wrapper='div'
			cursor={true}
			repeat={Infinity}
			style={{
				fontSize:seque === 'world'? '2rem':'1.4rem',
				fontFamily: 'Raleway',
				color,
				fontWeight: 500,
				marginLeft: `${window.innerWidth < 484 ? '1rem' : 0}`,
			}}
		/>
	);
};

export default Typed;
