import React, { useRef } from 'react'
import './project.css'

const img1 = require('../../asset/images/72.jpg')
const img2 = require('../../asset/images/82.jpg')
const img3 = require('../../asset/images/74.jpg')
const img4 = require('../../asset/images/75.jpg')
const img5 = require('../../asset/images/76.png')
const img6 = require('../../asset/images/77.jpg')
const img7 = require('../../asset/images/78.jpg')
const img8 = require('../../asset/images/79.jpg')

type ProjectPropsType = {
	changeCursorAnimate: (type: string) => void
	leave: () => void
}

function Project({ changeCursorAnimate, leave }: ProjectPropsType) {
	const trackRef = useRef<HTMLDivElement | null>(null)

	// REFERENCE: https://www.youtube.com/watch?v=PkADl0HubMY (camilemomarle.com)
	function handleOnDown(e: any) {
		if (trackRef.current) {
			trackRef.current!.dataset.mouseDownAt = e.clientX
		}
	}

	function handleOnMove(e: React.MouseEvent<HTMLElement, MouseEvent>) {
		if (trackRef.current!.dataset.mouseDownAt === '0') return

		let mouseDownPosition = (trackRef.current!.dataset.mouseDownAt) || ""

		const mouseDelta = parseFloat(mouseDownPosition.toString()) - e.clientX,
			maxDelta = window.innerWidth / 2

		const percentage = (mouseDelta / maxDelta) * -100,
			nextPercentageUnconstrained =
				parseFloat(
				(trackRef.current!.dataset.prevPercentage || "")
				) + percentage,
			nextPercentage = Math.max(
				Math.min(nextPercentageUnconstrained, 0),
				-100
			)

		trackRef.current!.dataset.percentage = nextPercentageUnconstrained.toString()

		trackRef.current!.animate(
			{
				transform: `translate(${nextPercentage}%, 0%)`
			},
			{ duration: 1200, fill: 'forwards' }
		)

		for (const image of Array.from(
			trackRef.current!.getElementsByClassName('img-item')
		)) {
			image.animate(
				{
					objectPosition: `${105+ nextPercentage}% center`
				},
				{ duration: 1200, fill: 'forwards' }
			)
		}
	}

	function handleOnMouseUp(e: React.MouseEvent<HTMLElement, MouseEvent>) {
		if (trackRef.current) {
			trackRef.current!.dataset.mouseDownAt = '0'
			trackRef.current!.dataset.prevPercentage =
				trackRef.current!.dataset.percentage
		}
	}

	return (
		<section
			onMouseDown={(e) => handleOnDown(e)}
			onMouseMove={(e) => handleOnMove(e)}
			onMouseUp={(e) => handleOnMouseUp(e)}
			className='relative pt-[100px] m-0 select-none overflow-hidden h-screen w-screen'
		>
			<div
				data-mouse-down-at='0'
				data-prev-percentage='0'
				ref={trackRef}
				className='img-track'
			>
				<img draggable={false} className='img-item' src={img1} />
				<img draggable={false} className='img-item' src={img2} />
				<img draggable={false} className='img-item' src={img3} />
				<img draggable={false} className='img-item' src={img4} />
				<img draggable={false} className='img-item' src={img5} />
				<img draggable={false} className='img-item' src={img6} />
				<img draggable={false} className='img-item' src={img7} />
				<img draggable={false} className='img-item' src={img8} />
			</div>
		</section>
	)
}

export default Project
