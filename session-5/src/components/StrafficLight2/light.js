import { useState } from 'react'
import './light.css'

export const StrafficLight2 = () => {
    const [lights, setLights] = useState([
        {
            color: 'red',
            isActive: true
        },
        {
            color: 'yellow',
            isActive: false
        },
        {
            color: 'green',
            isActive: false
        }

    ])
    const handleClick = () => {
        const activeIdx = lights.findIndex((lights) => {
            return lights.isActive === true
        })
        console.log(activeIdx)
        let nextActiveIdx
        if (activeIdx === 0) {
            nextActiveIdx = activeIdx + 1
            if (activeIdx === 1) {
                nextActiveIdx = activeIdx + 1
            }
            if (activeIdx === 2) {
                nextActiveIdx = activeIdx - 1
            }
        }
        if (activeIdx === lights.length - 1) {
            nextActiveIdx = activeIdx - 1
        
            if (activeIdx === 1) {
                nextActiveIdx = activeIdx - 1
            }
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