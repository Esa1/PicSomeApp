import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        let reference = ref.current
        reference.addEventListener("mouseenter", enter)
        reference.addEventListener("mouseleave", leave)
        
        return () => {    
            reference.removeEventListener("mouseenter", enter)
            reference.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [hovered, ref]
}

export default useHover