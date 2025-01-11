import { useRef, useState, useEffect } from "react";

export default function RenderCounter(){
  const numRenders = useRef(1);
  const [state, setState] = useState(false);

  useEffect(() => {
    numRenders.current++; 
  });

  return <div>
    {numRenders.current}
    <button onClick={() => setState(!state)}>Renderizar</button>
  </div>
}