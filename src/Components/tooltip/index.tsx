import {FC, useRef} from "react";

interface Props {
    tooltipText: string,
    closeDelay?: number,
    direction: "top" | "left" | "bottom" | "right",
    clickable?: boolean,
}

const Tooltip: FC<Props> = ({children, clickable, direction, closeDelay, tooltipText}) => {


    const tipRef = useRef<any>(null);
    const tipWrapperRef = useRef<any>(null);

    const tooltip = tipRef.current

    const computePosition = () => {
        const {right,top,bottom,left,height,width}:DOMRect = tipWrapperRef.current.getBoundingClientRect()

        const tooltipHeight = height / 2
        const elementHeight = parseInt(getComputedStyle(tooltip).height, 10);
        const tooltipWidth = width / 2
        const elementWidth = parseInt(getComputedStyle(tooltip).width, 10);

        if (direction === "right") {
            tooltip.style.left = right + "px"
            tooltip.style.top = (top + tooltipHeight - (elementHeight / 2)) + "px"
        } else if (direction === "bottom") {
            tooltip.style.top = (bottom) + "px"
            tooltip.style.left = (left + tooltipWidth - (elementWidth / 2)) + "px"
        } else if (direction === "top") {
            tooltip.style.left = (left + tooltipWidth - (elementWidth / 2)) + "px"
            tooltip.style.top = (top - elementHeight) + "px"
        } else {
            tooltip.style.left = (left - elementWidth) + "px"
            tooltip.style.top = (top + tooltipHeight - (elementHeight / 2)) + "px"
        }
    }


    const handleMouseEnter = () => {
        if (!clickable) {
            tooltip.classList.add("open")
            computePosition()
        }
    }

    const handleMouseLeave = () => {
            tooltip.classList.remove("open")
    }

    const handleClick = () => {
        if (clickable && !tooltip.classList.contains("open")) {
            tooltip.classList.add("open")
            computePosition()
            setTimeout(() => tooltip.classList.remove("open"), closeDelay)
        }
    }

    return (
        <div ref={tipWrapperRef} className="react-tooltip-wrapper"
             onClick={handleClick}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <div ref={tipRef} className={`react-tooltip ${direction}`}>
                {tooltipText}
            </div>
            {children}
        </div>
    );
}
export default Tooltip