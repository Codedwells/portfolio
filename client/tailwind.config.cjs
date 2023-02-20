/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	theme: {
		extend: {
			fontFamily: {
				Raleway: ['Raleway', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
				Ubuntu: ['Ubuntu', 'sans-serif'],
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
