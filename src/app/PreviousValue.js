import {useRef, useState, useEffect} from 'react';

export default function PreviousValue(){
  const [numero, setNumero] = useState(null);
  const numeroAnterior = useRef(numero);

  useEffect(() => {
    numeroAnterior.current = numero;
    }, [numero]);
    
  return <div>
    Valor actual: {numero} Valor previo: {numeroAnterior.current}
    <button onClick={() => setNumero(Math.floor(Math.random() * 100))}>Cambiar valor</button>
  </div>
}