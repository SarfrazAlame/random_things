import { useEffect, useRef, useState } from "react";

const InputRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
    console.log(inputRef);
  });

  function handlerClick() {
    // inputRef.current.focus();
    // ref.current++;
    // console.log(ref.current);
  }
  return (
    <div>
      <button onClick={handlerClick}>Click me</button>
      <input ref={inputRef} />
    </div>
  );
};

export default InputRef;
