import './counting.css'
import { useState } from 'react'

export const WordsCounting = () => {  

    const [words, setWords] = useState('')
    const array = words.split(" ")
    const newArr = array.filter((value) => {
        return value != ''
    })

    
    let qty = newArr.length

    console.log(qty)
    console.log(newArr)

    return (
        <div className="input">
            <input
                placeholder="Words counting"
                onChange={event => setWords(event.target.value)}
            />
            <div>Words:</div>
            <div className="display">{qty}</div>
        </div>

    )
}