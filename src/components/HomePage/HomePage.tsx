import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMousePosition } from '../../hooks/useMousePosition'
import './homepage.css'
import { motion, Variants } from 'framer-motion'
import Introduce from './Introduce'
import { BrowserView, deviceType } from 'react-device-detect'
console.log('🚀 ~ file: HomePage.tsx:8 ~ deviceType:', deviceType)

type HomePropsType = {
	changeCursorAnimate: (type: string) => void
	leave: () => void
}

function HomePage({ changeCursorAnimate, leave }: HomePropsType) {
	return (
		<section className='homepage relative pt-[100px]'>
			<Introduce
				leave={leave}
				changeCursorAnimate={changeCursorAnimate}
			/>
		</section>
	)
}

export default HomePage
