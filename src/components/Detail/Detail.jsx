import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  console.log(detailId);

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
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
  
  console.log(character)

  return (
    <div>
      <Link to='/home'>
      <button>Home</button>
      </Link>
      <h3>{character?.name}</h3>
      <h3>{character?.status}</h3>
      <h3>{ character?.specie }</h3>
      <h3>{character?.gender }</h3>
      <h3>{ character?.origin?.name}</h3>
      <img src={character?.image} alt={character?.name} />
    </div>
  )
}