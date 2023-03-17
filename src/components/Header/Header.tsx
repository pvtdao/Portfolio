import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MENU = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'Projects',
		href: '/projects'
	},
	{
		label: 'Contact',
		href: '/contact'
	}
]

const menuItem = {
	exit: {
		opacity: 0,
		height: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.3,
			delay: 1
		}
	}
}

type HeaderPropsType = {
	changeCursorAnimate: (type: string) => void
	leave: () => void
	leaveMenu: () => void
}
function Header({ changeCursorAnimate, leave, leaveMenu }: HeaderPropsType) {
	const [isOpen, setIsOpen] = useState(true)
	const {pathname} = useLocation()

	useEffect(() => {setIsOpen(false)}, [pathname])

	return (
		<section className='header bg-white z-10 left-0 right-0 fixed'>
			<header className='pt-10 py-9 container mx-auto item-center w-full flex justify-between'>
				<Link
					to={'/'}
					className='logo'
					onMouseEnter={() => changeCursorAnimate('logo')}
					onMouseLeave={leave}
				>
					PVTD
				</Link>
				<div
					onMouseEnter={() => changeCursorAnimate('scroll-icon')}
					onMouseLeave={leave}
					className='menu-line h-[40px] w-[40px] flex flex-col justify-center items-center cursor-pointer rounded-full z-50'
					id='btn-menu'
					onClick={() => setIsOpen(!isOpen)}
				>
					{Array.from(new Array(4)).map((_, idx) => {
						let lineClassName
						switch (idx + 1) {
							case 1:
								lineClassName =
									'w-[60%] border-t-2 border-solid'
								break
							case 2:
								lineClassName =
									'w-[30%] border-t-2 border-solid'
								break
							case 3:
								lineClassName =
									'w-[75%] border-t-2 border-solid'
								break
							case 4:
								lineClassName =
									'w-[40%] border-t-2 border-solid'
								break

							default:
								break
						}
						return (
							<div
								key={idx}
								className={`min-h-[5px] ${
									isOpen ? 'border-white' : 'border-black'
								} transition-all ${lineClassName}`}
							></div>
						)
					})}
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.ul
							variants={menuItem}
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: '100vh', opacity: 1 }}
							transition={{ duration: 0.3 }}
							exit='exit'
							onMouseEnter={() => changeCursorAnimate('default-menu')}
							className={`bg-black text-white top-0 left-0 bottom-0 right-0 w-full h-screen md:w-auto absolute flex flex-col justify-center items-center gap-[3rem] md:gap-[4rem] text-[3rem] md:text-4xl lg:text-[3rem]`}
						>
							{MENU.map((item, idx) => (
								<motion.li
									initial={{ y: 90, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 1 - (idx + 1) * 0.2 }}
									exit={{
										opacity: 0,
										y: 90,
										transition: {
											ease: 'easeInOut',
											delay: 0.6 - (idx + 1) * 0.2
										}
									}}
									onMouseEnter={() =>
										changeCursorAnimate('logo')
									}
									onMouseLeave={leaveMenu}
									className='w-full md:w-auto mx-auto md:px-5 md:py-2 flex items-center uppercase justify-center hover:font-bold'
									key={idx}
								>
									<Link to={item.href}>{item.label}</Link>
								</motion.li>
							))}
						</motion.ul>
					)}
				</AnimatePresence>
			</header>
		</section>
	)
}

export default Header
