import { useRef, useEffect } from "react";

export default function CounterRef(){
   const counter = useRef(0);
   return <>
    <button onClick={() => {counter.current++; console.log(counter.current)}}>+</button>
    <button onClick={() => alert(counter.current)}>Mostrar valor</button>
   </>
}