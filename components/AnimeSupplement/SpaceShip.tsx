import React, { useEffect, useState } from 'react'

interface Props {
    show: boolean;
}
const SpaceShip: React.FC<Props> = ({ show }) => {
    const [flag, setFlag] = useState<boolean>(false)
    const [trigger, setTrigger] = useState<boolean>(false);
    return (
        <>
            <div className={`shake-anime`}>
                <img
                    src='/thirdPart/spaceX.png'
                    alt='space'
                    className='object-cover object-center'
                />
            </div>
        </>
    )
}

export default SpaceShip;