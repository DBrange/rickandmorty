import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";


export default function Detail() {
  const { detailId } = useParams();
  console.log(detailId);

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  
  return (
    <div className={style.container}>
      <Link to='/home'>
      <button className={style.btn}>Home</button>
      </Link>
      <div className={style.card}>
        <div>

      <h3>Name: {character?.name}</h3>
      <h3>Status: {character?.status}</h3>
      <h3>Specie: { character?.specie }</h3>
      <h3>Gender: {character?.gender }</h3>
      <h3>Origin: { character?.origin?.name}</h3>
        </div>
      <img src={character?.image} alt={character?.name} />
      </div>
    </div>
  )
}