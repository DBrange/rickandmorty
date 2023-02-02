import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({ onSearh, setError }) {

  const [character, setCharacter] = useState('')

  const handlerInput = (e) => {
    let value = e.target.value;
    setCharacter(value)
    
  }

  return (
    <div className={style.search}>
      <div className={style.inputBox}>
        <input
          className={style.input}
          type="search"
          value={character}
          onChange={handlerInput}
        />
        {setError && (
          <span className={style.span}>{"No puede repetir personaje"}</span>
        )}
      </div>
      <button className={style.btn} onClick={() => onSearh(character)}>
        Agregar
      </button>
    </div>
  );
}
