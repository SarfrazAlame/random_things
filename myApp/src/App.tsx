// import { useRef, useState } from "react";
import InputRef from "./components/InputRef";

function App() {
  // const [count, setCount] = useState(0);
  // const countRef = useRef(0);

  // const handleIncrement = () => {
  //   setCount(count+1);
  //   countRef.current++;

  //   console.log("State", count);
  //   console.log("Ref", countRef.current);
  // };

  return (
    <div className="w-full h-full flex gap-3 justify-center items-center">
      {/* {countRef.current}
      <button
        onClick={handleIncrement}
        className="border px-10 py-3 rounded bg-blue-600 text-white"
      >
        Increment */}
      {/* </button> */}
      <InputRef/>
    </div>
  );
}

export default App;
