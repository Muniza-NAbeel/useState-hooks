// Button onClick Effect 

'use client'

export default function Home (){
  const handleClickEvent = () => {
    console.log("Hi Muniza..!!")
  }
  return (
    <>
     <div className="bg-amber-100 w-full h-screen flex justify-center items-center">
      <button onClick={handleClickEvent} className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-600 active:bg-amber-500 active:scale-95 transition-all ">
         Click Me1
      </button>
     </div>
    </>
  )
}