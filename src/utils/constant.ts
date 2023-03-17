import { Variants } from 'framer-motion'

export function getVariants(mousePosition: { x: number; y: number }) {
	const variants: Variants = {
		default: {
			x: mousePosition.x - 10,
			y: mousePosition.y - 10,
			zIndex: 100
		},
		hide: {
			x: mousePosition.x - 10,
			y: mousePosition.y - 10,
			zIndex: 100,
			display: 'none'
		},
		'default-menu': {
			x: mousePosition.x - 10,
			y: mousePosition.y - 10,
			zIndex: 100,
			backgroundColor: 'white'
		},
		logo: {
			height: 100,
			width: 100,
			x: mousePosition.x - 50,
			y: mousePosition.y - 50,
			backgroundColor: 'white',
			mixBlendMode: 'difference'
		},
		'text-lg': {
			height: 150,
			width: 150,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
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
			mixBlendMode: 'difference'
		},
		'img-project': {
			opacity: 1,
			height: 80,
			width: 80,
			x: mousePosition.x - 40,
			y: mousePosition.y - 40,
			backgroundColor: 'black',
			fontSize: '2rem !important'
		}
	}
	return variants
}
