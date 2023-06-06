/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	theme: {
		extend: {
			fontFamily: {
				Raleway: ['Raleway', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
				Nunito: ['Nunito', 'sans-serif'],
				Marker:['Permanent Marker','cursive'],
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
