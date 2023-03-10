import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useMousePosition } from "../../hooks/useMousePosition"
import "./homepage.css"
import { motion, Variants } from "framer-motion"

function HomePage() {
    const { mousePosition } = useMousePosition()
	const [cursorAnimate, setCursorAnimate] = useState("default")

	
    const variants: Variants = {
		default: {
			x: mousePosition.x - 10, 
            y: mousePosition.y - 10
		}
	}

    return (
        <section className='homepage relative'>
            <header className='header container mx-auto item-center left-0 right-0 fixed w-full flex justify-between'>
                <div className='logo'>PVTD</div>
                {/* <ul className='flex items-center text-4xl gap-12'>
                    <li>
                        <Link to='/projects'>Project</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul> */}
            </header>

            <motion.div
                variants={variants}
				animate={cursorAnimate}
                className='cursor-homepage'
            ></motion.div>
        </section>
    )
}

export default HomePage
