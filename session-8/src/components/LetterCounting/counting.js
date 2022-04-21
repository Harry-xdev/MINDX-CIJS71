import './counting.css'
import { useState } from 'react'

export const WordsCounting = () => {

    const [words, setWords] = useState('')
    
    const array = words.split(" ")
    const newArr = array.filter((value) => {
        return value !== ''
    })

    let qty = newArr.length

    const handleOnChange = (event) => {
        setWords(event.target.value)
    }

    return (
        <div className="input">
            <input
                placeholder="Words counting"
                onChange={handleOnChange}
            />
            <div>Words:</div>
            <div className="display">{qty}</div>
        </div>

    )
}