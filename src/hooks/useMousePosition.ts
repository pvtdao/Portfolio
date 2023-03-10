import { useState, useEffect } from "react"

export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

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

    return { mousePosition }
}
