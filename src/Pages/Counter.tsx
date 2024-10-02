import {useState} from 'react';

export default function Counter(){
    const[count, setCount]=useState(0);
    return(
        <>
        <div className=''>
        <p className='text-white '>You clicked {count} times</p>
        <button className="bg-slate-50 p-10" onClick={()=> setCount(count+1)}>Click me!</button>
        </div>
        
        </>
    )
}
