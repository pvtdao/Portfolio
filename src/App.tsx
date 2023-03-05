import React, { useState, useEffect, useRef } from 'react'
import HomePage from './components/HomePage/HomePage'
import Intro from './components/Intro/Intro'

function App() {
	const [hasIntro, setHasIntro] = useState<boolean>(true)
	const introRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		let timerId: undefined | ReturnType<typeof setTimeout> = undefined
		if (!hasIntro)
			timerId = setTimeout(() => {
				if (introRef) introRef.current!.style.display = "none"
			}, 2500)

		return () => {
			clearTimeout(timerId)
		}
	}, [hasIntro])

	return (
		<div className='custom-cursor-dark'>
			<div
				className='fixed 
					z-[999]
					bottom-[10px] bg-sky-500  h-[30px] w-[70px] rounded border border-black/[.3] left-[5px]'
			>
				<div className='h-full text-3xl w-full text-sm text-white font-bold flex items-center justify-center  after:absolute after:content-["sm"] md:after:content-["md"] lg:after:content-["lg"] xl:after:content-["xl"] 2xl:after:content-["2xl"] '></div>
			</div>
			<Intro introRef={introRef} setHasIntro={setHasIntro} />
			<div className={`wrapper min-h-[1000px] relative py-10 ${hasIntro ? 'hidden' : 'block'}`}>
				<HomePage />
			</div>
		</div>
	)
}

export default App
