'use client'
import { useState } from 'react' ;

export default function Counting (){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if(count <10){
            setCount(count+1)
        }
    }
    const handleDecrement = () => {
        if(count >0){
            setCount(count - 1)
        }
    }
    return (
        <>
        <div className="bg-slate-300 w-full h-screen flex justify-center items-center flex-col gap-4 relative">
            <p className='text-4xl font-extrabold'> Count : {count} </p>
            <div className="space-x-4">
            <button onClick={handleIncrement} className="bg-slate-950 text-white px-4 py-2 rounded-lg font-bold text-xl hover:bg-slate-800 active:bg-slate-600 active:scale-95 transition-all">Increment</button>
            <button onClick={handleDecrement} className="bg-slate-950 text-white px-4 py-2 rounded-lg font-bold text-xl hover:bg-slate-800 active:bg-slate-600 active:scale-95 transition-all">Decrement</button>
            </div>
           <div className={`bg-red-700 text-white px-4 py-2 rounded-lg text-xl font-bold shadow-xl absolute top-0 mt-10 ${count >= 10 ? "visible" : "invisible"}`}>
             You reached your maximum allowed limit 
           </div>
        </div>
        </>
    )
}