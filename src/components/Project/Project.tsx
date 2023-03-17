import React, { useRef } from 'react'
import './project.css'
import { motion } from 'framer-motion'

const img1 = require('../../asset/images/wordle-2.jpg')
const img2 = require('../../asset/images/pokedex-1.jpg')
const img3 = require('../../asset/images/unify.jpg')
const img4 = require('../../asset/images/75.jpg')
const img5 = require('../../asset/images/76.png')
const img6 = require('../../asset/images/77.jpg')
const img7 = require('../../asset/images/78.jpg')
const img8 = require('../../asset/images/79.jpg')

type ProjectPropsType = {
	changeCursorAnimate: (type: string) => void
	changeCursorText: (text: string, fontSize?: string) => void
	leave: () => void
}

const PROJECTS = [
	{
		src: img2,
		title: 'Pokédex',
		href: '#'
	},
	{
		src: img1,
		title: 'Wordle',
		href: '#'
	},
	{
		src: img3,
		title: 'Unify',
		href: '#'
	},
	{
		src: img4,
		title: 'Wordle',
		href: '#'
	},
	{
		src: img5,
		title: 'Wordle',
		href: '#'
	},
	{
		src: img6,
		title: 'Wordle',
		href: '#'
	},
	{
		src: img7,
		title: 'Wordle',
		href: '#'
	},
	{
		src: img8,
		title: 'Wordle',
		href: '#'
	}
]

function Project({
	changeCursorAnimate,
	leave,
	changeCursorText
}: ProjectPropsType) {
	const trackRef = useRef<HTMLDivElement | null>(null)

	// REFERENCE: https://www.youtube.com/watch?v=PkADl0HubMY (camilemomarle.com)
	function handleOnDown(e: any) {
		if (trackRef.current) {
			trackRef.current!.dataset.mouseDownAt = e.clientX
		}
	}

	function handleOnMove(e: React.MouseEvent<HTMLElement, MouseEvent>) {
		if (trackRef.current!.dataset.mouseDownAt === '0') return

		let mouseDownPosition = trackRef.current!.dataset.mouseDownAt || ''

		const mouseDelta = parseFloat(mouseDownPosition.toString()) - e.clientX,
			maxDelta = window.innerWidth / 2

		const percentage = (mouseDelta / maxDelta) * -100,
			nextPercentageUnconstrained =
				parseFloat(trackRef.current!.dataset.prevPercentage || '') +
				percentage,
			nextPercentage = Math.max(
				Math.min(nextPercentageUnconstrained, 0),
				-100
			)

		trackRef.current!.dataset.percentage =
			nextPercentageUnconstrained.toString()

		trackRef.current!.animate(
			{
				transform: `translate(${nextPercentage}%, 0%)`
			},
			{ duration: 1200, fill: 'forwards' }
		)

		for (const image of Array.from(
			trackRef.current!.getElementsByClassName('project-img')
		)) {
			image.animate(
				{
					objectPosition: `${105 + nextPercentage}% center`
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

	function onImgHover() {
		changeCursorText('View', '2rem')
		changeCursorAnimate('img-project')
	}

	const titleVariants = {
		show: {
			display: 'block'
		},
		hide: {
			display: 'none'
		}
	}

	return (
		<section
			onMouseDown={(e) => handleOnDown(e)}
			onMouseMove={(e) => handleOnMove(e)}
			onMouseUp={(e) => handleOnMouseUp(e)}
			className='project relative pt-[100px] m-0 select-none lg:overflow-hidden h-screen lg:w-screen'
		>
			<div className='container mx-auto flex flex-col gap-40 lg:gap-0 justify-center'>
				<h1
					onMouseEnter={() => changeCursorAnimate('text-lg')}
					onMouseLeave={leave}
					className='hover:cursor-none w-max mx-auto inline-block text-center mt-[7vmin] text-[3rem] md:text-[5rem] font-bold'
				>
					Featured Projects
				</h1>
				<div
					data-mouse-down-at='0'
					data-prev-percentage='0'
					ref={trackRef}
					className='project-track'
				>
					{PROJECTS.map((p, idx) => {
						return (
							<motion.div
								className='project-item cursor-none'
								onMouseEnter={onImgHover}
								onMouseLeave={leave}
								key={idx}
								initial='show'
								whileHover='hide'
							>
								<motion.img
									initial={{ opacity: 0.4 }}
									whileHover={{ opacity: 1 }}
									className='project-img h-full w-full object-cover select-none'
									src={p.src}
									draggable='false'
								/>
								<motion.div
									variants={titleVariants}
									className='project-info absolute top-1/2 left-1/2 p-[1.5vmin] -translate-x-1/2 -translate-y-1/2'
								>
									<p className='font-bold text-shadow text-[3rem] md:text-[3.5vmin] text-center'>
										#{idx + 1}
									</p>
									<p className='font-semibold text-shadow text-[2.5rem] md:text-[3vmin]'>
										{p.title}
									</p>
								</motion.div>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Project
