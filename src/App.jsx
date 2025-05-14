import { useState } from 'react'

function App() {
  const [colors, setColors] = useState("Olive")
  const [customColor, setCustomColor] = useState('#ffffff')

  const handleColorChnage = (e) => {
    setCustomColor(e.target.value)
     setColors(customColor)

  }
   const applyCustomColor = () => {
    setColors(customColor)
   }

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: colors}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
           
            <button onClick={() => setColors("blue")}
            className="outline-none px-4 cursor-pointer py-1 rounded-full text-white shadow-lg" style={{background:"blue" }}> Blue
            </button>
          
            <button onClick={() => setColors("red")}
            className="outline-none px-4 cursor-pointer py-1 rounded-full text-white shadow-lg" style={{background:"red" }}> Red
            </button>
          
            <button onClick={() => setColors("purple")}
            className="outline-none px-4 cursor-pointer py-1 rounded-full text-white shadow-lg" style={{background:"purple" }}> Purple
            </button>
          
            <button onClick={() => setColors("green")}
            className="outline-none cursor-pointer px-4 py-1 rounded-full text-white shadow-lg" style={{background:"green" }}> Green
            </button>

            <button onClick={() => setColors("black")}
            className=" cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"black" }}> Black
            </button>
            <div className="flex items-center gap-2">
            <input type="color" value={customColor} onChange={handleColorChnage} className="h-8 w-10 cursor-pointer rounded-full"
            />
           <button onClick={applyCustomColor} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-700 hover:bg-gray-600"> Apply Custom Colors
            
           </button>
            </div>

           

          </div>
        </div>
      </div>
    </>
  )
}

export default App
