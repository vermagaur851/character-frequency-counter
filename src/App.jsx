import { useEffect, useState } from "react";

function App() {
  const [Text, setText] = useState("");
  const [freq, setFreq] = useState(Array(26).fill(0));
  const handleChange = (e) => {
    setText(e.target.value);
    let str = e.target.value;
    let temp = Array(26).fill(0);
    for (const char of str) {
      let i = char.toLowerCase().charCodeAt(0) - 97;
      if(i>=0 && i<26) temp[i]++;
    }
    setFreq(temp);
  };

  return (
    <div className="min-h-screen pt-4 bg-teal-700">
      <div className="flex items-center flex-col p-2 gap-3">
        <h1 className="font-bold text-gray-900 text-3xl">
          Character Frequency Counter Application
        </h1>
        <div className="p-2">
          <label className="font-semibold pr-3 text-lg" htmlFor="Text">
            Text :
          </label>
          <input
            readOnly={0}
            className="rounded-lg p-1 border-gray-300 border-2"
            type="text"
            placeholder="Enter your text here"
            value={Text}
            onChange={handleChange}
          />
        </div>
        <div className="p-4 mx-auto grid grid-cols-6 gap-3 md:w-[80%] bg-blue-300">
          {freq?.map((char, index) => (
            <div key={index} className="flex bg-blue-500 items-center justify-center border-gray-400 border-2 p-2">
              <h1>
                {String.fromCharCode(65 + index)} {"->"}
              </h1>
              <p className="font-semibold">{char}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
