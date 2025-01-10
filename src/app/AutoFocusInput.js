import { useRef, useEffect } from "react";

export default function AutoFocusInput(){
   const inputRef = useRef('');
   useEffect(() => {
        inputRef.current.focus();
   }, []);
   return <input ref={inputRef} type="checkbox"></input> 
}