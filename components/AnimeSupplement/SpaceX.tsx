import React, { useEffect, useState } from 'react'

interface Props {
    show: boolean;
}
const SpaceX: React.FC<Props> = ({ show }) => {
    const [flag, setFlag] = useState<boolean>(false)
    const [trigger, setTrigger] = useState<boolean>(false);
    useEffect(() => {
        if (show) {
            setTrigger(show);
        }
    }, [show])
    useEffect(() => {
        console.log(show, 'show>>><<<')
        if (show) {
            const timer = setTimeout(() => {
                setFlag(true)
            }, 3000)
            return () => { clearTimeout(timer) }
        }
    }, [show])
    return (
        <>
            <div className={`${trigger ? (flag ? 'space-shake-anime' : 'space-move-anime') : ''}`}>
                <img
                    src='/explorer/space.png'
                    alt='space'
                    className='object-cover object-center'
                />
            </div>
        </>
    )
}

export default SpaceX;