import { useState } from 'react'


function Calculator() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput((prev) => prev + value);
  }

  function handleEvaluate() {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput("Error");
    }
  }
  function handleClear() {
    setInput("");
  }
  


  return (
    <div className=' bg-gradient-to-r from-blue-500 via-teal-300 to-green-500 w-screen h-screen '>
      <div className="grid content-center ...  justify-items-center">
        <div className=" bg-indigo-800 text-white text-2xl rounded-t-2xl shadow grid grid-cols-4 w-[300px] h-[250px] mt-20">
          {input}
        </div>
        <div className="grid grid-cols-4 w-[300px] h-[300px] text-white">
          {["7", "8", "9", "*" , "4", "5", "6", "/", "1", "2", "3", "-", "0", ".", "=", "+"].map((key) => {
            return key === "=" ? (
              <button
                key={key}
                className=" bg-indigo-950 text-white shadow"
                onClick={handleEvaluate}
              >
                {key}
              </button>
            ) : (
              <button
                key={key}
                className=" bg-indigo-950 shadow"
                onClick={() => handleClick(key)}
              >
                {key}
              </button>
            );
          })}
        </div>
        <button className="bg-red-500 text-white p-4 rounded-b-2xl shadow w-[300px]" onClick={handleClear}>
        Clear
        </button>
      </div>
    </div>
    
  )
}

export default Calculator
