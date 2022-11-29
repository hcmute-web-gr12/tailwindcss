/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['../main/webapp/WEB-INF/**/*.jsp', '../main/webapp/scripts/**/*.js'],
	safelist: [
		{
			pattern: /ring-(brand|alternate|primary|stone-500|red-500|yellow-500)\/60/,
			variants: ['focus']
		},
	],
	theme: {
		extend: {
			ringColor: (theme) => ({
				...theme('colors'),
				DEFAULT: theme('colors.brand.DEFAULT'),
			}),
			borderColor: (theme) => ({
				...theme('colors'),
				DEFAULT: theme('colors.stone.200'),
			}),
			colors: {
				brand: {
					50: '#ff4a4f',
					100: '#fc4045',
					200: '#f2363b',
					300: '#e82c31',
					400: '#de2227',
					500: '#d4181d',
					600: '#ca0e13',
					700: '#c00409',
					800: '#b60000',
					900: '#ac0000',
					DEFAULT: '#d4181d'
				},
				alternate: {
					50: '#4f80ff',
					100: '#4576ff',
					200: '#3b6cf6',
					300: '#3162ec',
					400: '#2758e2',
					500: '#1d4ed8',
					600: '#1344ce',
					700: '#093ac4',
					800: '#0030ba',
					900: '#0026b0',
					DEFAULT: '#1d4ed8'
				},
				primary: {
					50: '#E0FAE0',
					100: '#C6F6C6',
					200: '#8DEC8D',
					300: '#55E355',
					400: '#22CD22',
					500: '#199619',
					600: '#147614',
					700: '#0F5C0F',
					800: '#0A3D0A',
					900: '#051F05',
					DEFAULT: '#199619'
				}
			},
			keyframes: {
				shimmer: {
					from: { backgroundPosition: '200% 0' },
					to: { backgroundPosition: '-200% 0' },
				},
			},
			animation: {
				shimmer: 'shimmer 8s ease-in-out infinite',
			},
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
}
