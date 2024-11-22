// UseState Hook for Increment 

'use client'
import { useState } from 'react';

export default function Counter (){
    const [count, setCount] = useState(0);
    return (
        <>
        <div className="bg-slate-100 h-screen w-full flex justify-center items-center flex-col">
            <p className="text-xl font-bold">Count : {count} </p>
            <button onClick={() => {setCount(count + 1)}} className="bg-slate-950 px-4 py-2 rounded-lg text-white hover:bg-gray-800 active:bg-slate-400 active:scale-95 transition-all"> Increment </button>
        </div>
        </>
    )
}