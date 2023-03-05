import React, { useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import './intro.css'

function Intro({
	setHasIntro,
	introRef
}: {
	setHasIntro: React.Dispatch<React.SetStateAction<boolean>>,
	introRef: React.RefObject<HTMLDivElement>
}) {
	const [slideIntro, setSlideIntro] = useState<boolean>(false)

	function handleNext() {
		setSlideIntro(true)
		setHasIntro(false)
	}

	return (
		<section ref={introRef} className='intro custom-cursor-white'>
			<section
				className={`part-1 part ${slideIntro && 'slide-out-1'}`}
			></section>
			<section
				className={`part part-2 ${slideIntro && 'slide-out-2'} h-full md:h-1/3`}
			>
				{/* Wrapp */}
				<div className='intro__container'>
					{/* button */}
					{!slideIntro && (
						<div className='intro__next' onClick={handleNext}>
							<FaLongArrowAltRight size={'50px'} className='next-icon' />
							<span className='next-text'> Explore </span>
						</div>
					)}
					{/* fly in text */}
					<div className='intro__content'>
						<span className='intro__text intro__text-1'>P</span>
						<span className='intro__text intro__text-2'>v</span>
						<span className='intro__text intro__text-3'>t</span>
						<span className='intro__text intro__text-4'>d</span>
					</div>
				</div>
			</section>
			<section
				className={`part-3 part ${slideIntro && 'slide-out-3'}`}
			></section>
		</section>
	)
}

export default Intro
