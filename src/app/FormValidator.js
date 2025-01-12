import {useRef, useState} from 'react';

export default function FormValidator(){
  const inputEmailRef = useRef(null);
  const [mensaje, setMensaje] = useState('');

  function validar(){
    const regex = /.+@.+\..+/;
    if (regex.test(inputEmailRef.current.value)){
      setMensaje('Correo válido');
    }else{
      setMensaje('Correo no válido');
    }
  }

  return <div>
    <input type='email' ref={inputEmailRef} onBlur={validar}></input>
    {mensaje}
  </div>
}