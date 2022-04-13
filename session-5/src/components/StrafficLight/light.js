import { useState } from 'react'
import './light.css'

export const StrafficLight = () => {
    const [lights, setLights] = useState([
        {
            color: 'red',
            isActive: false
        },
        {
            color: 'yellow',
            isActive: false
        },
        {
            color: 'green',
            isActive: true
        }

    ])
    const handleClick = () => {
        const activeIdx = lights.findIndex((a) => {
            return a.isActive === true
        })
        console.log(activeIdx)
        let nextActiveIdx
        if (activeIdx === lights.length - 1) {g
            nextActiveIdx = 0
        } else {
            nextActiveIdx = activeIdx + 1
        }
        const newLights = [...lights]
        newLights[activeIdx].isActive = false
        newLights[nextActiveIdx].isActive = true
        setLights(newLights)
    }
    return (
        <div className='light-container'>
            <button className='button' onClick={handleClick}>NEXT</button>
            {
                lights.map((light) => {
                    return (<div className='light' style={{backgroundColor: light.isActive ? light.color : 'grey'}}></div>)
                })
            }
        </div>
    )
}