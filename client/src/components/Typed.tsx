import { TypeAnimation } from 'react-type-animation';

type propType = {
	color: string;
	seque: string;
	fontSize:string;
	fontFamily:string;
	fontWeight:number
};

const Typed = ({ color, seque,fontSize,fontFamily,fontWeight }: propType) => {
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
				fontSize,
				fontFamily,
				color,
				fontWeight,
				marginLeft: `${window.innerWidth < 484 ? '1rem' : 0}`,
			}}
		/>
	);
};

export default Typed;
