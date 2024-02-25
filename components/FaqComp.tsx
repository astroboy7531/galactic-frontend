import React, { useState, useRef } from "react"
// import ChevronClosed from "../icons/ChevronClosed.svg"
// import ChevronOpen from "../icons/ChevronOpen.svg"
type AccordionProps = {
    title: string
    content: string
}
const FaqComp = ({ title, content }: AccordionProps) => {
    const [isOpened, setOpened] = useState<boolean>(false)
    const [height, setHeight] = useState<string>("0px")
    const contentElement = useRef(null)

    const HandleOpening = () => {
        setOpened(!isOpened)
        setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
    }
    return (
        <div onClick={HandleOpening} className=" mb-4 w-full cursor-pointer border-[3px] dark:bg-gray-200 gradient-border rounded-xl">
            <div className={" h-[4.5rem] max-sm:h-14 p-8 flex justify-between items-center text-black rounded-xl"}>
                <h4 className="font-bold">{title}</h4>
                {isOpened ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 rotate-45 duration-300 transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 duration-300 transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                }
            </div>
            <div
                ref={contentElement}
                style={{ height: height }}
                className="bg-white/10 text-black overflow-hidden transition-all duration-300 rounded-b-xl"
            >
                <p className="p-4">{content}</p>
            </div>
        </div>
    )
}

export default FaqComp
