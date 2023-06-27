import {useState} from 'react'
import PropTypes from "prop-types";

export default function CounterApp({ value }) {

    const [ counter, setCounter] = useState( value )
    //opcion 1
    // const handleAdd = () => {
    //     setCounter(counter + 1)
    // }

    //opcion 2
    const handleAdd = () => {
        setCounter(()=> counter + 1)
    }
    const handleDelete = () => {
        setCounter(()=> counter - 1)
    }
    const resetCounter = () => {
        setCounter(0)
    }



  return (
    <>
      <h1>Contador</h1>
      <p>{counter}</p>

      <button onClick={handleAdd}> Contar + 1 </button>
      <button onClick={handleDelete}> Restar - 1 </button>
      <button onClick={resetCounter}> Resetear </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
