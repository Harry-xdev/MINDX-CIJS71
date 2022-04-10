import { useState } from "react"

import './taskbar.css'
export const TaskBar = () => {
    const [items, setItems] = useState([
        "Clean up bed room",
        "Buy some milk",
        "Jogging",
        "Lean React",
        "Doing Exercises"
    ])
    return (
        <ul>
            {items.map((items) => {
                return <li>{items}</li>
            })}
        </ul>
    )
    // return (
    //     <div className='taskBar'>
    //         <div className="circle"></div>
    //         {props.task}
    //     </div>
    // )
}