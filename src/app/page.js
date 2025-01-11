'use client'
import AutoFocusInput from "./AutoFocusInput";
import CounterRef from "./CounterRef";
import Timer from "./Timer";
import RenderCounter from "./RenderCounter";
import PreviousValue from "./PreviousValue";

export default function Home() {
  return (
    <div>
      <h1>Ejercicio1</h1>
      <AutoFocusInput></AutoFocusInput>
      <h1>Ejercicio2</h1>
      <CounterRef></CounterRef>
      <h1>Ejercicio3</h1>
      <Timer></Timer>
      <h1>Ejercicio4</h1>
      <RenderCounter></RenderCounter>
      <h1>Ejercicio5</h1>
      <PreviousValue></PreviousValue>
      <h1>Ejercicio6</h1>
      <h1>Ejercicio7</h1>
      <h1>Ejercicio8</h1>
    </div>
  );
}
