import React from 'react'
import { Link } from 'react-router-dom'

type IntroducePropsType = {
	changeCursorAnimate: (type: string) => void
	leave: () => void
}

function Introduce({ changeCursorAnimate, leave }: IntroducePropsType) {
	function scrollHover(type: string) {
		changeCursorAnimate(type)
	}
	return (
		<section className='introduction container mx-auto min-h-[70vh]'>
			<div className='introduction-content'>
				<p className='content-text'>
					Hi, I’m{' '}
					<span
						onMouseEnter={() => scrollHover('text')}
						onMouseLeave={leave}
						className='font-bold text-[2.2rem] lg:text-[3.7rem]'
					>
						Dao Phan
					</span>
					, a front-end developer looking for interesting projects. I
					consider myself as a confident and hard-working person who
					is willing to take on new challenges. Minimalism is my
					inspiration, that’s why I always try to keep things simple
					in my code.
					<span className='inline-block mt-[1.5rem]'>
						I believe in lifelong learning, a good feedback culture,
						and an open mind. I am also constantly learning and
						developing myself to reach a more advanced level.
					</span>
				</p>
				<div className='flex items-center justify-end lg:justify-end'>
					<Link
						to='/projects'
						onMouseEnter={() => scrollHover('scroll-icon')}
						onMouseLeave={leave}
						className='mt-[4rem] font-semibold text-[1.6rem] md:text-[1.8rem] lg:text-[2.4rem] px-[2rem] py-4 pr-0 border-b border-[rgba(0,0,0,.5)]'
					>
						View my project
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Introduce
