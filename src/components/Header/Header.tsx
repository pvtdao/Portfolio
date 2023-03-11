import React from 'react'
import { Link } from 'react-router-dom'

const MENU = [
	{
		label: 'Projects',
		href: '/projects'
	},
	{
		label: 'Contact',
		href: '/contact'
	}
]

type HeaderPropsType = {
	changeCursorAnimate: (type: string) => void
	leave: () => void
}
function Header({ changeCursorAnimate, leave }: HeaderPropsType) {
	return (
		<>
			<header className='z-10 header pt-10 py-9 container mx-auto item-center left-0 right-0 fixed w-full flex justify-between'>
				<div
					className='logo'
					onMouseEnter={() => changeCursorAnimate('logo')}
					onMouseLeave={leave}
				>
					PVTD
				</div>
				<ul
					onMouseEnter={() => changeCursorAnimate('logo')}
					onMouseLeave={leave}
					className='flex items-center text-4xl'
				>
					{MENU.map((item, idx) => (
						<li
							className='px-5 py-2 h-full flex items-center hover:font-bold'
							key={idx}
						>
							<Link to={item.href}>{item.label}</Link>
						</li>
					))}
				</ul>
			</header>
		</>
	)
}

export default Header
