import React from 'react'

type IntroducePropsType = {
	changeCursorAnimate: (type: string) => void
    leave: () => void
}

function Introduce({ changeCursorAnimate, leave }: IntroducePropsType) {
    function scrollHover(type:string) {
        changeCursorAnimate(type)
    }
	return (
		<section className='introduction container mx-auto'>
			<div className='introduction-content'>
				<p className='content-text'>
					Hi, I’m <span onMouseEnter={() => scrollHover("text")} onMouseLeave={leave} className='font-bold text-[2.2rem] md:text-[3.7rem]'>Dao Phan</span>, a newbie front end developer
					driven by passion and curiosity. As a developer, I’m
					listening to people and make complicated things
					understandable. While coding, I try to keep things simple. I
					believe in lifelong learning, a good feedback culture, and
					an open mind
				</p>
				<div className='flex items-center justify-center'>
					<a onMouseEnter={() => scrollHover("scroll-icon")} onMouseLeave={leave} href='#about' className='scroll-icon'></a>
				</div>
			</div>
		</section>
	)
}

export default Introduce
