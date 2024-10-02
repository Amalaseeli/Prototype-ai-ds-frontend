import { useState, useEffect } from 'react'

function Timer() {
    const [count, setCount] = useState('No Name')

    useEffect(() => {
        setCount('Amala')
        console.log(count)

    }, []);
    return (
        <>
            <p className='text-white'>Here the Name: {count}</p>
        </>
    )
}
export default Timer