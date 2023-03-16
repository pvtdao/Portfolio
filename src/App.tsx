import { motion } from 'framer-motion'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { BrowserView } from 'react-device-detect'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import Intro from './components/Intro/Intro'
import { useMousePosition } from './hooks/useMousePosition'
import { getVariants } from './utils/constant'

const ProjectComponent = React.lazy(
	() => import('./components/Project/Project')
)

// TODO: load image to slow (fix it)

function App() {
	const [hasIntro, setHasIntro] = useState<boolean>(true)
	const introRef = useRef<HTMLDivElement>(null)

	const [cursorAnimate, setCursorAnimate] = useState('default')
	const [cursorText, setCursorText] = useState({
		text: '',
		fontSize: '1.6rem'
	})

	const { mousePosition } = useMousePosition()
	const variants = getVariants(mousePosition)

	useEffect(() => {
		let timerId: undefined | ReturnType<typeof setTimeout> = undefined
		if (!hasIntro)
			timerId = setTimeout(() => {
				if (introRef) introRef.current!.style.display = 'none'
			}, 2000)

		return () => {
			clearTimeout(timerId)
		}
	}, [hasIntro])

	function changeCursorAnimate(type: string) {
		setCursorAnimate(type)
	}

	function changeCursorText(text: string, fontSize = '1.6rem') {
		setCursorText({
			text,
			fontSize
		})
	}

	function leave() {
		setCursorText({
			text: '',
			fontSize: '1.6rem'
		})
		setCursorAnimate('default')
	}

	return (
		<React.Fragment>
			<div
				className='fixed 
					z-[999]
					bottom-[10px] bg-sky-500  h-[30px] w-[70px] rounded border border-black/[.3] left-[5px]'
			>
				<div className='h-full text-3xl w-full text-sm text-white font-bold flex items-center justify-center  after:absolute after:content-["sm"] md:after:content-["md"] lg:after:content-["lg"] xl:after:content-["xl"] 2xl:after:content-["2xl"] '></div>
			</div>
			<Intro introRef={introRef} setHasIntro={setHasIntro} />
			<div
				className={`wrapper bg-white min-h-screen relative ${
					hasIntro ? 'hidden' : 'block'
				}`}
			>
				<Header
					changeCursorAnimate={changeCursorAnimate}
					leave={leave}
				/>
				<Routes>
					<Route
						path='/'
						element={
							<HomePage
								changeCursorAnimate={changeCursorAnimate}
								leave={leave}
							/>
						}
					/>
					<Route
						path='/projects'
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<ProjectComponent
									changeCursorAnimate={changeCursorAnimate}
									leave={leave}
									changeCursorText={changeCursorText}
								/>
							</Suspense>
						}
					/>
					<Route
						path='/contact'
						element={
							<Contact
								changeCursorAnimate={changeCursorAnimate}
								leave={leave}
								changeCursorText={changeCursorText}
							></Contact>
						}
					/>
				</Routes>

				<BrowserView>
					<motion.div
						style={{
							backgroundColor: 'black',
							zIndex: 999
						}}
						variants={variants}
						animate={cursorAnimate}
						className='cursor-homepage flex items-center justify-center'
					>
						<span
							className={`font-semibold`}
							style={{
								fontFamily: 'gilroylight',
								color: 'white',
								fontSize: cursorText.fontSize
							}}
						>
							{cursorText.text}
						</span>
					</motion.div>
				</BrowserView>
			</div>
		</React.Fragment>
	)
}

export default App
