import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { BrowserView } from 'react-device-detect'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import Intro from './components/Intro/Intro'
import { useMousePosition } from './hooks/useMousePosition'
import { getVariants } from './utils/constant'

function App() {
	const [hasIntro, setHasIntro] = useState<boolean>(true)
	const introRef = useRef<HTMLDivElement>(null)
	const [cursorAnimate, setCursorAnimate] = useState('default')
	const { mousePosition } = useMousePosition()
	const variants = getVariants(mousePosition)

	useEffect(() => {
		let timerId: undefined | ReturnType<typeof setTimeout> = undefined
		if (!hasIntro)
			timerId = setTimeout(() => {
				if (introRef) introRef.current!.style.display = 'none'
			}, 2500)

		return () => {
			clearTimeout(timerId)
		}
	}, [hasIntro])

	function changeCursorAnimate(type: string) {
		setCursorAnimate(type)
	}

	function leave() {
		return setCursorAnimate('default')
	}

	return (
		<div className=''>
			<div
				className='fixed 
					z-[999]
					bottom-[10px] bg-sky-500  h-[30px] w-[70px] rounded border border-black/[.3] left-[5px]'
			>
				<div className='h-full text-3xl w-full text-sm text-white font-bold flex items-center justify-center  after:absolute after:content-["sm"] md:after:content-["md"] lg:after:content-["lg"] xl:after:content-["xl"] 2xl:after:content-["2xl"] '></div>
			</div>
			<Intro introRef={introRef} setHasIntro={setHasIntro} />
			<div
				className={`wrapper bg-white min-h-screen min-h-[1000px] relative ${
					hasIntro ? 'hidden' : 'block'
				}`}
			>
				<Header
					changeCursorAnimate={changeCursorAnimate}
					leave={leave}
				/>
				<HomePage
					changeCursorAnimate={changeCursorAnimate}
					leave={leave}
				/>
				<BrowserView>
					<motion.div
						style={{
							backgroundColor: 'black',
							zIndex: 999
						}}
						variants={variants}
						animate={cursorAnimate}
						className='cursor-homepage'
					></motion.div>
				</BrowserView>
			</div>
		</div>
	)
}

export default App
