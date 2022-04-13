import {useState, useEffect} from 'react'

export const Count = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You had clicked ${count} times`
    })


    return (
        <div className='btn'>
            <button onClick={
                () => {setCount(count + 1)}
            }>
                Increase
            </button>
            <div>{count}</div>
        </div>
    )
}