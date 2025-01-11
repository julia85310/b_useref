import {useRef, useState} from 'react';

export default function ColorSlider(){
  const divRef = useRef(null);
  const [redValue, setRedValue] = useState(100);

  function sliderChange(e){
    const value = e.target.value;
    setRedValue(value);
    if (divRef.current) {
      divRef.current.style.backgroundColor = `rgb(${redValue}, 100, 100)`;
    }
  }

  return <div ref={divRef}>
      <input type='range' min="0" max="255" value={redValue} onChange={(e) => sliderChange(e)}></input>{redValue}
  </div>
}