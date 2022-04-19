import './counting.css'
import { useState } from 'react'

export const LetterCounting = () => {  

    const [words, setWords] = useState('')
    let array = words.split(" ")
    let qty = array.length

    console.log(qty)
    console.log(array)

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