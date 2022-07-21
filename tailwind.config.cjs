/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				morris: ['MORRIS', 'sans-serif'],
				washington: ['WASHINGTON', 'sans-serif']
			},
			colors: {
				'c-green': '#87B393',
				'c-light-green': '#7FCC8F',
				'c-cream': '#F2D1B3',
				'c-light-cream': '#F2E6B5',
				'c-dark-cream': '#BF9278'
			}
		}
	},
	plugins: []
};
