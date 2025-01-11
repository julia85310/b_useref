import {useEffect, useRef, useState} from 'react';

export default function TextEditor(){
  const texts = useRef([]);
  const [text, setText] = useState('');

  useEffect(() =>{
    if(texts.current[texts.current.length - 1] != text){
      texts.current.push(text);
    }
  }, [text]);

  function undo(){
    if (texts.current.length > 0){
      texts.current.pop();
      setText(texts.current[texts.current.length - 1]);
    }
  }

  return <div>
    <input type='text' value={text} onChange={e => setText(e.target.value)}></input>
    <button onClick={undo}>Deshacer</button>
  </div>
}