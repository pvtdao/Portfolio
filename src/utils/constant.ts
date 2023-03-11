import { Variants } from 'framer-motion'

export function getVariants(mousePosition: { x: number; y: number }) {
	const variants: Variants = {
		default: {
			x: mousePosition.x - 10,
			y: mousePosition.y - 10,
			zIndex: 100
		},
		logo: {
			height: 100,
			width: 100,
			x: mousePosition.x - 50,
			y: mousePosition.y - 50,
			backgroundColor: 'white',
			mixBlendMode: 'difference'
		},
		text: {
			height: 120,
			width: 120,
			x: mousePosition.x - 60,
			y: mousePosition.y - 60,
			backgroundColor: 'white',
			mixBlendMode: 'difference'
		},
		'text-sm': {
			height: 100,
			width: 100,
			x: mousePosition.x - 50,
			y: mousePosition.y - 50,
			backgroundColor: 'white',
			mixBlendMode: 'difference'
		},
		'scroll-icon': {
			height: 70,
			width: 70,
			x: mousePosition.x - 35,
			y: mousePosition.y - 35,
			backgroundColor: 'white',
			mixBlendMode: 'difference',
		}
	}
	return variants
}
