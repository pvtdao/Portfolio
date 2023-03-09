import React, { useEffect, useState } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import "./intro.css"
import { motion, Variants } from "framer-motion"

function Intro({
    setHasIntro,
    introRef
}: {
    setHasIntro: React.Dispatch<React.SetStateAction<boolean>>
    introRef: React.RefObject<HTMLDivElement>
}) {
    const [slideIntro, setSlideIntro] = useState<boolean>(false)

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    const [cursorAnimate, setCursorAnimate] = useState("default")

    function mouseMove(e: MouseEvent) {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    function handleNext() {
        setSlideIntro(true)
        setHasIntro(false)
    }

    const variants: Variants = {
        default: {
            x: mousePosition.x - 10, // -10 cause cursor height 20. 20/2 = 10 => make the cursor center
            y: mousePosition.y - 10
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75, // cause current height is 150 so we need to -150/2 to center cursor
            y: mousePosition.y - 75,
            backgroundColor: "white",
            mixBlendMode: "difference"
        },
        next: {
            height: 120,
            width: 120,
            x: mousePosition.x - 60,
            y: mousePosition.y - 60,
            backgroundColor: "white",
            mixBlendMode: "difference"
        }
    }

    function textEnter() {
        return setCursorAnimate("text")
    }
    function nextEnter() {
        return setCursorAnimate("next")
    }
    function leave() {
        return setCursorAnimate("default")
    }

    return (
        <section ref={introRef} className='intro'>
            <section
                className={`part-1 part ${slideIntro && "slide-out-1"}`}
            ></section>
            <section
                className={`part part-2 ${
                    slideIntro && "slide-out-2"
                } h-full md:h-1/3`}
            >
                {/* Wrapp */}
                <div className='intro__container'>
                    {/* button */}
                    {!slideIntro && (
                        <div
                            onMouseEnter={nextEnter}
                            onMouseLeave={leave}
                            className='intro__next'
                            onClick={handleNext}
                        >
                            <FaLongArrowAltRight
                                size={"50px"}
                                className='next-icon'
                            />
                            <span className='next-text'> Explore </span>
                        </div>
                    )}
                    {/* fly in text */}
                    <div
                        onMouseEnter={textEnter}
                        onMouseLeave={leave}
                        className='intro__content'
                    >
                        <span className='intro__text intro__text-1'>P</span>
                        <span className='intro__text intro__text-2'>v</span>
                        <span className='intro__text intro__text-3'>t</span>
                        <span className='intro__text intro__text-4'>d</span>
                    </div>
                </div>
            </section>
            <section
                className={`part-3 part ${slideIntro && "slide-out-3"}`}
            ></section>
            <motion.div
                
                className='cursor-intro'
                variants={variants}
                animate={cursorAnimate} //The first time, animate is default
            ></motion.div>
        </section>
    )
}

export default Intro
