import { useRef, useEffect, useState } from "react";

export default function Timer(){
    const timerRef = useRef(null);
    const [contador, setContador] = useState(0);

    function iniciarContador(){
      if (timerRef.current === null) {
        timerRef.current = setInterval(() => {
          setContador((prevCount) => prevCount + 1); 
        }, 1000);
      }
    }

    function detenerContador(){
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    useEffect(() => {
      return () => {
        stopTimer();
      };
    }, []);

    return <div>
      <p>{contador}</p>
      <button onClick={iniciarContador}>Iniciar</button>
      <button onClick={detenerContador}>Detener</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
}