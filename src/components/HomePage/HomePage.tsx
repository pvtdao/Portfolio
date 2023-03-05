import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

function HomePage() {
	return (
		<header className='header container mx-auto item-center left-0 right-0 fixed w-full flex justify-between'>
			<div className='logo'>PVTD</div>
			<ul className='flex items-center text-4xl gap-12'>
				<li>
					<Link to='/projects'>Project</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</header>
	)
}

export default HomePage
