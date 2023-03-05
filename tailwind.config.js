/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				blinkText: {
					'0%': {
						'-webkit-text-stroke': '2px #fff',
						'-webkit-text-fill-color': 'transparent'
					},
					'70%': {
						'-webkit-text-stroke': '2px #000',
						'-webkit-text-fill-color': '#fff'
					},
					'100%': {
						'-webkit-text-stroke': '0.5px #fff',
						'-webkit-text-fill-color': 'transparent'
					}
				},
				slideOut: {
					'0%': {
						opacity: 0,
						'-webkit-text-stroke': '2px #161616',
						'-webkit-text-fill-color': 'transparent'
					},
					'25%': {
						opacity: 0,
						'-webkit-text-stroke': '2px #161616',
						'-webkit-text-fill-color': 'transparent'
					},
					'69%': {
						opacity: 1,
						'-webkit-text-stroke': '2px #161616',
						'-webkit-text-fill-color': 'transparent'
					}
				},
				slideOutX: {
					'0%': {
						width: '100vw'
					},
					'40%': {
						width: '100vw'
					},
					'100%': {
						width: '0%'
					}
				},
				slideOutY: {
					'0%': {
						height: '100vh'
					},
					'40%': {
						height: '100vh'
					},
					'100%': {
						height: '0%'
					}
				}
			},
			animation: {
				blink: 'blinkText .2s linear .5s',
				'slide-out': 'slideOut 2s forwards',
				'slide-out-x': 'slideOutX 2s cubic-bezier(0.97, 0.01, 0.36, 0.99)',
				'slide-out-y': 'slideOutY 2s cubic-bezier(0.97, 0.01, 0.36, 0.99)'
			}
		}
	},
	plugins: []
}
