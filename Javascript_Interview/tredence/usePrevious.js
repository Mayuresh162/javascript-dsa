import "./styles.css";
import { useState } from "react";
import { usePrevious } from "./usePrevious";

export default function App() {
  const [text, setText] = useState("");
  const previousText = usePrevious(text);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Previous: {previousText}</p>
    </div>
  );
}


import { useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export { usePrevious };
